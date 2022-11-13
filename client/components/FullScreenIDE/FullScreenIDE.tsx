import { useEffect, useRef, useState } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react';
import HResizable from '../Editor/HResizable/HResizable';
import FolderStructure from '~/services/utils/FolderStructure';
import CompleteEditorLazy from '../Editor/CompleteEditor/CompleteEditor.lazy';

import styles from './FullScreenIDE.module.scss';
import MonacoBase from '../Editor/Monaco.base';
import { useResizeObserver } from '~/services/Hooks';

const FullScreenIDE = ({
  folderStructure,
}: {
  folderStructure: FolderStructure
}) => {
  const MIN_WIDTH_PX = 100;
  // TODO: how do we type this?
  const monacoRef = useRef<MonacoBase>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  // Storing these values as `refs` because we're manually setting the styles.
  const pageWidthRef = useRef<number | undefined>(undefined);
  const editorWidthRef = useRef<number | undefined>(undefined);

  const [sandpackFiles, setSandpackFiles] = useState(toSandPackFiles(folderStructure));

  const [didSandpackLoad, setDidSandpackLoad] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    pageWidthRef.current = pageRef.current.getBoundingClientRect().width;
    editorWidthRef.current = editorRef.current.getBoundingClientRect().width;
  }, []);

  const onWindowResize = (rect: DOMRectReadOnly) => {
    const { width } = rect;
    const percentage = width / pageWidthRef.current;

    if (percentage !== 1) {
      pageWidthRef.current = width;
      resizeEditor(editorWidthRef.current * percentage);
    }
  };

  useResizeObserver(pageRef.current, onWindowResize);

  const onResize = ({ dx }: { dx: number }) => {
    setIsResizing(true);
    const newWidth = Math.min(
      Math.max(editorWidthRef.current + dx, MIN_WIDTH_PX),
      // Max width is 75% of the total available width
      pageWidthRef.current * 0.75,
    );

    resizeEditor(newWidth);
  };

  const resizeEditor = (value: number) => {
    editorWidthRef.current = value;
    editorRef.current.style.width = `${value}px`;
    monacoRef.current.resize();
  };

  return (
    <section
      ref={pageRef}
      className={`${styles.FullScreenIDE} ${isResizing ? styles.resizing : ''} d-flex overflow-hidden`}
    >
      <div ref={editorRef} className="w-50">
        <CompleteEditorLazy
          askTooltip={false}
          onChange={(code: string) => {
            const folderStructureJSON = JSON.parse(code);
            const newFolderStructure = new FolderStructure({
              folders: folderStructureJSON.folders,
              files: folderStructureJSON.files,
            });

            setSandpackFiles(toSandPackFiles(newFolderStructure));
          }}
          feedbacks={[]}
          ref={monacoRef}
          className={styles.Editor}
          folderStructure={folderStructure}
        />
      </div>
      <HResizable
        onResize={onResize}
        className="bg-grey"
        onEnd={() => setIsResizing(false)}
      />
      <div className="relative flex-1">
        {!didSandpackLoad && (
          <div className={`pin-full text-black bg-white d-flex align-items-center justify-content-center ${styles.loader}`}>
            <p> Loading... </p>
          </div>
        )}
        <SandpackProvider className={`${styles.SandpackProvider} m-0`} files={sandpackFiles} template="react">
          <SandpackPreview className={`${styles.SandpackPreview} m-0`} />
          <SandpackListener onSuccess={() => setDidSandpackLoad(true)} />
        </SandpackProvider>
      </div>
    </section>
  );
};

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
