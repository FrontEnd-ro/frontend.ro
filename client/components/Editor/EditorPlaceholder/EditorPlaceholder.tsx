import styles from '../Editor.module.scss';

const EditorPlaceholder = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`
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
