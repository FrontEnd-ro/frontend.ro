import React from 'react';
/**
 * FIXME: right now we're importing Monaco Editor via
 * a hack (see `MonacoService.ts` file). We should import it
 * properly via Webpack. When that is done, let's revisit
 * this ESLint error
 */
// eslint-disable-next-line import/no-unresolved
import { editor as MonacoTypes } from 'monaco-editor';
import * as Monaco from '../monaco';
import FileIcons from '~/services/utils/FileIcons';
import SubmissionService from '~/services/api/Submission.service';
import FolderStructure from '~/services/utils/FolderStructure';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import Feedbacks from '../Feedbacks';
import MonacoBase from '../Monaco.base';
import InitForm from '../InitForm/InitForm';
import AskTooltip from './AskTooltip/AskTooltip';
import ViewTooltip from './ViewTooltip/ViewTooltip';
import MonacoService from '~/services/MonacoService';
import EditorExplorer from '../EditorExplorer/EditorExplorer';
import ResizableExplorerContainer from '../ResizableExplorerContainer/ResizableExplorerContainer';

import styles from '../Editor.module.scss';

const monaco = MonacoService.get();

class MonacoEditor extends MonacoBase {
  // FIXME 👇
  private decorationsMap: any;

  // FIXME 👇
  private oldDecorations: any;

  constructor(props) {
    super(props);

    this.Feedbacks = new Feedbacks(this);
    this.state = {
      tooltips: {
        ask: {},
        view: {},
      },
      folderStructure: new FolderStructure(props.folderStructure),
    };

    this.timeoutId = null;
    this.decorationsMap = {};

    this.getValue = this.getValue.bind(this);
  }

  initEditor = () => {
    const { readOnly, askTooltip } = this.props;
    const { folderStructure, selectedFileKey } = this.state;

    if (!folderStructure.files.length && !folderStructure.folders.length) {
      return;
    }

    let { file } = folderStructure.getFile(selectedFileKey);

    this.editor = Monaco.create(this.editorRef.current, {
      value: file ? file.content : '',
      readOnly,
      hover: {
        enabled: true,
      },
      scrollBeyondLastLine: false,
    });
    this.Feedbacks.add(...this.props.feedbacks);

    Monaco.extendWithDecorate(this.editor);
    Monaco.extendWithHover(this.editor, this.showViewTooltip, this.hideViewTooltip);

    if (file) {
      this.onFileSelect(file.key);
      this.updateLanguageBasedOnFileName(file.name);

      this.Feedbacks.getAll()
        .filter((f) => f.file_key === file.key)
        .forEach((f) => this.decorate(f.getDecorationData()));
    }

    if (askTooltip) {
      Monaco.extendWithCursorSelectionTooltip(
        this.editor,
        (tooltipPosition, cursorSelection) => {
          this.setState({
            cursorSelection,
            tooltips: Object.assign(this.state.tooltips, {
              ask: { visible: true, ...tooltipPosition },
            }),
          });
        },
        this.hideAskTooltip,
      );
    }
    this.oldDecorations = this.editor.getCustomDecorations();
  }

  showViewTooltip = (feedback, tooltipPosition) => {
    clearTimeout(this.timeoutId);

    if (tooltipPosition === undefined) {
      tooltipPosition = this.editor.getBestTooltipPosition(
        feedback.position[0],
        (feedback.position[1] + feedback.position[3]) / 2,
      );
    }

    this.setState({
      tooltips: Object.assign(this.state.tooltips, {
        view: {

          id: feedback._id || feedback.timestamp,
          timestamp: feedback.timestamp,
          visible: true,
          ...tooltipPosition,
        },
      }),
    });
  }

