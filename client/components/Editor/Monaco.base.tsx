/* eslint-disable react/require-render-return */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import React from 'react';
import noop from 'lodash/noop';
import { editor as MonacoTypes } from 'monaco-editor';
import MonacoService from '~/services/MonacoService';
import SubmissionService from '~/services/api/Submission.service';
import { extractExtension, filesToFolderStructure, fsEntriesToFolderStructure } from '~/services/utils/FileUtils';
import FolderStructure from '~/../shared/utils/FolderStructure';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import { MONACO } from '~/services/Constants';

const MIN_EXPLORER_WIDTH_PX = 150;
const monaco = MonacoService.get();

class MonacoBase<P = any, S = any> extends React.Component<P & any, S & any> {
  protected _baseModelChangeListener: any;

  protected editorExplorerContainer: React.RefObject<HTMLDivElement>

  protected editorRef: React.RefObject<HTMLDivElement>

  protected editor: any;

  protected timeoutId: any;

  protected Feedbacks: any;

  protected decorate: any;

  protected onFeedbackDone: any;

  protected onModelChange: any;

  protected initEditor: () => void;

  protected INITIAL_EXPLORER_WIDTH_PX = 250;

  constructor(props) {
    super(props);

    this._baseModelChangeListener = { dispose: noop };
    this.editorRef = React.createRef();
    this.editorExplorerContainer = React.createRef();
  }

