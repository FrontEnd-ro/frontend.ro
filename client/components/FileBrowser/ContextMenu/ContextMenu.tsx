import {
  faEdit,
  faFileAlt,
  faFolder,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties } from 'react';
import List from '~/components/List';
import Button from '~/components/Button';

import styles from './ContextMenu.module.scss';

export enum Target {
  FOLDER = 0,
  FILE = 1,
}

interface Props {
  target: Target;
  onNewFile?: () => void;
  onNewFolder?: () => void;
  onRename?: () => void;
  onDelete?: () => void;
  className?: string;
  style?: CSSProperties;
}

// Context Menu that displays options regarding Files or Folders
const ContextMenu = ({
  target,
  onNewFile,
  onNewFolder,
  onRename,
  onDelete,
  className = '',
  style = {},
}: Props) => {
  return (
    <List variant="none" style={style} className={`${styles.ContextMenu} ${className}`}>
      {target === Target.FOLDER && (
        <>
          {onNewFile !== undefined && (
            <li>
              <Button className="w-100" onClick={onNewFile}>
                <Icon icon={faFileAlt} />
                New file
              </Button>
            </li>
          )}
          {onNewFolder !== undefined && (
            <li>
              <Button className="w-100" onClick={onNewFolder}>
                <Icon icon={faFolder} />
                New folder
              </Button>
            </li>
          )}
        </>
      )}
      {onRename !== undefined && (
        <li>
          <Button className="w-100" onClick={onRename}>
            <Icon icon={faEdit} />
            Rename
          </Button>
        </li>
      )}
      {onDelete !== undefined && (
        <li>
          <Button className="w-100" onClick={onDelete}>
            <Icon icon={faTrashAlt} />
            Delete
          </Button>
        </li>
      )}
    </List>
  );
};

const Icon = ({ icon }: { icon: IconProp }) => (
  <FontAwesomeIcon
    width="18"
    height="18"
    icon={icon}
    className={styles.icon}
  />
);

export default ContextMenu;
