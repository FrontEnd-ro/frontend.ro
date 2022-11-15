/* eslint-disable vars-on-top */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */

import { Theme } from './themes';
import MonacoService from '~/services/MonacoService';
import { FeedbackType } from '~/../shared/types/submission.types';

const monaco = MonacoService.get();

const LETTER_WIDTH = 7.75;

function extendWithDecorate(editor) {
  editor.decorationsMap = {};

  editor.decorate = function decorate(data, ...args) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let currentRange = new monaco.Range(...args);
    data.type = data.type || FeedbackType.PRAISE;

    if (args.length === 1 && args[0] instanceof monaco.Range) {
      [currentRange] = args;
    }

    let textModel = this.getModel();
    if (
      Object.keys(this.decorationsMap)
        .map((id) => textModel.getDecorationRange(id))
        .find((rangeInfo) => monaco.Range.areIntersecting(rangeInfo, currentRange))
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

function extendWithHover(editor, onShowCb, onHideCb) {
  let timeoutId;

  editor.onMouseMove((e) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      onHideCb();

      let textModel = editor.getModel();
      let hoverRange = new monaco.Range(
        e.target.position.lineNumber,
        e.target.position.column,
        e.target.position.lineNumber,
        e.target.position.column,
      );

      let foundMatch = Object.keys(editor.decorationsMap).some((id) => {
        if (
          monaco.Range.areIntersectingOrTouching(
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

  editor.onMouseLeave((e) => {
    clearTimeout(timeoutId);
    onHideCb();
  });
}

let cursorTimeoutId;

function extendWithCursorSelectionTooltip(editor, onShowCb, onHideCb) {
  editor.onDidChangeCursorSelection(({ selection }) => {
    clearTimeout(cursorTimeoutId);
    onChangeCursorSelection.call(editor, selection, onShowCb, onHideCb);
  });
}

function onChangeCursorSelection(selection, onShowCb, onHideCb) {
  onHideCb();

  if (selection.isEmpty()) {
    return;
  }

  cursorTimeoutId = setTimeout(() => {
    onShowCb(
      {
        tooltipVisible: true,
        ...getTooltipPosition(selection, this),
      },
      selection,
    );
  }, 1000);
}

async function defineTheme(theme: Theme) {
  switch (theme) {
    case Theme.DRACULA: {
      const { DraculaTheme } = await import('./themes/index');
      monaco.editor.defineTheme(theme, DraculaTheme);
      break;
    }
    case Theme.TOMORROW_NIGHT: {
      const { TomorrowNightTheme } = await import('./themes/index');
      monaco.editor.defineTheme(theme, TomorrowNightTheme);
      break;
    }
    default:
      // If we end up here, it means we have one of the automatically
      // supported themes, and there's nothing we need to do.
      break;
  }
}

const { create, createDiffEditor, setModelLanguage } = monaco.editor;
const { Range } = monaco;

export {
  create,
  createDiffEditor,
  setModelLanguage,
  Range,
  extendWithDecorate,
  extendWithHover,
  extendWithCursorSelectionTooltip,
  defineTheme,
};

/**
 *
 * @param {monaco.Range} range
 */
function getTooltipPosition(range, editor) {
  // Left
  let leftOffset = 64;
  if (range.startColumn > range.endColumn) {
    [range.startColumn, range.endColumn] = [range.endColumn, range.startColumn];

    leftOffset += (range.endColumn - range.startColumn) * LETTER_WIDTH;
  }

  if (
    editor.getOffsetForColumn(range.startLineNumber, range.startColumn)
    < editor.getScrollLeft()
  ) {
    range.startColumn = Math.floor(editor.getScrollLeft() / LETTER_WIDTH);
  }

  if (
    editor.getOffsetForColumn(range.endLineNumber, range.endColumn)
    > editor.getLayoutInfo().width
  ) {
    range.endColumn = Math.floor(
      range.startColumn + editor.getLayoutInfo().width / LETTER_WIDTH,
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
