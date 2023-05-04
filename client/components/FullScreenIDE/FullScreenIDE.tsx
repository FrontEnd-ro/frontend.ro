import { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faAward, faFile, faList, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import IDEPanel from './IDEPanel/IDEPanel';
import { Theme } from '../Editor/themes';
import { RootState } from '~/redux/root.reducer';
import { BasicEditor } from '../Editor/BasicEditor';
import VerifyPanel from './VerifyPanel/VerifyPanel';
import ControlPanel from './ControlPanel/ControlPanel';
import HResizable from '../Editor/HResizable/HResizable';
import { useKeyDown, useResizeObserver } from '~/services/Hooks';
import Sandpack from '../Sandpack/Sandpack';
import EditorExplorer from '../Editor/EditorExplorer/EditorExplorer';
import CertificationPanel from './CertificationPanel/CertificationPanel';
import { API_CertificationI } from '~/../shared/types/certification.types';
import ChallengeSubmissionService from '~/services/api/ChallengeSubmission.service';
import FolderStructure, { toSandPackFiles, useFolderStructure } from '~/../shared/utils/FolderStructure';
import { useTypeDefinitions, withAutomaticVerification } from '~/services/api/Challenge.service';
import ResizableExplorerContainer from '../Editor/ResizableExplorerContainer/ResizableExplorerContainer';
import { API_ChallengeSubmissionI, API_ChallengeSubmissionTaskI } from '~/../shared/types/challengeSubmissions.types';

import styles from './FullScreenIDE.module.scss';

enum Panel {
  EDITOR = 'editor',
  INFO = 'info',
  CERTIFICATION = 'certification',
}

interface NavItem {
  type: Panel;
  title: string;
  icon: IconDefinition;
  onClick: () => void;
  disabled?: boolean;
}

export interface ApiStatus {
  loadingType: 'none' | 'verifying' | 'saving' | 'submitting';
  error: string;
}

const _FullScreenIDE = ({
  challengeSubmission,
  isLoggedIn,
  onChallengeSubmit,
  certification,
  fileNamesToIgnoreFromExplorer = [],
}: ConnectedProps<typeof connector> & {
  challengeSubmission: API_ChallengeSubmissionI;
  onChallengeSubmit: (task: API_ChallengeSubmissionI) => void;
  fileNamesToIgnoreFromExplorer?: string[];
  certification?: API_CertificationI;
}) => {
  const EXPLORER_WIDTH = { min: 100, initial: '15vw' };
  const EDITOR_WIDTH = { min: 100, initial: '50vw' };
  const PREVIEW_WIDTH = { min: 100, initial: '35vw' };

  // Ref to the HTML Element surrounding the
  // Explorer, Editor and Previewer.
  const pageRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const sandpackParent = useRef<HTMLDivElement>(null);
  const editorExplorerContainer = useRef<HTMLDivElement>(null);

  // Storing these values as `refs` because we're manually setting the styles.
  const pageWidth = useRef<number | undefined>(undefined);
  const editorWidth = useRef<number | undefined>(undefined);
  const explorerWidth = useRef<number | undefined>(undefined);

  const [currentTaskId, setCurrentTaskId] = useState(getCurrentTaskId(challengeSubmission));
  const currentTask = challengeSubmission.tasks.find((task) => task.taskId === currentTaskId);

  const taskFolderStructure = (function getTaskFolderStructure() {
    // We need to merge the starting code from the task definition
    // with the code that the user has wrote for that task (if any)
    // and all the previous ones.

    const currentTaskIndex = challengeSubmission.tasks.indexOf(currentTask);

    const folderStructure = new FolderStructure(JSON.parse(
      currentTask.startingCode,
    ));
    for (let i = 0; i <= currentTaskIndex; i += 1) {
      const previousTask = challengeSubmission.tasks[i];
      const folderStructureForPreviousTask = new FolderStructure(JSON.parse(
        previousTask.codeForFilesThatCanBeEdited,
      ));

      folderStructureForPreviousTask.getFilesWithPath().forEach((file) => {
        if (folderStructure.hasFile(file.key)) {
          folderStructure.setContent(file.key, file.content);
        }
      });
    }

    return folderStructure;
  }());

  const {
    selectedFileId,
    folderStructure,
    addFile,
    addFolder,
    renameFile,
    renameFolder,
    deleteFile,
    deleteFolder,
    selectFile,
  } = useFolderStructure(
    taskFolderStructure,
    // If the task definition doesn't have a `startingFile`, default
    // to the first file in the top folder.
    currentTask.startingFile ?? taskFolderStructure.files?.[0]?.key,
    [currentTaskId],
  );

  const [isResizing, setIsResizing] = useState(false);
  const [didSandpackLoad, setDidSandpackLoad] = useState(false);
  const [activePanel, setActivePanel] = useState<Panel>(Panel.EDITOR);
  const [showVerificationOverlay, setShowVerificationOverlay] = useState(true);

  // Whether or not to show the Editor File/Folder Explorer
  const [showEditorExplorer, setShowEditorExplorer] = useState(true);
  const [apiStatus, setApiStatus] = useState<ApiStatus>({
    loadingType: 'none', error: '',
  });

  const {
    isVerifying,
    verificationStatus,
    setVerificationStatus,
    verifySolutionClientSide,
  } = withAutomaticVerification();
  const { typeDefinitions } = useTypeDefinitions(challengeSubmission.challengeId);

  useEffect(() => {
    setApiStatus({
      loadingType: isVerifying ? 'verifying' : 'none',
      error: '',
    });
  }, [isVerifying]);

  const [sandpackFiles, setSandpackFiles] = useState(toSandPackFiles(folderStructure));
  useEffect(() => {
    setSandpackFiles(toSandPackFiles(folderStructure));
  }, [folderStructure]);

  const extraMonacoLibs = [
    ...folderStructure.getFilesWithPath().map((file) => ({
      content: file.content,
      path: `${file.path}/${file.name}`,
    })),
    ...typeDefinitions.map(({ content, path }) => ({
      content,
      path: `/${path}`,
    })),
  ];

  const fileNamesThatCanBeEdited = currentTask.filesThatCanBeEdited
    .filter((fileId) => folderStructure.hasFile(fileId))
    .map((fileId) => folderStructure.getFile(fileId).file.name);
  const navItems: NavItem[] = [{
    title: 'Editor',
    type: Panel.EDITOR,
    icon: faFile,
    onClick: () => {
      if (activePanel === Panel.EDITOR) {
        setShowEditorExplorer(!showEditorExplorer);
        return;
      }

      toggleActivePanel(Panel.EDITOR);
    },
  }, {
    title: 'Challenge Info',
    type: Panel.INFO,
    icon: faList,
    onClick: () => toggleActivePanel(Panel.INFO),
  }, {
    title: 'Certification',
    type: Panel.CERTIFICATION,
    icon: faAward,
    onClick: () => toggleActivePanel(Panel.CERTIFICATION),
  }];

  useEffect(() => {
    pageWidth.current = pageRef.current.getBoundingClientRect().width;
    editorWidth.current = editorRef.current.getBoundingClientRect().width;
    explorerWidth.current = editorExplorerContainer.current.getBoundingClientRect().width;
  }, []);

  const onWindowResize = (rect: DOMRectReadOnly) => {
    const { width } = rect;
    const percentage = width / pageWidth.current;

    if (percentage !== 1) {
      pageWidth.current = width;
      resizeEditor(editorWidth.current * percentage);
      resizeExplorer(explorerWidth.current * percentage);
    }
  };

  useResizeObserver(pageRef?.current, onWindowResize);
  useKeyDown('Escape', () => {
    if (activePanel !== Panel.EDITOR) {
      setActivePanel(Panel.EDITOR);
    }
  }, [activePanel]);

  const onResize = (props: { editorDx: number } | { explorerDx: number }) => {
    let newEditorWidth: number;
    let newExplorerWidth: number;

    if ('editorDx' in props) {
      newEditorWidth = Math.max(editorWidth.current + props.editorDx, EDITOR_WIDTH.min);
      newExplorerWidth = explorerWidth.current;
    } else {
      newExplorerWidth = Math.max(explorerWidth.current + props.explorerDx, EXPLORER_WIDTH.min);
      newEditorWidth = editorWidth.current - props.explorerDx;

      if (newEditorWidth < EDITOR_WIDTH.min) {
        return;
      }
    }

    if (pageWidth.current - newEditorWidth - newExplorerWidth < PREVIEW_WIDTH.min) {
      return;
    }

    setIsResizing(true);
    if (newEditorWidth !== editorWidth.current) {
      resizeEditor(newEditorWidth);
    }
    if (newExplorerWidth !== explorerWidth.current) {
      resizeExplorer(newExplorerWidth);
    }
  };

  const resizeEditor = (value: number) => {
    editorWidth.current = value;
    editorRef.current.style.width = `${value}px`;
  };

  const resizeExplorer = (value: number) => {
    explorerWidth.current = value;
    editorExplorerContainer.current.style.width = `${value}px`;
  };

  const onCodeChange = (code: string) => {
    folderStructure.setContent(selectedFileId, code);
    setSandpackFiles(toSandPackFiles(folderStructure));
  };

  const onVerify = () => {
    const iframe = sandpackParent.current.querySelector('iframe');

    if (iframe === null) {
      // This should never ever be null. If it is, major bug on our side.
      setVerificationStatus({
        challengeId: challengeSubmission.challengeId,
        taskId: currentTaskId,
        valid: false,
        error: {
          description: 'Nu am putut evalua soluția ta. Dă-ne un semn dacă problema persistă!',
        },
      });
      return;
    }

    verifySolutionClientSide(challengeSubmission.challengeId, currentTaskId, iframe);
  };

  const resetState = (newChallengeSubmission: API_ChallengeSubmissionI) => {
    setActivePanel(Panel.INFO);
    setApiStatus({
      error: '',
      loadingType: 'none',
    });
    setVerificationStatus(undefined);
    setShowVerificationOverlay(true);

    const newCurrentTaskId = getCurrentTaskId(newChallengeSubmission);

    setCurrentTaskId(newCurrentTaskId);
    onChallengeSubmit(newChallengeSubmission);
  };

  const onSaveProgress = async () => {
    const SPAN = `[onSaveProgress, challengeSubmission=${challengeSubmission.challengeId}]}`;
    setApiStatus({
      loadingType: 'saving',
      error: '',
    });
    try {
      const folderStructureToSave = getFolderStructureToSave(currentTask, folderStructure);
      await ChallengeSubmissionService.updateCode(
        challengeSubmission.challengeId,
        currentTaskId,
        folderStructureToSave.toJSON(),
      );
      setApiStatus({
        error: '',
        loadingType: 'none',
      });
    } catch (err) {
      console.error(`${SPAN} Failed to save progress`, err);
      setApiStatus({
        loadingType: 'none',
        error: ('message' in err) ? err.message : 'Nu am putut salva progresul. Încearcă din nou!',
      });
    }
  };

  const onNextChallenge = async () => {
    const SPAN = `[onNextChallenge, challengeSubmission=${challengeSubmission.challengeId}]}`;
    setApiStatus({
      loadingType: 'submitting',
      error: '',
    });

    try {
      const folderStructureToSave = getFolderStructureToSave(currentTask, folderStructure);
      const submittedChallenge = await ChallengeSubmissionService.submitSolution(
        challengeSubmission.challengeId,
        currentTaskId,
        folderStructureToSave.toJSON(),
      );

      resetState(submittedChallenge);
    } catch (err) {
      console.error(`${SPAN} Failed to save progress`, err);
      setApiStatus({
        loadingType: 'none',
        error: ('message' in err) ? err.message : 'Nu am putut salva progresul. Încearcă din nou!',
      });
    }
  };

  const toggleActivePanel = (panelClicked: Panel) => {
    if (activePanel === panelClicked) {
      setActivePanel(Panel.EDITOR);
    } else {
      setActivePanel(panelClicked);
    }
  };

  return (
    <>
      <Header className={styles.Header} theme="dark" withNavMenu />
      <section className={`${styles.FullScreenIDE} ${isResizing ? styles.resizing : ''} d-flex overflow-hidden`}>
        <IDEPanel className={`${styles['actions-panel']} justify-content-between`} vertical>
          <div className="d-flex flex-column">
            {navItems.filter((item) => item.disabled !== true).map((item) => (
              <IDEPanel.Button
                key={item.type}
                title={item.title}
                onClick={item.onClick}
                active={activePanel === item.type}
              >
                <FontAwesomeIcon icon={item.icon} />
              </IDEPanel.Button>
            ))}
          </div>
          <IDEPanel.Button
            title="Verifică Soluția"
            active={showVerificationOverlay}
            onClick={() => setShowVerificationOverlay(!showVerificationOverlay)}
          >
            <FontAwesomeIcon icon={faPlayCircle} />
          </IDEPanel.Button>
        </IDEPanel>
        <div ref={pageRef} className="h-100 d-flex w-100 relative">
          <div className="d-flex flex-column">
            <div className="d-flex flex-1 overflow-auto">
              {showEditorExplorer && (
                <ResizableExplorerContainer
                  onResize={({ dx }) => onResize({ explorerDx: dx })}
                  containerRef={editorExplorerContainer}
                  initialWidth={EXPLORER_WIDTH.initial}
                  classNameHResizable={styles.HResizable}
                >
                  <EditorExplorer
                    readOnly
                    className={styles.EditorExplorer}
                    folderStructure={folderStructure}
                    selectedFileKey={selectedFileId}
                    onFileAdd={addFile}
                    onFolderAdd={addFolder}
                    onSelect={selectFile}
                    onFileRename={renameFile}
                    onFolderRename={renameFolder}
                    onFileDelete={deleteFile}
                    onFolderDelete={deleteFolder}
                    filesOrFoldersToIgnore={
                      fileNamesToIgnoreFromExplorer
                        .flatMap((name) => folderStructure
                          .getFilesByName(name)
                          .map((file) => file.key))
                    }
                  />
                </ResizableExplorerContainer>
              )}
              <div style={{ width: EDITOR_WIDTH.initial }} ref={editorRef}>
                <BasicEditor
                  onChange={onCodeChange}
                  readOnly={currentTask.filesThatCanBeEdited?.length > 0
                    && !currentTask.filesThatCanBeEdited.includes(selectedFileId)}
                  readOnlyTooltipMessage={`Pentru acest task poti edita doar ${fileNamesThatCanBeEdited.length > 1 ? 'fisierele' : 'fisierul'} ${fileNamesThatCanBeEdited.join(',')}.`}
                  className={styles.BasicEditor}
                  resizeTarget={editorRef.current}
                  theme={Theme.TOMORROW_NIGHT}
                  typeDefinitions={extraMonacoLibs}
                  file={selectedFileId
                    ? folderStructure.getFileWithPath(selectedFileId)?.file
                    : undefined}
                />
              </div>
            </div>
            {showVerificationOverlay && (
              <IDEPanel className={`${styles['verify-panel']} p-3 w-100`}>
                <VerifyPanel
                  isLoggedIn={isLoggedIn}
                  apiStatus={apiStatus}
                  onNextChallenge={onNextChallenge}
                  verificationStatus={verificationStatus}
                  onVerify={onVerify}
                  didFinishChallange={certification !== undefined}
                  onSaveProgress={onSaveProgress}
                />
              </IDEPanel>
            )}
          </div>
          <HResizable
            onResize={({ dx }) => onResize({ editorDx: dx })}
            className={styles.HResizable}
            onEnd={() => setIsResizing(false)}
          />
          <div ref={sandpackParent} className="relative flex-1">
            {!didSandpackLoad && (
              <div className={`pin-full text-black bg-white d-flex align-items-center justify-content-center ${styles.loader}`}>
                <p> Loading... </p>
              </div>
            )}
            <Sandpack
              template="react-ts"
              files={sandpackFiles}
              onLoad={() => setDidSandpackLoad(true)}
            />
          </div>
          {activePanel === Panel.INFO && (
            <IDEPanel className={`${styles['main-panel']} pin-full`}>
              <ControlPanel
                challenge={challengeSubmission}
                currentTaskId={currentTaskId}
                className={styles.ControlPanel}
              />
            </IDEPanel>
          )}
          {activePanel === Panel.CERTIFICATION && (
            <IDEPanel className={`${styles['main-panel']} pin-full`}>
              <CertificationPanel certification={certification} challenge={challengeSubmission} />
            </IDEPanel>
          )}
        </div>
      </section>
    </>
  );
};

function getCurrentTaskId(challengeSubmission: API_ChallengeSubmissionI) {
  // First task that is either:
  // > not started
  // > started but the solution is not valid
  const nextTaskId = challengeSubmission
    .tasks
    .find((t) => t.status === undefined || t.status.valid === false)?.taskId;

  // In case we cannot find a Task that's invalid
  // which means we finished this challenge, let's
  // set the "current" task as the last one.
  return nextTaskId ?? challengeSubmission.tasks[challengeSubmission.tasks.length - 1].taskId;
}

function getFolderStructureToSave(
  task: API_ChallengeSubmissionTaskI,
  folderStructure: FolderStructure,
): FolderStructure {
  const SPAN = `[getFolderStructureToSave, task=${task.taskId}]`;

  const { filesThatCanBeEdited } = task;
  let folderStructureToSave = new FolderStructure();

  if (filesThatCanBeEdited === undefined) {
    console.log(`${SPAN} Saving entire solution code.`);
    folderStructureToSave = folderStructure;
  } else {
    console.log(`${SPAN} Saving only code for files that can be edited.`);
    filesThatCanBeEdited.forEach((fileId) => {
      const { file } = folderStructure.getFile(fileId);
      if (file !== null) {
        folderStructureToSave.addFile(undefined, file);
      }
    });
  }

  return folderStructureToSave;
}

function mapStateToProps(state: RootState) {
  return {
    isLoggedIn: !!state.user.info,
  };
}

const connector = connect(mapStateToProps);

// eslint-disable-next-line import/prefer-default-export
export const FullScreenIDE = connector(_FullScreenIDE);
