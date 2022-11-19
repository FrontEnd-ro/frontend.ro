import { useEffect, useState } from 'react';
import { Theme } from '../themes';
import MonacoService from '~/services/MonacoService';

import styles from '../Editor.module.scss';

interface Props {
  className?: string;
  theme?: Theme;
}

const EditorPlaceholder = ({ theme, className = '' }: Props) => {
  const [backgroundColor, setBackgroundColor] = useState(undefined);

  const fetchTheme = async () => {
    const monacoTheme = await MonacoService.fetchTheme(theme);
    if (monacoTheme !== null) {
      setBackgroundColor(monacoTheme.colors?.['editor.background']);
    }
  };

  useEffect(() => {
    fetchTheme();
  }, [])

  return (
    <div
      // style={{ background: backgroundColor }}
      className={`
        ${className}
        ${styles['editor-wrapper']} 
        ${styles['editor-wrapper--loading']}
    `}
    >
      <p>Loading editor...</p>
    </div>
  );
};

export default EditorPlaceholder;