  componentDidMount() {
    const { folderStructure } = this.state;
    const { onLoad } = this.props;

    const firstFile = folderStructure.files[0];

    this.setState(
      {
        selectedFileKey: firstFile ? firstFile.key : firstFile,
      },
      () => {
        this.initEditor();

        if (typeof onLoad === 'function') {
          setTimeout(() => onLoad(), 0);
        }

        if (this.editor) {
          this._baseModelChangeListener.dispose();
          this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);
        }
      },
    );
  }

  componentDidUpdate(prevProps) {
    const { folderStructure: folderStructureProp, readOnly } = this.props;
    // FIXME|TODO
    // Both editors (the complete and basic one) keep the folder
    // structure on the state, but it doesn't act like a normal
    // state prop (ie: it's not updated itself, but just a property of it,
    // without the reference change)
    // THIS ☝☝ is super weird. Let's investigate and implement
    // better
    const { folderStructure: folderStructureState } = this.state;

    if (JSON.stringify(prevProps.folderStructure) !== JSON.stringify(folderStructureProp) && (
      // When auto-saving: the before and after props are different, but
      // `state.folderStructure` is equal to the new props because we modify
      // the state on every `onChange`.
      // Thus, by adding this check we prevent re-rendering the editor on every auto-save
      // https://github.com/FrontEnd-ro/frontend.ro/issues/286
      folderStructureState.toJSON() !== JSON.stringify(folderStructureProp)
    )) {
      const folderStructure = new FolderStructure(folderStructureProp);
      const firstFile = folderStructure.files[0];

      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(
        {
          folderStructure,
          selectedFileKey: null,
        },
        () => {
          if (firstFile) {
            this.onFileSelect(firstFile.key);
          }
        },
      );
    }

    if (readOnly !== prevProps.readOnly) {
      this.editor.updateOptions({ readOnly });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    this._baseModelChangeListener.dispose();
  }

  onFolderSelect(key) {
    this.setState({
      selectedFolderKey: key,
    });
  }

  getValue() {
    return this.editor.getModel().getValue();
  }

  setValue(code = this.editor.getValue()) {
    this.editor.getModel().setValue(code);
  }

  // eslint-disable-next-line consistent-return
  getScroll(type) {
    if (type === 'TOP') {
      return this.editor.getScrollTop();
    } if (type === 'LEFT') {
      return this.editor.getScrollLeft();
    }
  }

  setScrollPosition(scroll) {
    this.editor.setScrollPosition(scroll);
  }

  updateLanguageBasedOnFileName(name) {
    const extension = extractExtension(name);
    const language = extension === 'js' ? 'javascript' : extension;

    MonacoService.setModelLanguage(this.editor, language);
  }

  updateDiffLanguageBasedOnFileName(name: string) {
    const diffEditor: MonacoTypes.IStandaloneDiffEditor = this.editor;
    const extension = extractExtension(name);
    const language = extension === 'js' ? 'javascript' : extension;

    MonacoService.setModelLanguage(diffEditor, language);
  }

  createFirstFile = ({ name }: { name: string }) => {
    const { folderStructure } = this.state;

    let newFileKey = folderStructure.addFile(null, { name });
    this.setState(
      {
        folderStructure,
        selectedFileKey: newFileKey,
      },
      () => {
        this.initEditor();
        if (this.editor) {
          this._baseModelChangeListener.dispose();
          this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);
        }
      },
    );
  }

  onFileAdd = (parentKey, file, cb = noop) => {
    const { folderStructure } = this.state;

    folderStructure.addFile(parentKey, file);
    this.setState({ folderStructure }, () => {
      cb();
      this.notifyStructureChange();
    });
  }

  onFolderAdd = (parentKey, folder, cb = noop) => {
    const { folderStructure } = this.state;

    folderStructure.addFolder(parentKey, folder);
    this.setState({ folderStructure }, () => {
      cb();
      this.notifyStructureChange();
    });
  }

  onFileSelect = (key) => {
    this.setState({ selectedFileKey: key });

    const { folderStructure } = this.state;
    const { feedbacks } = this.props;

    let { file } = folderStructure.getFile(key);

    this._baseModelChangeListener.dispose();

    this.setValue(file.content);
    this.updateLanguageBasedOnFileName(file.name);

    this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);

    if (this.Feedbacks && this.decorate && feedbacks) {
      this.Feedbacks.undecorateAll();

      this.Feedbacks.getAll()
        .filter((f) => f.file_key === file.key)
        .forEach((f) => this.decorate(f.getDecorationData()));
    }
  }

  onDiffFileSelect = (key: string) => {
    this.setState({ selectedFileKey: key });

    const diffEditor: MonacoTypes.IStandaloneDiffEditor = this.editor;

    const {
      modifiedFolderStructure,
      originalFolderStructure,
    } = this.state;
    const modifiedFile = modifiedFolderStructure.getFile(key).file;
    const originalFile = originalFolderStructure.getFile(key).file;

    const modifiedModel: MonacoTypes.ITextModel = monaco.editor.createModel(modifiedFile?.content ?? '');
    const orignalModel: MonacoTypes.ITextModel = monaco.editor.createModel(originalFile?.content ?? '');

    diffEditor.setModel({
      original: orignalModel,
      modified: modifiedModel,
    });

    if (modifiedFile) {
      this.updateDiffLanguageBasedOnFileName(modifiedFile.name);
    }
  }

  onFileRename = (key, name) => {
    const { folderStructure } = this.state;

    try {
      folderStructure.renameFile(key, name);
      this.setState({ folderStructure }, () => {
        this.updateLanguageBasedOnFileName(name);
        this.notifyStructureChange();
      });
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  }

  onFolderRename = (key, name) => {
    const { folderStructure } = this.state;

    try {
      folderStructure.renameFolder(key, name);
      this.setState({ folderStructure }, this.notifyStructureChange);
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  }

  onFileDelete = async (key) => {
    const { folderStructure, selectedFileKey } = this.state;

    if (this.Feedbacks && this.Feedbacks.getAll().find((f) => f.file_key === key)) {
      try {
        await this.confirmFileDelete(key);
      } catch (err) {
        return;
      }
    }

    try {
      folderStructure.deleteFile(key);
      this.setState(
        {
          folderStructure,
          selectedFileKey: key === selectedFileKey ? null : selectedFileKey,
        },
        this.notifyStructureChange,
      );
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  }

  confirmFileDelete(key) {
    return new Promise<void>((resolve, reject) => {
      SweetAlertService.confirm({
        title: 'Hold on!',
        text: 'Urmează să ștergi un fișier ce conține feedback. Ești sigur?',
        confirmButtonText: 'Continuă',
        preConfirm: () => {
          const feedbacksInFile = this.Feedbacks.getAll().filter((f) => f.file_key === key);
          SweetAlertService.toggleLoading();
          return Promise
            .all(feedbacksInFile.map((f) => SubmissionService.markFeedbackAsDone(f._id)))
            .then((resp) => {
              resp.forEach((_, index) => this.onFeedbackDone(feedbacksInFile[index].id));
            });
        },
      }).then((result) => {
        if (result.isConfirmed) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  onFolderDelete = async (key) => {
    const { folderStructure, selectedFileKey } = this.state;
    const { folder } = folderStructure.getFolder(key);

    if (this.Feedbacks.getAll().find((f) => !!folderStructure.getFile(f.file_key, folder).file)) {
      try {
        await this.confirmFolderDelete(key);
      } catch (err) {
        return;
      }
    }

    try {
      const { folder } = folderStructure.getFolder(key);
      let selectedFileIsHere = false;

      if (folderStructure.getFile(selectedFileKey, folder).file) {
        selectedFileIsHere = true;
      }

      folderStructure.deleteFolder(key);
      this.setState(
        {
          folderStructure,
          selectedFileKey: selectedFileIsHere ? null : selectedFileKey,
        },
        this.notifyStructureChange,
      );
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    }
  }

  confirmFolderDelete(key) {
    const { folderStructure } = this.state;
    const { folder } = folderStructure.getFolder(key);

    return new Promise<void>((resolve, reject) => {
      SweetAlertService.confirm({
        title: 'Hold on!',
        text: 'Urmează să ștergi un folder ce conține fișiere cu feedback.',
        confirmButtonText: 'Continuă',
        preConfirm: () => {
          const feedbacksInFolder = this.Feedbacks
            .getAll()
            .filter((f) => folderStructure.getFile(f.file_key, folder).file);

          SweetAlertService.toggleLoading();
          return Promise
            .all(feedbacksInFolder.map((f) => SubmissionService.markFeedbackAsDone(f._id)))
            .then((resp) => {
              resp.forEach((_, index) => this.onFeedbackDone(feedbacksInFolder[index].id));
            });
        },
      }).then((result) => {
        if (result.isConfirmed) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  onDownload = () => {
    const { folderStructure } = this.state;
    return folderStructure.downloadAsZip();
  }

  getFolderStructure = () => {
    const { folderStructure } = this.state;
    if (folderStructure.folders.length || folderStructure.files.length) {
      return folderStructure.toJSON();
    }
    return null;
  }

  resize = () => {
    const SPAN = '[MonacoBase, resize]';
    if (!this.editor) {
      console.error(`${SPAN} Trying to resize editor but no editor found`);
      return;
    }

    this.editor.layout();
  }

  // Temporarily have this function here, so we don't duplicate it
  // in all editors: CompleteEditor, BasicEditor, DiffEditor.
  // TODO: refactor and remove from here. The Monaco editor should not
  // be concerned with resizing. That's somehting his parent should handle.
  onResize = ({ dx }: { dx: number }) => {
    const { current: explorerContainer } = this.editorExplorerContainer;
    const SPAN = '[Monaco.base onResize]';
    if (!explorerContainer) {
      console.log(`${SPAN} Tried to resize the Explorer, but no reference found. Misconfiguration?`);
      return;
    }

    // NOTE: this isn't the most optimum way. We shouldn't read from the
    // DOM every time. Instead, we should have this stored in a variable.
    let newWidth = Number(explorerContainer.style.width.split('px')[0] ?? 0) + dx;

    // FIXME: the max width (currently half of the inner width) should be somehow
    // passed as a parameter.
    newWidth = Math.min(Math.max(newWidth, MIN_EXPLORER_WIDTH_PX), window.innerWidth / 2);

    explorerContainer.style.width = `${newWidth}px`;
    this.resize();
  };

  onAllChanges(cb) {
    let cursorListener = this.editor.onDidChangeCursorPosition((e) => cb({
      type: MONACO.EVENTS.CURSOR,
      payload: e.position,
    }));
    let selectionListener = this.editor.onDidChangeCursorSelection((e) => cb({
      type: MONACO.EVENTS.SELECTION,
      payload: [e.selection, ...e.secondarySelections],
    }));
    let modelListener = this.editor.onDidChangeModelContent((e) => cb({
      type: MONACO.EVENTS.MODEL,
      payload: e.changes,
    }));
    let scrollListener = this.editor.onDidScrollChange((e) => cb({
      type: MONACO.EVENTS.SCROLL,
      payload: {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop,
      },
    }));

    return function offAllChanges() {
      cursorListener.dispose();
      selectionListener.dispose();
      modelListener.dispose();
      scrollListener.dispose();
    };
  }

  applyEvent({ type, payload }) {
    try {
      switch (type) {
        case MONACO.EVENTS.CURSOR:
          this.editor.setPosition(payload);
          this.editor.focus();
          break;
        case MONACO.EVENTS.SELECTION:
          this.editor.setSelections(payload);
          break;
        case MONACO.EVENTS.MODEL:
          this.editor.executeEdits('user', payload);
          break;
        case MONACO.EVENTS.SCROLL:
          this.editor.setScrollPosition(payload);
          break;
        default:
          break;
      }
    } catch (e) {
      console.error(e);
    }
  }

  notifyStructureChange = () => {
    const { onStructureChange } = this.props;

    if (typeof onStructureChange === 'function') {
      onStructureChange(this.getFolderStructure());
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render() {
    this.editor.getModel().render();
    this.editor.render();
  }

  focus() {
    this.editor.focus();
  }

  uploadStructure = ({ nativeEvent }, withInit = true) => {
    this.setState({
      isDropable: false,
    });

    let computeFolderStructure = null;

    if (nativeEvent.target.webkitEntries && nativeEvent.target.webkitEntries.length) {
      computeFolderStructure = fsEntriesToFolderStructure(nativeEvent.target.webkitEntries);
    } else {
      computeFolderStructure = filesToFolderStructure(nativeEvent.target.files);
    }

    computeFolderStructure.then((folderStructure) => {
      this.setState(
        {
          folderStructure,
          selectedFileKey: null,
        },
        () => {
          if (!withInit) {
            return;
          }

          this.initEditor();
          if (this.editor) {
            this._baseModelChangeListener.dispose();
            this._baseModelChangeListener = this.editor.onDidChangeModelContent(this.onModelChange);
          }
        },
      );
    });
  }

  // DragNDrop
  onDragEnter = (e) => {
    const { readOnly } = this.props;

    if (readOnly) {
      return;
    }

    e.preventDefault();
    this.setState({
      isDropable: true,
    });
  }

  onDragLeave = (e) => {
    const { readOnly } = this.props;

    if (readOnly) {
      return;
    }

    e.preventDefault();
    if (e.target.tagName === 'INPUT' && e.target.type === 'file') {
      this.setState({
        isDropable: false,
      });
    }
  }

  onReplace = (e) => {
    e.persist();

    let swalOptions: any = {
      title: 'Hold on!',
      confirmButtonText: 'Continue',
    };

    if (this.Feedbacks && this.Feedbacks.getAll().length) {
      swalOptions.text = 'Vei suprascrie toate foldrele și fișierele, iar feedback-urile vor fi marcate ca și rezolvate.';
      swalOptions.preConfirm = () => {
        const allFeedbacks = this.Feedbacks.getAll();

        SweetAlertService.toggleLoading();

        return Promise
          .all(allFeedbacks.map((f) => SubmissionService.markFeedbackAsDone(f._id)))
          .then((resp) => {
            resp.forEach((_, index) => this.onFeedbackDone(allFeedbacks[index].id));
          });
      };
    } else {
      swalOptions.text = 'Vei suprascrie toate folderele și fișierele existente';
    }

    SweetAlertService.confirm(swalOptions).then((result) => {
      if (result.isConfirmed) {
        this.uploadStructure(e, false);
        e.target.value = null;
      } else {
        this.setState({
          isDropable: false,
        });
        e.target.value = null;
      }
    });
  }
}

export default MonacoBase;
