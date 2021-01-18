import React, { useEffect, useRef, useState } from 'react';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGES_MIME_TYPES } from '~/services/Constants';
import { filterFiles } from '~/services/utils/FileUtils';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './MarkdownTextarea.module.scss';

interface Props {
  title?: string;
  markdown?: string;
  className?: string;
  disabled?: boolean;
  onInput: (text: string) => void;
  onUpload: (files: File[], cursorPosition: number) => void;
}

function MarkdownTextarea({
  title = 'Modifică',
  markdown = '',
  className = '',
  disabled = false,
  onInput,
  onUpload,
}: Props) {
  const previewRef = useRef(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPreview, setIsPreview] = useState(false);
  const [isFechingMarked, setIsFetchingMarked] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const textareaInput = (e) => {
    const text = e.target.value;
    onInput(text);
  };

  const fileInput = (e: React.ChangeEvent<HTMLInputElement>) => uploadFiles([...e.target.files]);

  const uploadFiles = async (files: File[]) => {
    const validFiles = filterFiles(files, IMAGES_MIME_TYPES);

    if (!validFiles.length) {
      return;
    }

    setIsUploading(true);
    const cursorPosition = textareaRef.current.selectionStart;

    try {
      await onUpload(validFiles, cursorPosition);
    } catch (err) {
      SweetAlertService.toast({
        text: err.message || 'Oops! Nu am putut încărca poza ta. Încearcă din nou!',
        type: 'error',
      });
    } finally {
      setIsUploading(false);
      fileInputRef.current.value = null;
    }
  };

  const paste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const first = e.clipboardData.items[0];

    if (first?.kind === 'file') {
      uploadFiles([first.getAsFile()]);
    }
  };

  useEffect(() => {
    if (isPreview) {
      setIsFetchingMarked(true);
      import('marked')
        .then((module) => {
          const marked = module.default;

          previewRef.current.innerHTML = marked(markdown);
        })
        .catch((err) => {
          previewRef.current.innerHTML = '<p style="color: red;"> Oops! Verifică conexiunea la net și încearcă din nou </p>';
        })
        .finally(() => setIsFetchingMarked(false));
    }
  }, [isPreview]);

  return (
    <div className={`${styles['markdown-textarea']} ${className}`}>
      <label className={`${styles.label} ${isPreview ? '' : `${styles['is--checked']}`}`}>
        {title}
        <input checked={!isPreview} onChange={() => setIsPreview(false)} type="radio" name="nav" hidden />
      </label>
      <label className={`${styles.label} ${isPreview ? `${styles['is--checked']}` : ''}`}>
        {isFechingMarked
          ? <FontAwesomeIcon width="20" className="text-white rotate" icon={faSpinner} />
          : 'Preview'}
        <input checked={isPreview} onChange={() => setIsPreview(true)} type="radio" name="nav" hidden />
      </label>

      <div>
        <div className="relative">
          <textarea
            placeholder="Editează folosing Markdown..."
            ref={textareaRef}
            disabled={isPreview}
            className={`${isPreview ? 'd-none absolute' : ''}`}
            value={markdown}
            rows={10}
            onChange={textareaInput}
            onPaste={paste}
          />
          <div ref={previewRef} className={`${isPreview ? '' : 'd-none absolute'}`} />
        </div>
        <footer className="text-right relative">
          {!isPreview && (
            <label className="absolute">
              {isUploading ? <FontAwesomeIcon className="rotate" icon={faSpinner} /> : 'Adaugă imagini'}
              <input
                ref={fileInputRef}
                disabled={isUploading || disabled}
                type="file"
                multiple={false}
                accept={IMAGES_MIME_TYPES.join(',')}
                onChange={fileInput}
                hidden
              />
            </label>
          )}

          <FontAwesomeIcon icon={faMarkdown} width="20" />
        </footer>
      </div>
    </div>
  );
}

export default MarkdownTextarea;
