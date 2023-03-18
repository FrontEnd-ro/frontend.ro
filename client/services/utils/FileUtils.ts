import { uuid } from '../Utils';
import FolderStructure from '../../../shared/utils/FolderStructure';

export function extractExtension(fileName: string) {
  const parts = fileName.split('.');
  if (parts.length === 1) {
    return '';
  }

  return parts.pop();
}

export function filterFiles(
  files: File[],
  mimeTypes: string[] = [],
  extensions: string[] = [],
) {
  return files.filter((file) => {
    if (mimeTypes.includes(file.type)) {
      return true;
    }

    if (extensions.includes(extractExtension(file.name))) {
      return true;
    }

    return false;
  });
}

export async function fsEntriesToFolderStructure(entries): Promise<FolderStructure> {
  const fileSystemUtils = await import('file-system-utils');
  const { toFolderStructure } = fileSystemUtils;

  return toFolderStructure(entries, entryToTextMiddleware)
    .then((structure) => new FolderStructure(structure));
}

export function filesToFolderStructure(files): Promise<FolderStructure> {
  // eslint-disable-next-line no-param-reassign
  files = [...files].filter((f) => f.size > 0);

  return Promise
    .all(files.map(async (file) => ({
      name: file.name,
      key: uuid(),
      content: await file.text(),
    })))
    .then((files) => (new FolderStructure({
      folders: [],
      files,
    })));
}

function entryToTextMiddleware(entry) {
  return new Promise((resolve) => {
    entry.file((file) => {
      resolve(file.text().then((textContent) => ({
        name: file.name,
        key: uuid(),
        content: textContent,
      })));
    }, (error) => {
      console.error('Error when processing FileEntry:', error);
      resolve(null);
    });
  });
}

export function squareCrop(src: string): Promise<Blob> {
  const image = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const { width, height } = image;
      const size = Math.min(width, height);

      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(image, size - width, size - height, width, height);

      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg', 1);
    };

    image.onerror = () => reject(new Error('Failed to crop image'));

    image.src = src;
  });
}

export function loadImage(src: string) {
  const image = new Image();
  return new Promise((resolve, reject) => {
    image.addEventListener('load', resolve);
    image.addEventListener('error', reject);

    image.src = src;
  });
}
