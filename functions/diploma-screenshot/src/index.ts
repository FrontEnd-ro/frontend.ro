import {
  Browser,
  Page,
  Viewport,
  ScreenshotOptions,
  PDFOptions,
  JSONObject,
} from 'puppeteer-core';
import * as dotenv from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import chromium = require('chrome-aws-lambda');

interface ResizeOptions extends JSONObject {
  width?: number,
  height?: number,
  fontSize?: string,
}

dotenv.config();

exports.handler = run;

async function run(event: {
  url: string;
  dryRun: boolean;
  certificationId: string;
}) {
  console.log('Function called with event=', event);

  const { pdf, ogImage } = await generateAssets(event.url);

  if (event.dryRun) {
    const message = 'Dry run. Skipping S3 upload';
    console.log(message);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        status: 200,
        message,
      }),
    };
    return response;
  }

  const s3 = new S3Client({ region: process.env.AWS_REGION });
  const pdfUri = await uploadToS3(s3, `certifications/${event.certificationId}/diploma.pdf`, pdf);
  const ogImageUri = await uploadToS3(s3, `certifications/${event.certificationId}/og_image.jpg`, ogImage);

  const uploadResult = {
    pdf: {
      success: pdfUri !== null,
      uri: pdfUri,
    },
    ogImage: {
      success: ogImageUri !== null,
      uri: ogImageUri,
    },
  };

  console.log('Upload Result', uploadResult);

  const response = {
    statusCode: 200,
    body: JSON.stringify(uploadResult),
  };
  return response;
}

async function generateAssets(url: string): Promise<{ pdf: Buffer, ogImage: Buffer }> {
  // https://github.com/FrontEnd-ro/frontend.ro/issues/449
  const DOM_SELECTOR = '[data-diploma]';
  // Hide elements with this attribute from the <Diploma> element
  const INNER_SELECTOR_TO_HIDE = '[data-diploma-hidden]';

  const VIEWPORT_SIZE: Viewport = { width: 1500, height: 1000 };
  const OG_IMAGE_STYLES = { width: 1200, height: 620, fontSize: '0.8em' };
  const SCREENSHOT_OPTIONS: ScreenshotOptions = { quality: 100, type: 'jpeg' };
  const PDF_OPTIONS: PDFOptions = {
    width: VIEWPORT_SIZE.width,
    height: VIEWPORT_SIZE.height,
    printBackground: true,
    pageRanges: '1',
  };

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await navigateTo(browser, url, VIEWPORT_SIZE);

  await hideEverythingElse(page, DOM_SELECTOR);
  await hideElement(page, `${DOM_SELECTOR} ${INNER_SELECTOR_TO_HIDE}`);

  const pdf = await page.pdf(PDF_OPTIONS);
  await resizeDomElement(page, DOM_SELECTOR, OG_IMAGE_STYLES);
  const ogImage = await captureScreenshot(page, DOM_SELECTOR, { ...SCREENSHOT_OPTIONS });

  browser.close();

  return {
    pdf,
    ogImage,
  };
}

async function navigateTo(browser: Browser, url: string, viewport?: Viewport) {
  const page = await browser.newPage();

  if (viewport) {
    await page.setViewport(viewport);
  }

  await page.goto(url, { waitUntil: 'networkidle0' });
  return page;
}

// Apply opacity 0 to all elements inside the page
// except ones contained inside our target DOM element
async function hideEverythingElse(page: Page, domSelector: string) {
  await page.evaluate((domSelector: string) => {
    const allElements = [...document.querySelectorAll('body *')] as HTMLElement[];
    const targetElement: HTMLElement = document.querySelector(domSelector);

    allElements.forEach((el) => {
      if (el.contains(targetElement) || targetElement.contains(el)) {
        return;
      }

      el.style.opacity = '0';
    });

    targetElement.style.fontSize = '1.25em';
  }, domSelector);
}

// Hide an element from the page
async function hideElement(page: Page, domSelector: string) {
  await page.evaluate((domSelector: string) => {
    const targetElements = [...document.querySelectorAll(domSelector)] as HTMLElement[];
    targetElements.forEach((el) => {
      el.style.opacity = '0';
    });
  }, domSelector);
}

async function resizeDomElement(
  page: Page,
  domSelector: string,
  options: ResizeOptions = {},
) {
  await page.evaluate((options: ResizeOptions, domSelector: string) => {
    const el: HTMLElement = document.querySelector(domSelector);
    if (!el) {
      return;
    }

    if (options.width) { el.style.width = `${options.width}px`; }
    if (options.height) { el.style.height = `${options.height}px`; }
    if (options.fontSize) { el.style.fontSize = options.fontSize; }

    // This is how we pass parameters inside the `evaluate` fn
  }, options, domSelector);
}

async function captureScreenshot(
  page: Page,
  domSelector: string,
  screenshotOptions?: ScreenshotOptions,
): Promise<Buffer> {
  const domElement = await page.$(domSelector);
  if (!domElement) {
    return null;
  }
  const bbox = await domElement.boundingBox();

  const screenshot = await page.screenshot({ ...screenshotOptions, clip: bbox, encoding: 'binary' });
  return screenshot as Buffer;
}

async function uploadToS3(s3: S3Client, key: string, data: Buffer) {
  const baseUploadParams = {
    Bucket: process.env.AWS_BUCKET,
    ACL: 'public-read',
  };

  try {
    const resp = await s3.send(new PutObjectCommand({
      ...baseUploadParams,
      Body: data,
      Key: key,
    }));
    console.log('✔️ Successfully uploaded to S3:', key, resp);

    const cloudfrontUrl = `${process.env.CLOUDFRONT_UPLOAD}/${key}`;
    if (resp.VersionId) {
      return `${cloudfrontUrl}?versionId=${resp.VersionId}`;
    }
    console.warn('[uploadToS3] expected VersionId to be present on the upload response. Is the bucket misconfigured?', resp);
    return cloudfrontUrl;
  } catch (err) {
    console.error('❌ Got while trying to upload PDF', err);
    return null;
  }
}
