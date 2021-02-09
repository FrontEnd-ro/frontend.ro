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

const loadMonaco = (function loadMonacoIIFE() {
  let promisesToResolve = [];
  let loadInProgress = false;

  return function loadMonaco(): Promise<void> {
    if (window.monaco) {
      return Promise.resolve(monaco);
    }

    if (loadInProgress) {
      return new Promise((resolve) => {
        promisesToResolve.push(resolve);
      });
    }

    const script = document.createElement('script');
    script.src = `${process.env.CLOUDFRONT_PUBLIC}/lib/vs/loader.js`;

    loadInProgress = true;
    document.body.appendChild(script);

    return new Promise((resolve) => {
      promisesToResolve.push(resolve);

      script.addEventListener('load', () => {
        const require: any = window.require;

        require.config({ paths: { vs: `${process.env.CLOUDFRONT_PUBLIC}/lib/vs` } });
        require(['vs/editor/editor.main'], () => {
          monaco = window.monaco;

          promisesToResolve.forEach((res) => res(monaco));
          promisesToResolve = [];
        });
      });
    });
  };
}());

export default loadMonaco;
