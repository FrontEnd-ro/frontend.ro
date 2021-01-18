class ZipService {
  static generate(rootNode) {
    if (!validateNode(rootNode)) {
      console.error(
        '[ZipService.validateNode]: "rootNode" param does not respect the required format',
      );
      return;
    }

    return Promise.all([import('jszip'), import('file-saver')]).then(
      (modules) => {
        let JSZip = modules[0].default;
        let FileSaver = modules[1].default;

        let zip = new JSZip();

        createArhiveFromNode(zip, rootNode);

        return zip
          .generateAsync({ type: 'blob' })
          .then((content) => FileSaver.saveAs(content, rootNode.name));
      },
    );
  }
}

export default ZipService;

function validateNode(node) {
  if (
    node.hasOwnProperty('name')
    && Array.isArray(node.files)
    && Array.isArray(node.folders)
  ) {
    return true;
  }

  return false;
}

function createArhiveFromNode(zip, node) {
  node.files.forEach((file) => {
    zip.file(file.name, file.content);
  });

  node.folders.forEach((folderInfo) => {
    let subfolder = zip.folder(folderInfo.name);
    createArhiveFromNode(subfolder, folderInfo);
  });

  return zip;
}
