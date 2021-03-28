import React from 'react';
import * as Monaco from '../monaco';
import FileIcons from '~/services/utils/FileIcons';
import SubmissionService from '~/services/Submission.service';
import FolderStructure from '~/services/utils/FolderStructure';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import Feedbacks from '../Feedbacks';
import MonacoBase from '../Monaco.base';
import InitForm from '../InitForm/InitForm';
import AskTooltip from './AskTooltip/AskTooltip';
import ViewTooltip from './ViewTooltip/ViewTooltip';
import FileSwitcher from '../FileSwitcher/FileSwitcher';

import styles from '../Editor.module.scss';

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

  onFeedbackDone = (feedbackId) => {
    this.props.onFeedbackDone(feedbackId);
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
      (entry: any) => entry[1].id === idOrtimestamp || entry[1].timestamp === idOrtimestamp,
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
        readOnly: true,
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

  onModelChange = () => {
    const { folderStructure, selectedFileKey } = this.state;
    folderStructure.setContent(selectedFileKey, this.editor.getValue());

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getFolderStructure());
    }

    const emptyDecorations = this.editor.getEmptyDecorations();

    if (!emptyDecorations.length) {
      this.oldDecorations = this.editor.getCustomDecorations();
    } else {
      emptyDecorations.forEach((dec) => this.unDecorate(dec.id));

      SweetAlertService.confirm({
        title: 'Hold on!',
        text: 'Urmează să ștergi niște cod ce conține feedback-uri. Ești sigur?',
        confirmButtonText: 'Continue',
        preConfirm: () => {
          SweetAlertService.toggleLoading();
          return Promise.all(
            emptyDecorations.map((dec) => SubmissionService.markFeedbackAsDone(dec._id)),
          ).then((resp) => {
            resp.forEach((_, index) => this.onFeedbackDone(emptyDecorations[index].id));
            return resp;
          });
        },
      }).then((result) => {
        // FIXME 👇 (correct types)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (result.value) {
          // mark feedback as done
        } else {
          this._baseModelChangeListener.dispose();

          this.editor.getModel().undo();

          emptyDecorations.forEach((dec) => {
            const matchingOldDecId = Object.keys(
              this.oldDecorations,
            ).find((decId) => this.oldDecorations[decId].data.id === dec.id);
            this.editor.decorate(dec, this.oldDecorations[matchingOldDecId].range);
          });

          this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);

          if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.getFolderStructure());
          }
        }
      });
    }
  }

  render() {
    const {
      askTooltip,
      readOnly,
      feedbacks,
    } = this.props;
    const {
      folderStructure, selectedFileKey, fixedHeight, fileSwitcherWidth, isDropable,
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
        style={{
          height: fixedHeight ? `${fixedHeight}px` : 'initial',
        }}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {/* {toggleableHeight && (
        <button
          className={
            `editor-wrapper__fit-btn
            icon-btn
            ${fixedHeight ? 'icon-minimize-2' : 'icon-maximize-2'
        }`
}
          title={fixedHeight ? 'Fixed size' : 'Fit to code'}
          onClick={this.toggleFit}
        />
        )} */}
        {folderStructure.files.length || folderStructure.folders.length ? (
          <>
            <FileSwitcher
              // FIXME 👇
              maxHeight={500}
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
              onResize={this.onResize}
            />
            <div
              className={`
                ${styles.editor}
                ${selectedFileKey ? '' : styles['has--no-selected-file']}
              `}
              style={{
                width: `calc(100% - ${fileSwitcherWidth}px)`,
                maxWidth: `calc(100% - ${fileSwitcherWidth}px)`, // without this it doesn't resize in FF
                height: fixedHeight ? `${fixedHeight}px` : '',
              }}
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
