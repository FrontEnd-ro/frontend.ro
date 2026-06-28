import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Artificially slow image used by the "content shifting" HTML demo
 * (`pages/demo/html/content-shifting.tsx`). Replaces the old Express
 * `GET /api/demo/slow-image` route.
 */
const IMG_SRC = 'https://d3tycb976jpudc.cloudfront.net/demo-assets/eiffel-tower-during-night.jpg';
const DELAY = 2000;

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const fetchRes = await fetch(IMG_SRC);
    const arrayBuffer = await fetchRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await new Promise((resolve) => setTimeout(resolve, DELAY));

    res.setHeader('Content-Type', 'image/jpeg');
    res.status(200).send(buffer);
  } catch (err) {
    console.error('[api/demo/slow-image] Failed with error', err);
    res.status(404).end();
  }
}
