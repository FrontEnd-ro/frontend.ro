import { useEffect, useRef, useState } from 'react';
import { Theme } from '../themes';
import ReactHeight from '~/services/HOCs';
import { BasicEditor } from '../BasicEditor';
import { BasicEditorProps } from '../BasicEditor/BasicEditor';
import EditorExplorer from '../EditorExplorer/EditorExplorer';
import { API_FeedbackI } from '~/../shared/types/submission.types';
import FeedbackZone from '~/components/FeedbackZone/FeedbackZone';
import { TypeDefinition } from '~/../shared/types/challenge.types';
import FolderStructure, { useFolderStructure } from '~/../shared/utils/FolderStructure';
import ResizableExplorerContainer from '../ResizableExplorerContainer/ResizableExplorerContainer';

import styles from './IDE.module.scss';

// This IDE (Integrated Developer Experience) component
// renders both a Monaco Editor and an Editor Explorer

interface Props {
  initialFolderStructure: FolderStructure;
  startingFileId?: string;
  typeDefinitions?: TypeDefinition[];
  filesThatCanBeEdited?: string[];
  theme?: Theme;
  feedbacks?: API_FeedbackI[];
  onFeedbackDone?: (feedbackId: string) => Promise<void>;
  onFolderStructureChange?: (folderStructure: FolderStructure) => void;
  readOnlyTooltipMessage?: string;
}

const IDE = ({
  startingFileId,
  initialFolderStructure,
  typeDefinitions = [],
  filesThatCanBeEdited = [],
  theme = Theme.VS,
  feedbacks = [],
  onFeedbackDone,
  onFolderStructureChange,
  readOnlyTooltipMessage = 'Nu poți edita acest fișier'
}: Props) => {
  // Ref to the HTML Element surrounding the
  // Explorer, Editor and Previewer.
  const editorRef = useRef<HTMLDivElement>(null);
  const editorExplorerContainer = useRef<HTMLDivElement>(null);

  // Storing these values as `refs` because we're manually setting the styles.
  const editorWidth = useRef<number | undefined>(undefined);
  const explorerWidth = useRef<number | undefined>(undefined);

  const EXPLORER_WIDTH = { min: 100, initial: '25%' };
  const EDITOR_WIDTH = { min: 100, initial: '75%' };

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
    startingFileId ?? initialFolderStructure.files?.[0]?.key,
    [initialFolderStructure.key],
    onFolderStructureChange,
  );

  const [viewZones, setViewZones] = useState<BasicEditorProps['viewZones']>([]);
  useEffect(() => {
    setViewZones(getViewZones());
  }, [selectedFileId, feedbacks.map((f) => f._id).join('_')]);

  const getViewZones = () => {
    // When we set the height of the FeedbackZone add an extra {OFFSET}px
    // so the code after the Zone is not directly under it. This way, it's a bit
    // more clear for the user, that the FeedbackZone is meant for the line above it.
    const OFFSET = 16;
    const newViewZones = feedbacks
      .filter((feedback) => feedback.file_key === selectedFileId)
      .map((feedback) => {
        return {
          id: feedback._id,
          afterLineNumber: feedback.position[2],
          // Initial height that will be overwritten once the "onHeightChange"
          // from the <ReactHeight> component below is called.
          heightInPx: 10,
          Component: (
            <ReactHeight
              className="select-text"
              onHeightChange={(height) => {
                if (height === 0) {
                  // When we scroll past the viewZone this function gets called with heigth=0
                  // This is because the viewZone gets a CSS rule with height=0 when
                  // is outside the view. I assume this is an optimization of Monaco,
                  // to not keep ViewZones at full height if they are not visible (in view).
                  return;
                }
                onViewZoneHeightChange(feedback._id, height + OFFSET);
              }}
            >
              <FeedbackZone
                type={feedback.type}
                markdown={feedback.body}
                onResolve={onFeedbackDone !== undefined
                  ? () => onFeedbackDone(feedback._id)
                  : undefined}
              />
            </ReactHeight>
          ),
          range: {
            startLineNumber: feedback.position[0],
            startColumn: feedback.position[1],
            endLineNumber: feedback.position[2],
            endColumn: feedback.position[3],
          },
        };
      });

    return newViewZones;
  };

  const onViewZoneHeightChange = (viewZoneId: string, newHeight: number) => {
    if (newHeight === 0) {
      return;
    }

    setViewZones((viewZones) => {
      return viewZones.map((viewZone) => ({
        ...viewZone,
        heightInPx: viewZoneId === viewZone.id
          ? newHeight
          : viewZone.heightInPx,
      }));
    });
  };

  useEffect(() => {
    editorWidth.current = editorRef.current.getBoundingClientRect().width;
    explorerWidth.current = editorExplorerContainer.current.getBoundingClientRect().width;
  }, []);

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

  const resizeEditor = (value: number) => {
    editorWidth.current = value;
    editorRef.current.style.width = `${value}px`;
  };

  const resizeExplorer = (value: number) => {
    explorerWidth.current = value;
    editorExplorerContainer.current.style.width = `${value}px`;
  };

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

    if (newEditorWidth !== editorWidth.current) {
      resizeEditor(newEditorWidth);
    }
    if (newExplorerWidth !== explorerWidth.current) {
      resizeExplorer(newExplorerWidth);
    }
  };

  const onCodeChange = (code: string) => {
    folderStructure.setContent(selectedFileId, code);
    onFolderStructureChange(folderStructure);
  };

  return (
    <section className={`${styles.IDE} d-flex flex-1 overflow-auto`}>
      <ResizableExplorerContainer
        onResize={({ dx }) => onResize({ explorerDx: dx })}
        containerRef={editorExplorerContainer}
        initialWidth={EXPLORER_WIDTH.initial}
        classNameHResizable={styles.HResizable}
      >
        <EditorExplorer
          readOnly={onFolderStructureChange === undefined}
          feedbacks={feedbacks}
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
      <div style={{ width: EDITOR_WIDTH.initial }} ref={editorRef}>
        <BasicEditor
          viewZones={viewZones}
          onChange={onCodeChange}
          readOnly={onFolderStructureChange === undefined || (
            filesThatCanBeEdited?.length > 0
            && !filesThatCanBeEdited.includes(selectedFileId)
          )}
          readOnlyTooltipMessage={readOnlyTooltipMessage}
          className={styles.BasicEditor}
          resizeTarget={editorRef.current}
          theme={theme}
          typeDefinitions={extraMonacoLibs}
          file={selectedFileId
            ? folderStructure.getFileWithPath(selectedFileId)?.file
            : undefined}
        />
      </div>
    </section>
  );
};

export default IDE;
