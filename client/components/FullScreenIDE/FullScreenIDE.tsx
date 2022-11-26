import { useEffect, useRef, useState } from 'react';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFile, faList, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SandpackProvider, SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';

import Header from '../Header';
import IDEPanel from './IDEPanel/IDEPanel';
import { Theme } from '../Editor/themes';
import styles from './FullScreenIDE.module.scss';
import { useKeyDown, useResizeObserver } from '~/services/Hooks';
import HResizable from '../Editor/HResizable/HResizable';
import { BasicEditor } from '../Editor/BasicEditor';
import EditorExplorer from '../Editor/EditorExplorer/EditorExplorer';
import FolderStructure, { useFolderStructure } from '~/services/utils/FolderStructure';
import ResizableExplorerContainer from '../Editor/ResizableExplorerContainer/ResizableExplorerContainer';
import ControlPanel from './ControlPanel/ControlPanel';
import VerifyPanel from './VerifyPanel/VerifyPanel';
import { withAutomaticVerification } from '~/services/api/Challenge.service';
import CertificationPanel from './CertificationPanel/CertificationPanel';
import { ParsedChallengeI } from '~/../shared/types/challenge.types';

enum Panel {
  EDITOR = 'editor',
  INFO = 'info',
  VERIFY = 'verify',
  CERTIFICATION = 'certification',
}

interface NavItem {
  type: Panel;
  title: string;
  icon: IconDefinition;
  onClick: () => void;
}

const FullScreenIDE = ({
  challenge,
}: {
  challenge: ParsedChallengeI,
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

  // Temporary initializing this to the second task, because that's the one
  // where the testing works.
  const [currentTaskId, setCurrentTaskId] = useState(challenge.tasks[1].taskId);
  const currentTask = challenge.tasks.find((task) => task.taskId === currentTaskId);

  const initialFolderStructure = new FolderStructure(JSON.parse(
    currentTask.startingCode,
  ));

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
    initialFolderStructure,
    // If the task definition doesn't have a `startingFile`, default
    // to the first file in the top folder.
    currentTask.startingFile ?? initialFolderStructure.files?.[0]?.key,
  );

  const [isResizing, setIsResizing] = useState(false);
  const [didSandpackLoad, setDidSandpackLoad] = useState(false);
  const [activePanel, setActivePanel] = useState<Panel>(Panel.EDITOR);

  // Whether or not to show the Editor File/Folder Explorer
  const [showEditorExplorer, setShowEditorExplorer] = useState(true);
  const {
    isVerifying,
    verificationStatus,
    verifySolution,
    setVerificationStatus,
    verifySolutionClientSide,
  } = withAutomaticVerification();

  const [sandpackFiles, setSandpackFiles] = useState(toSandPackFiles(folderStructure));

  const extraMonacoLibs = [
    ...folderStructure.getFilesWithPath().map((file) => ({
      content: file.content,
      path: `${file.path}/${file.name}`,
    })),
    ...challenge.typeDefinitions.map(({ content, path }) => ({
      content,
      path: `/${path}`,
    })),
  ];

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
    title: 'Verify Solution',
    type: Panel.VERIFY,
    icon: faPlayCircle,
    onClick: () => toggleActivePanel(Panel.VERIFY),
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
        challengeId: challenge.challengeId,
        taskId: currentTaskId,
        valid: false,
        error: {
          description: 'Nu am putut evalua soluția ta. Dă-ne un semn dacă problema persistă!',
        },
      });
      return;
    }

    verifySolutionClientSide(challenge.challengeId, currentTaskId, iframe);
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
        <IDEPanel className={styles['actions-panel']} vertical>
          {navItems.map((item) => (
            <IDEPanel.Button
              key={item.type}
              title={item.title}
              onClick={item.onClick}
              active={activePanel === item.type}
            >
              <FontAwesomeIcon icon={item.icon} />
            </IDEPanel.Button>
          ))}
        </IDEPanel>
        <div ref={pageRef} className="h-100 d-flex w-100 relative">
          <div className="d-flex">
            {showEditorExplorer && (
              <ResizableExplorerContainer
                onResize={({ dx }) => onResize({ explorerDx: dx })}
                containerRef={editorExplorerContainer}
                initialWidth={EXPLORER_WIDTH.initial}
                classNameHResizable={styles.HResizable}
              >
                <EditorExplorer
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
                />
              </ResizableExplorerContainer>
            )}
            <div style={{ width: EDITOR_WIDTH.initial }} ref={editorRef}>
              <BasicEditor
                onChange={onCodeChange}
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
            <SandpackProvider
              className={`${styles.SandpackProvider} m-0`}
              files={sandpackFiles}
              template="react-ts"
              // No need for dependencies here, as they will
              // automatically be resolved based on the
              // existing package.json file.
              // https://sandpack.codesandbox.io/docs/advanced-usage/client#usage
            >
              <SandpackPreview className={`${styles.SandpackPreview} m-0`} />
              <SandpackListener onSuccess={() => setDidSandpackLoad(true)} />
            </SandpackProvider>
          </div>
          {activePanel === Panel.INFO && (
            <IDEPanel className={`${styles['main-panel']} pin-full`}>
              <ControlPanel
                challenge={challenge}
                currentTaskId={currentTaskId}
                className={styles.ControlPanel}
              />
            </IDEPanel>
          )}
          {activePanel === Panel.VERIFY && (
            <IDEPanel className={`${styles['main-panel']} pin-full`}>
              <VerifyPanel
                isVerifying={isVerifying}
                onNextChallenge={() => alert('TODO implement')}
                verificationStatus={verificationStatus}
                onVerify={onVerify}
              />
            </IDEPanel>
          )}
          {activePanel === Panel.CERTIFICATION && (
            <IDEPanel className={`${styles['main-panel']} pin-full`}>
              <CertificationPanel challenge={challenge} />
            </IDEPanel>
          )}
        </div>
      </section>
    </>
  );
};

// TODO: move from here
const toSandPackFiles = (folderStructure: FolderStructure): Record<string, string> => {
  const files = {};
  folderStructure.getFilesWithPath().forEach((file) => {
    files[`${file.path}/${file.name}`] = file.content;
  });

  return files;
};

const SandpackListener = ({ onSuccess }: { onSuccess: () => void }) => {
  const { listen } = useSandpack();

  useEffect(() => {
    // listens for any message dispatched between sandpack and the bundler
    const stopListening = listen((msg) => {
      if (msg.type === 'success') {
        onSuccess();
      }
    });

    return () => {
      // unsubscribe
      stopListening();
    };
  }, [listen]);

  return null;
};

// eslint-disable-next-line import/prefer-default-export
export { FullScreenIDE };
