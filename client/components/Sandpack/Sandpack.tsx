import noop from 'lodash/noop';
import { useEffect } from 'react';
import {
  SandpackPreview,
  SandpackProvider,
  useSandpack,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import FolderStructure from '~/../shared/utils/FolderStructure';

import styles from './Sandpack.module.scss';

interface Props {
  files: Record<string, string>;
  template: SandpackPredefinedTemplate;
  onLoad?: () => void;
  className?: string;

  // Use this flag to lazy-load Sandpack
  shouldLoad?: boolean;
}

const Sandpack = ({
  files, template, onLoad = noop, className = '', shouldLoad = true,
}: Props) => {
  return (
    <SandpackProvider
      className={`${styles.SandpackProvider}  m-0`}
      files={files}
      template={template}
      // No need for dependencies here, as they will
      // automatically be resolved based on the
      // existing package.json file.
      // https://sandpack.codesandbox.io/docs/advanced-usage/client#usage
    >
      {shouldLoad && (
        <>
          <SandpackPreview className={`${styles.SandpackPreview} ${className} m-0`} />
          <SandpackListener onSuccess={onLoad} />
        </>
      )}
    </SandpackProvider>
  );
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

export const toSandPackFiles = (folderStructure: FolderStructure): Record<string, string> => {
  const files = {};
  folderStructure.getFilesWithPath().forEach((file) => {
    files[`${file.path}/${file.name}`] = file.content;
  });

  return files;
};

export default Sandpack;
