import { useEffect, useState } from 'react';
import { alphabeticSortComparator, uuid } from './utils.shared';

// FIXME
// Previously this file was in the /client folder. Now we moved it
// to shared, because we need to use from here as well. But this import
// is still here. Let's refactor and remove it.
import ZipService from '../../client/services/utils/ZipService';
import { noop } from 'lodash';

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

export interface ExerciseFileWithPath extends ExerciseFile {
  path: string;
}

export interface ExerciseFolder {
  key: string;
  name: string;
  files: ExerciseFile[];
  folders: ExerciseFolder[];
}

class FolderStructure {
  public key: string;

  // Adding this name prop here, so that
  // the FolderStructure interface is compatible
  // with ExerciseFolder.
  // TODO: refactor all functions where we default
  // to `this` and make sure that any ExerciseFolder
  // works as default.
  public name: string;

  public folders: ExerciseFolder[];

  public files: ExerciseFile[];

  constructor({ folders = [], files = [], key = null } = {}) {
    this.key = key;
    this.folders = folders;
    this.files = files;
  }

  /** GETs */
  hasFile(key, subFolder = this) {
    return !!this.getFile(key, subFolder).file;
  }

  getFilesWithPath(subFolder: ExerciseFolder = this, path = ''): ExerciseFileWithPath[] {
    const downstreamFiles = subFolder
      .folders
      .flatMap((folder) => this.getFilesWithPath(folder, `${path}/${folder.name}`));
    return [
      ...downstreamFiles,
      ...(subFolder.files.map((file) => ({ ...file, path }))),
    ];
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

  getFilesByName(name: string, subFolder: any = this): ExerciseFile[] {
    let foundFiles: ExerciseFile[] = subFolder.files.filter((file) => file.name === name);
    for (let folder of subFolder.folders) {
      foundFiles.push(...this.getFilesByName(name, folder));
    }

    return foundFiles;
  }

  // TODO: this is not the most efficient way to do this.
  // We probably should populate the paths when creating the
  // folder structure, and then just making sure we keep them in sync.
  getFileWithPath(key, subFolder: any = this) {
    const allFiles = this.getFilesWithPath(subFolder);
    const foundFile = allFiles.find((file) => file.key === key);
    return {
      file: foundFile ?? null,
    };
  }

  getFolder(key, subFolder: any = this) {
    if (!key || key === this.key) {
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

  static clone(folderStructure: FolderStructure): FolderStructure {
    return new FolderStructure({
      ...JSON.parse(folderStructure.toJSON()),
      key: folderStructure.key,
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

export const useFolderStructure = (
  initialFolderStructure: FolderStructure,
  initialSelectedFile = '',

  // Use this dependencies as "triggers" to reset the state.
  dependencies: any[] = [],
  onFolderStructureChange: (folderStructure: FolderStructure) => void = noop,
) => {
  const [folderStructure, setFolderStructure] = useState(
    FolderStructure.clone(initialFolderStructure)
  );

  const [selectedFileId, setSelectedFileId] = useState(initialSelectedFile);

  useEffect(() => {
    if (initialFolderStructure.key !== folderStructure.key) {
      return;
    }
    onFolderStructureChange(folderStructure);
  }, [folderStructure.toJSON(), ...dependencies]);

  useEffect(() => {
    setFolderStructure(FolderStructure.clone(initialFolderStructure));
    setSelectedFileId(initialSelectedFile);
  }, dependencies);

  const addFile = (parentId: string, file: ExerciseFile) => {
    folderStructure.addFile(parentId, file);
    setFolderStructure(folderStructure);
  };

  const addFolder = (parentId: string, file: ExerciseFile) => {
    folderStructure.addFolder(parentId, file);
    setFolderStructure(folderStructure);
  };

  const selectFile = (id: string) => {
    setSelectedFileId(id);
  };

  const renameFile = (id: string, newName: string) => {
    try {
      // TODO: use this pattern everywhere. Don't modify the data
      let folderStructureClone = FolderStructure.clone(folderStructure);
      folderStructureClone.renameFile(id, newName);

      setSelectedFileId(id);
      setFolderStructure(folderStructureClone);
    } catch (err) {
      console.error(`Failed to renameFile, id=${id}, newName=${newName}`, err);
      throw err;
    }
  };

  const renameFolder = (id: string, newName: string) => {
    try {
      folderStructure.renameFolder(id, newName);
      setFolderStructure(folderStructure);
    } catch (err) {
      console.error(`Failed to renameFolder, id=${id}, newName=${newName}`, err);
      throw err;
    }
  };

  const deleteFile = (id: string) => {
    try {
      const folderStructureClone = FolderStructure.clone(folderStructure);
      folderStructureClone.deleteFile(id);
      setSelectedFileId('');
      setFolderStructure(folderStructureClone);
    } catch (err) {
      console.error(`Failed to deleteFile, id=${id}`, err);
      throw err;
    }
  };

  const deleteFolder = (id: string) => {
    try {
      folderStructure.deleteFolder(id);
      setFolderStructure(folderStructure);
    } catch (err) {
      console.error(`Failed to deleteFolder, id=${id}`, err);
      throw err;
    }
  };

  return {
    selectedFileId,
    folderStructure,

    addFile,
    addFolder,
    selectFile,
    renameFile,
    renameFolder,
    deleteFile,
    deleteFolder,
  };
};

export function NewSourceFile(name = 'Untitled file') {
  return {
    key: uuid(),
    content: '',
    name,
  };
}

export default FolderStructure;
