import { uuid } from '../Utils';
import FolderStructure from './FolderStructure';

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

export async function fsEntriesToFolderStructure(entries) {
  const fileSystemUtils = await import('file-system-utils');
  const { toFolderStructure } = fileSystemUtils;

  return toFolderStructure(entries, entryToTextMiddleware)
    .then((structure) => new FolderStructure(structure));
}

export function filesToFolderStructure(files) {
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
