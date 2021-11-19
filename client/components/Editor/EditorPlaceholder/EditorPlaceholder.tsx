import styles from '../Editor.module.scss';

const EditorPlaceholder = () => {
  return (
    <div className={`
      ${styles['editor-wrapper']} 
      ${styles['editor-wrapper--loading']}
    `}
    >
      <p>Loading editor...</p>
    </div>
  );
};

export default EditorPlaceholder;
