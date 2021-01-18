/* eslint-disable import/no-dynamic-require */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

declare global {
  // @ts-ignore
  var require: any;
  var monaco: any;
}

function loadMonaco(): Promise<void> {
  if (window.monaco) {
    return Promise.resolve(monaco);
  }

  const script = document.createElement('script');
  script.src = `${process.env.CLOUDFRONT_PUBLIC}/lib/vs/loader.js`;

  document.body.appendChild(script);

  return new Promise((resolve) => {
    script.addEventListener('load', () => {
      const require: any = window.require;

      require.config({ paths: { vs: `${process.env.CLOUDFRONT_PUBLIC}/lib/vs` } });
      require(['vs/editor/editor.main'], () => {
        monaco = window.monaco;
        resolve(monaco);
      });
    });
  });
}

export default loadMonaco;
