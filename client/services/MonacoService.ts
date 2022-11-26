import { useEffect, useState } from 'react';
import * as MonacoTypes from 'monaco-editor';
import monacoPackageJson from 'monaco-editor/package.json';
import { includeScript } from './Utils';
import { Theme } from '../components/Editor/themes';
import { FeedbackType } from '~/../shared/types/submission.types';

// Proxy Pattern for interacting with the 'monaco-editor' library.
// NOTE: we also have logic regarding loading the library.
// Have a look at README.md (the Monaco Editor section)
// to understand the limitations, and why we're loading Monaco this way.
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
      this.setupTypescript();

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

  create : typeof MonacoTypes.editor.create = (...props) => this.monaco.editor.create(...props);

  createDiffEditor : typeof MonacoTypes.editor.createDiffEditor
    = (...props) => this.monaco.editor.createDiffEditor(...props);

  // eslint-disable-next-line class-methods-use-this
  getModelLanguage(extension: string): string {
    switch (extension) {
      case 'js':
      case 'jsx':
        return 'javascript';
      case 'ts':
      case 'tsx':
        return 'typescript';
      default:
        return extension;
    }
  }

  setModelLanguage(
    regularOrDiffEditor: MonacoTypes.editor.IEditor,
    language: string,
  ) {
    const model = regularOrDiffEditor.getModel();
    if ('original' in model) {
      // DiffEditor
      this.monaco.editor.setModelLanguage(model.modified, language);
      this.monaco.editor.setModelLanguage(model.original, language);
    } else {
      this.monaco.editor.setModelLanguage(model, language);
    }
  }

  async defineTheme(theme: Theme) {
    const themeConfig = await this.fetchTheme(theme);
    if (themeConfig !== null) {
      this.monaco.editor.defineTheme(theme, themeConfig);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async fetchTheme(theme: Theme): Promise<MonacoTypes.editor.IStandaloneThemeData | null> {
    switch (theme) {
      case Theme.DRACULA: {
        const { DraculaTheme } = await import('../components/Editor/themes/index');
        return DraculaTheme;
      }
      case Theme.TOMORROW_NIGHT: {
        const { TomorrowNightTheme } = await import('../components/Editor/themes/index');
        return TomorrowNightTheme;
      }
      default:
        return null;
    }
  }

  // This enables Intellisense for our TypeScript files.
  private setupTypescript() {
    this.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      esModuleInterop: true,
      jsx: this.monaco.languages.typescript.JsxEmit.Preserve,
      allowJs: true,
    });
  }

  /* ********** DEPRECATED (kind of) - START */
  // These functions are the initial way we built the hover
  // functionality when giving feedback. This is not the correct
  // place for them, because this service is meant only as a small
  // Proxy for the Monaco Service, so that we have a nicer interface
  // to interact with.
  static cursorTimeoutId;

  static LETTER_WIDTH = 7.75;

  extendWithDecorate(editor) {
    const { Range } = this.monaco;
    const { monaco } = this;
    editor.decorationsMap = {};

    editor.decorate = function decorate(data, ...args) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      let currentRange = new Range(...args);
      data.type = data.type || FeedbackType.PRAISE;

      if (args.length === 1 && args[0] instanceof Range) {
        [currentRange] = args;
      }

      let textModel = this.getModel();
      if (
        Object.keys(this.decorationsMap)
          .map((id) => textModel.getDecorationRange(id))
          .find((rangeInfo) => Range.areIntersecting(rangeInfo, currentRange))
      ) {
        return;
      }

      try {
        let newDecorationId = textModel.deltaDecorations(
          [],
          [
            {
              range: currentRange,
              options: {
                inlineClassName: `monaco__feedback--${data.type}`,
                linesDecorationsClassName: `monaco__line monaco__line--${data.type}`,
                stickiness:
                  monaco.editor.TrackedRangeStickiness
                    .NeverGrowsWhenTypingAtEdges,
              },
            },
          ],
        )[0];

        this.decorationsMap[newDecorationId] = data;
      } catch (err) {
        console.log(err);
      }
    };

    editor.unDecorate = function unDecorate(decorationId) {
      let textModel = this.getModel();

      let currentDecorations = Object.keys(this.decorationsMap)
        .filter((id) => id !== decorationId)
        .map((id) => ({
          range: textModel.getDecorationRange(id),
          data: this.decorationsMap[id],
        }));

      textModel.deltaDecorations(Object.keys(this.decorationsMap), []);

      this.decorationsMap = {};

      currentDecorations.forEach((decoration) => this.decorate(decoration.data, decoration.range));
    };

    editor.getEmptyDecorations = function getEmptyDecorations() {
      let textModel = this.getModel();

      return Object.keys(this.decorationsMap)
        .filter((id) => textModel.getDecorationRange(id).isEmpty())
        .map((id) => this.decorationsMap[id]);
    };

    editor.getCustomDecorations = function getCustomDecorations() {
      const textModel = this.getModel();
      let resp = {};

      Object.keys(this.decorationsMap).forEach((id) => {
        resp[id] = {
          data: this.decorationsMap[id],
          range: textModel.getDecorationRange(id),
        };
      });

      return resp;
    };

    editor.getBestTooltipPosition = function (line, column) {
      return {
        leftOffset:
          editor.getOffsetForColumn(line, column)
          + editor.getLayoutInfo().contentLeft,
        topOffset: editor.getTopForLineNumber(line + 1) - editor.getScrollTop(),
      };
    };
  }

  extendWithHover(editor, onShowCb, onHideCb) {
    const { Range } = this.monaco;
    let timeoutId;

    editor.onMouseMove((e) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        onHideCb();

        let textModel = editor.getModel();
        let hoverRange = new Range(
          e.target.position.lineNumber,
          e.target.position.column,
          e.target.position.lineNumber,
          e.target.position.column,
        );

        let foundMatch = Object.keys(editor.decorationsMap).some((id) => {
          if (
            Range.areIntersectingOrTouching(
              textModel.getDecorationRange(id),
              hoverRange,
            )
          ) {
            onShowCb(editor.decorationsMap[id], {
              topOffset: e.event.posy - e.event.editorPos.y,
              leftOffset: e.event.posx - e.event.editorPos.x,
            });

            editor.updateOptions({
              hover: {
                enabled: false,
              },
            });

            return true;
          }

          return false;
        });

        if (!foundMatch) {
          editor.updateOptions({
            hover: {
              enabled: true,
            },
          });
        }
      }, 500);
    });

    editor.onMouseLeave(() => {
      clearTimeout(timeoutId);
      onHideCb();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  extendWithCursorSelectionTooltip(editor, onShowCb, onHideCb) {
    editor.onDidChangeCursorSelection(({ selection }) => {
      clearTimeout(MonacoService.cursorTimeoutId);
      MonacoService.onChangeCursorSelection.call(editor, selection, onShowCb, onHideCb);
    });
  }

  static onChangeCursorSelection(selection, onShowCb, onHideCb) {
    onHideCb();

    if (selection.isEmpty()) {
      return;
    }

    MonacoService.cursorTimeoutId = setTimeout(() => {
      onShowCb(
        {
          tooltipVisible: true,
          ...MonacoService.getTooltipPosition(selection, this),
        },
        selection,
      );
    }, 1000);
  }

  static getTooltipPosition(range, editor) {
    // Left
    let leftOffset = 64;
    if (range.startColumn > range.endColumn) {
      [range.startColumn, range.endColumn] = [range.endColumn, range.startColumn];

      leftOffset += (range.endColumn - range.startColumn) * MonacoService.LETTER_WIDTH;
    }

    if (
      editor.getOffsetForColumn(range.startLineNumber, range.startColumn)
      < editor.getScrollLeft()
    ) {
      range.startColumn = Math.floor(editor.getScrollLeft() / MonacoService.LETTER_WIDTH);
    }

    if (
      editor.getOffsetForColumn(range.endLineNumber, range.endColumn)
      > editor.getLayoutInfo().width
    ) {
      range.endColumn = Math.floor(
        range.startColumn + editor.getLayoutInfo().width / MonacoService.LETTER_WIDTH,
      );
    }

    let middleColumn = Math.floor(
      range.startColumn + (range.endColumn - range.startColumn) / 2,
    );
    leftOffset
      += editor.getOffsetForColumn(range.startLineNumber, middleColumn)
      - editor.getScrollLeft();

    // Top
    if (range.startLineNumber > range.endLineNumber) {
      [range.startLineNumber, range.endLineNumber] = [
        range.endLineNumber,
        range.startLineNumber,
      ];
    }

    let topOffset = 0;
    if (
      editor.getTopForLineNumber(range.startLineNumber) > editor.getScrollTop()
    ) {
      topOffset
        += editor.getTopForLineNumber(range.startLineNumber) - editor.getScrollTop();
    }

    return {
      topOffset,
      leftOffset,
    };
  }
  /* ********** DEPRECATED (kind of) - END */
}

const MonacoServiceInstance = new MonacoService();

// Reusable hook for lazy-loading the Monaco Editor
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
