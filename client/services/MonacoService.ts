import * as MonacoTypes from 'monaco-editor';
import monacoPackageJson from 'monaco-editor/package.json';
import { useEffect, useState } from 'react';
import { includeScript } from './Utils';

// Have a look at README.md (the Monaco Editor section)
// to understand why we're loading Monaco this way.
class MonacoService {
  private monaco: typeof MonacoTypes;

  // Even if we have multiple concurrent calls to the
  // load function, we only want to include the script
  // once. Thus, we persist here a list of Promises,
  // from the subsequent calls to the `load` function.
  // When the first one succeeds, we simply resolve
  // these promises with the loaded data. If the loading fails,
  // wethen reject all of those.
  private pendingPromises: {
    resolve: (monaco: typeof MonacoTypes) => void;
    reject: (err?: Error) => void;
  }[] = [];

  private loadInProgress = false;

  // Get all exports of 'monaco-editor' bundled in one variable.
  get(): typeof MonacoTypes {
    if (this.monaco !== undefined) {
      return this.monaco;
    }

    throw new Error(
      "Editor hasn't been loadded. Please try refreshing the page!",
    );
  }

  // Load 'monaco-editor' from our CDN and return it.
  async load(): Promise<typeof MonacoTypes> {
    if (this.monaco) {
      return Promise.resolve(this.monaco);
    }

    // We made another call to this function, while a previous
    // one is still loading. In that case, don't trigger a
    // a new load, and just return a new Promise which will
    // resolve when the initial one loads.
    if (this.loadInProgress) {
      return new Promise((resolve, reject) => {
        this.pendingPromises.push({ resolve, reject });
      });
    }

    this.loadInProgress = true;
    try {
      await includeScript(
        `${process.env.CLOUDFRONT_PUBLIC}/lib/monaco-editor/${monacoPackageJson.version}/vs/loader.js`,
      );

      // https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-amd.md
      const { require }: any = window;
      require.config({
        paths: {
          vs: `${process.env.CLOUDFRONT_PUBLIC}/lib/monaco-editor/${monacoPackageJson.version}/vs`,
        },
      });

      const monaco = await new Promise<typeof MonacoTypes>((resolve) => {
        // eslint-disable-next-line import/no-dynamic-require
        require(['vs/editor/editor.main'], resolve);
      });
      this.monaco = monaco;

      this.pendingPromises.forEach(({ resolve }) => resolve(this.monaco));
      return this.monaco;
    } catch (err) {
      this.pendingPromises.forEach(({ reject }) => reject(err));
      console.error('Failed to load Editor');
      throw err;
    } finally {
      this.loadInProgress = false;
      this.pendingPromises = [];
    }
  }
}

const MonacoServiceInstance = new MonacoService();

// Reusble hook for lazy-loading the Monaco Editor
const withMonacoEditor = () => {
  const [loadError, setLoadError] = useState<Error | unknown>(null);
  const [didLoadMonaco, setDidLoadMonaco] = useState(null);

  useEffect(() => {
    MonacoServiceInstance.load()
      .then(() => setDidLoadMonaco(true))
      .catch((err) => setLoadError(err));
  }, []);

  return { loadError, didLoadMonaco };
};

export default MonacoServiceInstance;
export { withMonacoEditor };
