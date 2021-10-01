import { alphabeticSortComparator, uuid } from '../Utils';
import ZipService from './ZipService';

const ERROR_MESSAGES = {
  FILE_MISSING: "Hmm, there's a bug in here. File seems to be missing.",
  DUPLICATE_FILE_KEYS: "Hmm, there's a bug in here. Duplicate file key found",
  DUPLICATE_FILE_NAMES:
    'Cannot have duplicate file names inside the same folder',

  FOLDER_MISSING: "Hmm, there's a bug in here. Folder seems to be missing.",
  DUPLICATE_FOLDER_KEYS:
    "Hmm, there's a bug in here. Duplicate folder key found",
  DUPLICATE_FOLDER_NAMES:
    'Cannot have duplicate folder names inside the same folder',
};

export interface ExerciseFile {
  key: string;
  name: string;
  content: string;
}

export interface ExerciseFolder {
  key: string;
  name: string;
  files: ExerciseFile[];
  folders: ExerciseFolder[];
}

class FolderStructure {
  public key: string;

  public folders: ExerciseFolder[];

  public files: ExerciseFile[];

  constructor({ folders = [], files = [] } = {}) {
    this.key = null;
    this.folders = folders;
    this.files = files;
  }

  /** GETs */
  hasFile(key, subFolder = this) {
    return !!this.getFile(key, subFolder).file;
  }

  static isEmpty(root: { files: ExerciseFile[]; folders: ExerciseFolder[]; }) {
    let allFilesEmpty = root.files.every((file) => file.content.trim() === '');

    if (!allFilesEmpty) {
      return false;
    }

    if (root.folders.length === 0) {
      return true;
    }

    return root.folders.every((folder) => FolderStructure.isEmpty(folder));
  }

  getFile(key, subFolder: any = this) {
    let foundFile = subFolder.files.find((file) => file.key === key);
    if (foundFile) {
      return {
        file: foundFile,
        parentKey: subFolder.key,
      };
    }

    for (let folder of subFolder.folders) {
      let foundFile = this.getFile(key, folder);
      if (foundFile.file) {
        return foundFile;
      }
    }

    return { file: null };
  }

  getFolder(key, subFolder: any = this) {
    if (!key) {
      return { folder: this, parentKey: null };
    }

    let foundFolder = subFolder.folders.find((folder) => folder.key === key);
    if (foundFolder) {
      return {
        folder: foundFolder,
        parentKey: subFolder.key,
      };
    }

    for (let folder of subFolder.folders) {
      let foundFolder = this.getFolder(key, folder);
      if (foundFolder.folder) {
        return foundFolder;
      }
    }

    return { folder: null };
  }

  /** ADDs */
  addFile(parentKey, { name = '', content = '', key = uuid() } = {}) {
    if (this.getFile(key).file) {
      throw ERROR_MESSAGES.DUPLICATE_FILE_KEYS;
    }

    let siblingFiles = this.getFolder(parentKey).folder.files;

    if (siblingFiles.find((file) => file.name === name)) {
      throw ERROR_MESSAGES.DUPLICATE_FILE_NAMES;
    }

    siblingFiles.push({ key, name, content });
    siblingFiles.sort((fileA, fileB) => alphabeticSortComparator(fileA.name, fileB.name));

    return key;
  }

  addFolder(
    parentKey,
    {
      name = '', key = uuid(), files = [], folders = [],
    } = {},
  ) {
    if (this.getFolder(key).folder) {
      throw ERROR_MESSAGES.DUPLICATE_FOLDER_KEYS;
    }

    let siblingFolders = this.getFolder(parentKey).folder.folders;

    if (siblingFolders.find((folder) => folder.name === name)) {
      throw ERROR_MESSAGES.DUPLICATE_FOLDER_NAMES;
    }

    siblingFolders.push({
      key,
      name,
      files,
      folders,
    });
    siblingFolders.sort((folderA, folderB) => alphabeticSortComparator(folderA.name, folderB.name));

    return key;
  }

  /** RENAMEs */
  renameFile(key, name) {
    let { file, parentKey } = this.getFile(key);
    if (!file) {
      throw ERROR_MESSAGES.FILE_MISSING;
    }

    let siblingFiles = this.getFolder(parentKey).folder.files;

    if (siblingFiles.find((file) => file.name === name && file.key !== key)) {
      throw ERROR_MESSAGES.DUPLICATE_FILE_NAMES;
    }

    file.name = name;
    siblingFiles.sort((fileA, fileB) => alphabeticSortComparator(fileA.name, fileB.name));
  }

  setContent(key, content) {
    let { file } = this.getFile(key);
    if (!file) {
      throw ERROR_MESSAGES.FILE_MISSING;
    }

    file.content = content;
  }

  renameFolder(key, name) {
    let { folder, parentKey } = this.getFolder(key);
    if (!folder) {
      throw ERROR_MESSAGES.FOLDER_MISSING;
    }

    let siblingFolders = this.getFolder(parentKey).folder.folders;

    if (
      siblingFolders.find(
        (folder) => folder.name === name && folder.key !== key,
      )
    ) {
      throw ERROR_MESSAGES.DUPLICATE_FOLDER_NAMES;
    }

    folder.name = name;
  }

  /** DELETEs */
  deleteFile(key) {
    let { file, parentKey } = this.getFile(key);
    if (!file) {
      throw ERROR_MESSAGES.FILE_MISSING;
    }

    let parentFolder = this.getFolder(parentKey).folder;
    parentFolder.files = parentFolder.files.filter((file) => file.key !== key);
  }

  deleteFolder(key) {
    let { folder, parentKey } = this.getFolder(key);
    if (!folder) {
      throw ERROR_MESSAGES.FOLDER_MISSING;
    }

    let parentFolder = this.getFolder(parentKey).folder;
    parentFolder.folders = parentFolder.folders.filter(
      (folder) => folder.key !== key,
    );
  }

  /** MOVEs */
  moveFile(key, newParentKey) {
    let { file, parentKey } = this.getFile(key);
    if (!file) {
      throw ERROR_MESSAGES.FILE_MISSING;
    }

    try {
      this.deleteFile(key);
      this.addFile(newParentKey, file);
    } catch (err) {
      this.addFile(parentKey, file);
      throw err;
    }
  }

  moveFolder(key, newParentKey) {
    let { folder, parentKey } = this.getFolder(key);
    if (!folder) {
      throw ERROR_MESSAGES.FOLDER_MISSING;
    }

    try {
      this.deleteFolder(key);
      this.addFolder(newParentKey, folder);
    } catch (err) {
      this.addFolder(parentKey, folder);
      throw err;
    }
  }

  toJSON() {
    return JSON.stringify({
      folders: this.folders,
      files: this.files,
    });
  }

  downloadAsZip() {
    let root = {
      name: 'source-code-archive',
      files: this.files,
      folders: this.folders,
    };

    return ZipService.generate(root);
  }
}

export function NewSourceFile(name = 'Untitled file') {
  return {
    key: uuid(),
    content: '',
    name,
  };
}
export default FolderStructure;
