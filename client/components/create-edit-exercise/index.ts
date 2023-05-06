import { uuid } from '~/services/Utils';
import { extractExtension } from '~/services/utils/FileUtils';
import { MAX_MEDIA_BYTES, MAX_MEDIA_MB } from '~/../shared/SharedConstants';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import LessonExerciseService from '~/services/api/LessonExercise.service';

export { default as NewExercise } from './NewExercise';
export { default as EditExercise } from './EditExercise';

export interface FileDictionary {
  [id: string]: {
    file: File;
    markdownToReplace: string;
  }
}

export interface MediaUploadResp {
  name: string;
  url: string;
}

export function uploadFiles(
  files: File[],
  cursorPosition: number,
  currentBody: string,
  cb: (
    newMarkdown: string,
    filesToUpload: FileDictionary
  ) => void,
) {
  let newMarkdown = currentBody;
  let filesIgnored = 0; // due to size restrictions
  const filesToUpload = {};

  files.forEach((file) => {
    if (file.size > MAX_MEDIA_BYTES) {
      filesIgnored += 1;
      return;
    }

    console.log(file.size);
    const fileName = `${uuid()}.${extractExtension(file.name)}`;
    const objectURL = URL.createObjectURL(file);
    const imgMarkdown = `![${file.name}](${objectURL})`;

    filesToUpload[fileName] = {
      file,
      markdownToReplace: imgMarkdown,
    };

    newMarkdown = `${newMarkdown.substring(
      0,
      cursorPosition,
    )}${imgMarkdown}${newMarkdown.substring(cursorPosition)}`;
    // eslint-disable-next-line no-param-reassign
    cursorPosition += imgMarkdown.length;
  });

  if (filesIgnored) {
    SweetAlertService.toast({
      type: 'info',
      text:
        filesIgnored === 1
          ? `Fișierul a fost ignorat căci nu se încadrează în limita de ${MAX_MEDIA_MB}MB`
          : `${filesIgnored} fișiere au fost ignorate căci nu se încadrează în limita de ${MAX_MEDIA_MB}MB`,
    });
  }

  cb(newMarkdown, filesToUpload);
}

export async function uploadMedia(body: string, filesToUpload: FileDictionary) {
  // 1. Maybe some files were removed in the meantime -> double check they're stll here
  Object.keys(filesToUpload).forEach((id) => {
    const { markdownToReplace } = filesToUpload[id];
    if (body.indexOf(markdownToReplace) === -1) {
      delete filesToUpload[id];
    }
  });

  // 2. Upload to AWS
  const results = await Promise.allSettled(Object.keys(filesToUpload).map((id) => {
    return LessonExerciseService.uploadMedia(id, filesToUpload[id].file);
  }));

  const fulfilledResults = results
    .filter((res) => res.status === 'fulfilled')
    .map((res: PromiseFulfilledResult<MediaUploadResp>) => res.value);

  if (results.length !== fulfilledResults.length) {
    const filesIgnored = results.length - fulfilledResults.length;

    SweetAlertService.toast({
      type: 'info',
      text: filesIgnored === 1
        ? '1 fișisier nu a putut fi uploadat. Încearcă din nou'
        : `${filesIgnored} fișiere nu au putut fi uploadate. Încearcă din nou`,
    });
  }
  return fulfilledResults;
}
