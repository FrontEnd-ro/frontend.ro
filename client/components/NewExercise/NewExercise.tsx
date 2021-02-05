import React, { useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Form from '../Form';
import Login from '../login';
import MarkdownTextarea from '../MarkdownTextarea';
import { RootState } from '~/redux/root.reducer';
import PrivacyControls from './PrivacyControls/PrivacyControls';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import svgCover from './dev-focus.svg';
import styles from './NewExercise.module.scss';
import ExerciseService from '~/services/Exercise.service';
import ChapterControls from './ChapterControls/ChapterControls';
import LessonSelect from './LessonSelect/LessonSelect';
import { noop, uuid } from '~/services/Utils';
import { MAX_MEDIA_BYTES, MAX_MEDIA_MB } from '~/../shared/SharedConstants';
import BasicEditorLazy from '../Editor/BasicEditor/BasicEditor.lazy';
import FolderStructure from '~/services/utils/FolderStructure';
import { ChapterType } from '~/redux/exercise-submissions/types';
import { extractExtension } from '~/services/utils/FileUtils';
import { UserState } from '~/redux/user/types';

interface FileDictionary {
  [id: string]: {
    file: File;
    markdownToReplace: string;
  }
}

interface MediaUploadResp {
  name: string;
  url: string;
}

function NewExercise({ user }: ConnectedProps<typeof connector>) {
  const router = useRouter();

  const markdownWrapper = useRef(null);
  const exampleRef = useRef(null);
  const solutionRef = useRef(null);

  const [body, setBody] = useState('');
  const [bodyError, setBodyError] = useState(false);
  const [solutionError, setSolutionError] = useState(false);
  const [showExampleEditor, setShowExampleEditor] = useState(false);
  const [showSolutionEditor, setShowSolutionEditor] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const filesToUpload = useRef<FileDictionary>({});

  const onMarkdownInput = (text) => {
    setBody(text);
    setBodyError(false);
  };

  const uploadFiles = (files: File[], cursorPosition: number) => {
    let newMarkdown = body;
    let filesIgnored = 0; // due to size restrictions

    files.forEach((file) => {
      if (file.size > MAX_MEDIA_BYTES) {
        filesIgnored += 1;
        return;
      }

      console.log(file.size);
      const fileName = `${uuid()}.${extractExtension(file.name)}`;
      const objectURL = URL.createObjectURL(file);
      const imgMarkdown = `![${file.name}](${objectURL})`;

      filesToUpload.current[fileName] = {
        file,
        markdownToReplace: imgMarkdown,
      };

      newMarkdown = `${newMarkdown.substring(0, cursorPosition)}${imgMarkdown}${newMarkdown.substring(cursorPosition)}`;
      // eslint-disable-next-line no-param-reassign
      cursorPosition += imgMarkdown.length;
    });

    if (filesIgnored) {
      SweetAlertService.toast({
        type: 'info',
        text: filesIgnored === 1
          ? `Fișierul a fost ignorat căci nu se încadrează în limita de ${MAX_MEDIA_MB}MB`
          : `${filesIgnored} fișiere au fost ignorate căci nu se încadrează în limita de ${MAX_MEDIA_MB}MB`,
      });
    }

    setBody(newMarkdown);
  };

  const onSubmit = (formData) => {
    if (user.info) {
      createExercise(formData, user.info);
    } else {
      SweetAlertService.content(
        Login,
        'Autentifică-te',
        {
          onSuccess(userInfo: UserState['info']) {
            SweetAlertService.closePopup();
            createExercise(formData, userInfo);
          },
        },
      );
    }
  };

  const createExercise = async (
    formData: {
      type: ChapterType,
      private: 'true' | 'false'
    },
    userInfo: UserState['info']
  ) => {
    if (!validateRequiredData()) {
      return;
    }

    let newBody = body;
    setIsCreating(true);

    try {
      const uploadInfo = await uploadMedia();
      newBody = replaceMarkdownWithUploads(uploadInfo);
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Fișierul nu a putut fi încărcat. Încearcă din nou!',
      });
      return;
    }

    try {
      await ExerciseService.createExercise({
        body: newBody,
        type: formData.type,
        private: formData.private === 'true',
        example: exampleRef.current ? exampleRef.current.getFolderStructure() : null,
        solution: solutionRef.current ? solutionRef.current.getFolderStructure() : null,
      });

      SweetAlertService.toast({
        type: 'success',
        text: 'Exercițiul a fost creat cu succes!',
      });

      router.push(`/${userInfo.username}`);
    } catch (err) {
      SweetAlertService.toast({
        text: err?.message || 'Oops! Nu am putut crea exercițiul',
        type: 'error',
      });
    } finally {
      setIsCreating(false);
    }
  };

  const validateRequiredData = () => {
    let isValid = true;

    if (!body) {
      setBodyError(true);
      markdownWrapper.current.scrollIntoView();
      isValid = false;
    }

    if (!solutionRef.current) {
      setSolutionError(true);
      isValid = false;
    } else {
      let folderStructure: FolderStructure = solutionRef.current.getFolderStructure();
      if (!folderStructure) {
        setSolutionError(true);
        isValid = false;
      }
    }

    return isValid;
  };

  const uploadMedia = async (): Promise<MediaUploadResp[]> => {
    // 1. Maybe some files were removed in the meantime -> double check they're stll here
    Object.keys(filesToUpload.current).forEach((id) => {
      const { markdownToReplace } = filesToUpload.current[id];
      if (body.indexOf(markdownToReplace) === -1) {
        delete filesToUpload.current[id];
      }
    });

    // 2. Upload to AWS
    const results = await Promise.allSettled(Object.keys(filesToUpload.current).map((id) => {
      return ExerciseService.uploadMedia(id, filesToUpload.current[id].file);
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
  };

  const replaceMarkdownWithUploads = (uploadedInfo: MediaUploadResp[]) => {
    let newBody = body;

    Object.keys(filesToUpload.current).forEach((id) => {
      const uploadInfo = uploadedInfo.find((info) => info.name === id);

      if (!uploadInfo) {
        newBody = newBody.replaceAll(filesToUpload.current[id].markdownToReplace, '');
      } else {
        newBody = newBody.replaceAll(
          filesToUpload.current[id].markdownToReplace,
          `![${uploadInfo.name}](${uploadInfo.url})`,
        );
      }
    });

    setBody(newBody);
    return newBody;
  };

  return (
    <div className={styles['new-exercise']}>
      <section className={`${styles.cta} relative`}>
        <div>
          <h1> Creează un nou exercițiu</h1>
          <h2>
            Îl poți folosi în propriile traininguri sau,
            {' '}
            <strong className="text-blue">dacă vrei să contribui la acest proiect</strong>
            ,
            sugerează acest exercițiu pentru una dintre lecțiile noastre.
          </h2>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{
          __html: svgCover,
        }}
        />
      </section>
      <main>
        <Form withStyles={false} onSubmit={onSubmit} className="relative" id="createForm">
          <div ref={markdownWrapper} className="relative">
            <MarkdownTextarea
              title="Descrie exercițiul"
              markdown={body}
              onUpload={uploadFiles}
              onInput={onMarkdownInput}
            />
            {bodyError && <p className={`${styles['error-message']} text-right text-bold absolute`}> Nu poți crea un exercițiu fără descriere 👆</p>}
          </div>
        </Form>
        <div className={styles['example-wrapper']}>
          {
            showExampleEditor
              ? (
                <>
                  <h3> Cod de început </h3>
                  <BasicEditorLazy ref={exampleRef} />
                </>
              )
              : (
                <button
                  className="btn btn--light"
                  type="button"
                  onClick={() => setShowExampleEditor(true)}
                >
                  Adaugă cod de început
                </button>
              )
          }
        </div>
        <div className={`${styles['example-wrapper']} relative`}>
          {
            showSolutionEditor
              ? (
                <>
                  <h3> Soluție</h3>
                  <BasicEditorLazy ref={solutionRef} />
                  {solutionError && (
                    <p className={`${styles['error-message']} absolute text-right text-bold`}>
                      Nu poți crea un exercițiu fără soluție 👆
                    </p>
                  )}
                </>
              )
              : (
                <button
                  type="button"
                  className={`btn ${solutionError ? 'btn--danger' : 'btn--light'}`}
                  onClick={() => setShowSolutionEditor(true)}
                >
                  Adaugă soluția exercițiului
                </button>
              )
          }
        </div>
        <ChapterControls form="createForm" />
        <PrivacyControls form="createForm" isPrivate={isPrivate} onPrivacyChange={setIsPrivate} />
        <footer className="d-flex align-items-center justify-content-between">
          <LessonSelect onChange={noop} />
          <div>
            <button
              form="createForm"
              type="submit"
              disabled={isCreating}
              className={`btn btn--blue ${isCreating ? 'btn--loading' : ''}`}
            >
              Creează
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(NewExercise);
