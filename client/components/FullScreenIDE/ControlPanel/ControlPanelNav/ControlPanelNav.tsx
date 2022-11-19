import { MouseEvent } from 'react';
import Link from '~/components/generic/Link';
import styles from './ControlPanelNav.module.scss';

interface Props {
  items: {
    id: string;
    label: string;
    active?: boolean;
  }[];
  onItemClick: (id: string) => void;
  className?: string;
}
const ControlPanelNav = ({ items, onItemClick, className = '' }: Props) => {
  return (
    <nav className={`${styles.ControlPanelNav} ${className} d-flex flex-column`}>
      {items.map((item) => (
        <Link
          // TODO: when upgrading to Next 13, implement sub-routes
          href=""
          key={item.id}
          variant="duo-tone"
          color="blue"
          active={item.active}
          onClick={() => onItemClick(item.id)}
          className={styles.Link}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default ControlPanelNav;