  hideViewTooltip = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        tooltips: Object.assign(this.state.tooltips, {
          view: {
            id: this.state.tooltips.view.id,
            visible: false,
          },
        }),
      });
    }, 500);
  }

  getConfiguration() {
    return this.editor.getConfiguration();
  }

  onFeedbackDone = (feedbackId, code?: string) => {
    this.props.onFeedbackDone(feedbackId, code);
    this.Feedbacks.delete(feedbackId);
  }

  decorate = (decorationData) => {
    this.editor.decorate(decorationData, ...decorationData.position);
  }

  unDecorate(idOrtimestamp) {
    if (!this.editor.decorationsMap) {
      return;
    }

    let decorationEntry = Object.entries(this.editor.decorationsMap).find(
      (entry: any) => entry[1]._id === idOrtimestamp || entry[1].timestamp === idOrtimestamp,
    );

    if (decorationEntry) {
      this.editor.unDecorate(decorationEntry[0]);
    }
  }

  onGiveFeedback = (feedback) => {
    const newFeedback = this.Feedbacks.add(
      Object.assign(feedback, {
        position: [
          this.state.cursorSelection.startLineNumber,
          this.state.cursorSelection.startColumn,
          this.state.cursorSelection.endLineNumber,
          this.state.cursorSelection.endColumn,
        ],
        file_key: this.state.selectedFileKey,
      }),
    )[0];

    if (this.props.onFeedbackAdded) {
      this.props.onFeedbackAdded(this.Feedbacks);
    }

    this.editor.decorate(newFeedback.getDecorationData(), this.state.cursorSelection);
    this.hideAskTooltip();
  }

  hideAskTooltip = () => {
    this.setState({
      cursorSelection: null,
      tooltips: Object.assign(this.state.tooltips, {
        ask: {
          visible: false,
        },
      }),
    });
  }

  onModelChange = async (e: MonacoTypes.IModelContentChangedEvent) => {
    const { folderStructure, selectedFileKey } = this.state;
    folderStructure.setContent(selectedFileKey, this.editor.getValue());

    const isChangeValid = await this.verifyValidityOfModelChange(e);
    if (isChangeValid && typeof this.props.onChange === 'function') {
      this.props.onChange(this.getFolderStructure());
    }
  }

  verifyValidityOfModelChange = async (e: MonacoTypes.IModelContentChangedEvent) => {
    /**
     * Verifies whether or not the current model change is valid.
     * 1. If it doesn't intersect any feedbacks, then it's valid
     * by default
     * 2. If however this modification is in conflict with
     * some highlighted pieces of code, we want to have
     * the user acknowledge that this will mark the feedback as done.
     */

    const { folderStructure, selectedFileKey } = this.state;

    // We may have multiple change ranges
    // (ie: select a specified word multiple times via Ctrl + D)
    const changeRanges = e.changes.map((change) => change.range);
    const decorationsThatIntersect = Object
      .keys(this.editor.decorationsMap)
      .filter((id) => changeRanges.some((range) => (
        monaco.Range.areIntersectingOrTouching(
          this.editor.getModel().getDecorationRange(id),
          range,
        )
      )))
      .map((id) => this.editor.decorationsMap[id]);

    if (decorationsThatIntersect.length === 0) {
      return true;
    }

    // Approach used:
    // 1. Remove decorations
    // 2. If user doesn't want to remove feedback -> re'apply them
    // You might wonder why we don't remove them only if the
    // user wants to continue? Unfortunalty that doesn't work
    // in this event trigger - as this is happening when the model
    // changed. We'll probably need to hook into "beforeModelChanged"
    // if we want this variant to work.
    decorationsThatIntersect.forEach((dec) => this.unDecorate(dec._id));

    const result = await SweetAlertService.confirm({
      title: 'Hold on!',
      text: 'Urmează să modifici niște cod ce conține un feedback. Dacă continui, feedback-ul va fi șters. Ești sigur?',
      confirmButtonText: 'Continue',
      preConfirm: () => {
        SweetAlertService.toggleLoading();
        return Promise.all(
          decorationsThatIntersect.map((dec) => SubmissionService.markFeedbackAsDone(dec._id)),
        ).then((resp) => {
          resp.forEach((_, index) => this.onFeedbackDone(
            decorationsThatIntersect[index]._id,
            this.getFolderStructure(),
          ));
          return resp;
        });
      },
    });

    if (result.isConfirmed) {
      return true;
    }

    // Temporarily disable the model change listener,
    // so we don't get into an infinite loop.
    this._baseModelChangeListener.dispose();
    this.editor.getModel().undo();
    folderStructure.setContent(selectedFileKey, this.editor.getValue());

    // Re-add the decorations
    decorationsThatIntersect.forEach((dec) => {
      const matchingOldDecId = Object
        .keys(this.oldDecorations)
        .find((decId) => this.oldDecorations[decId].data._id === dec._id);

      if (!matchingOldDecId) {
        return;
      }

      this.editor.decorate(dec, this.oldDecorations[matchingOldDecId].range);
    });

    // Re-add the event listener
    this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);

    return false;
  }

  render() {
    const {
      askTooltip,
      readOnly,
      feedbacks,
    } = this.props;
    const {
      folderStructure, selectedFileKey, isDropable,
    } = this.state;
    const className = this.props.className || '';
    const selectedFile = folderStructure.getFile(selectedFileKey).file;

    return (
      <div
        className={`
          ${className}
          ${styles['editor-wrapper']} 
          ${isDropable ? styles['is--dropable'] : ''}
        `}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {folderStructure.files.length || folderStructure.folders.length ? (
          <>
            <ResizableExplorerContainer
              onResize={this.onResize}
              containerRef={this.editorExplorerContainer}
              initialWidth={this.INITIAL_EXPLORER_WIDTH_PX}
            >
              <EditorExplorer
                feedbacks={feedbacks}
                folderStructure={folderStructure}
                selectedFileKey={selectedFileKey}
                readOnly={readOnly}
                onFileAdd={this.onFileAdd}
                onFolderAdd={this.onFolderAdd}
                onSelect={this.onFileSelect}
                onFileRename={this.onFileRename}
                onFolderRename={this.onFolderRename}
                onFileDelete={this.onFileDelete}
                onFolderDelete={this.onFolderDelete}
                onDownload={this.onDownload}
              />
            </ResizableExplorerContainer>
            <div
              className={`
                ${styles.editor}
                ${selectedFileKey ? '' : styles['has--no-selected-file']}
              `}
              ref={this.editorRef}
            />
            {selectedFile && (
              <p className={`${styles['selected-file']} d-flex justify-content-center align-items-center`} title={selectedFile.name}>
                <img width="20" src={FileIcons.getIconUrl(selectedFile.name)} alt="icon" />
                <span className="ellipsis-overflow">{selectedFile.name}</span>
              </p>
            )}
            <label className="upload-label pin-full center--flex">
              <p>
                <span className="icon-check mr-2" />
                Drop to replace
              </p>
              <input className="pin-full" type="file" multiple onChange={this.onReplace} />
            </label>
          </>
        ) : (
          <InitForm
            createFirstFile={this.createFirstFile}
            uploadStructure={this.uploadStructure}
          />
        )}
        <ViewTooltip
          readOnly={readOnly}
          onFeedbackDone={this.onFeedbackDone}
          visible={this.state.tooltips.view.visible}
          feedback={this.Feedbacks.get(this.state.tooltips.view.id || {})}
        />
        {askTooltip && this.state.tooltips.ask && (
          <AskTooltip
            visible={this.state.tooltips.ask.visible}
            onAsk={this.onGiveFeedback}
          />
        )}
      </div>
    );
  }
}

export default MonacoEditor;
