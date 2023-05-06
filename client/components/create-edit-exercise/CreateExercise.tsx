import React, { useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import Form from '../Form';
import Button from '~/components/Button';
import MarkdownTextarea from '../MarkdownTextarea';
import { RootState } from '~/redux/root.reducer';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import styles from './create-edit-exercise.module.scss';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import ChapterControls from './ChapterControls/ChapterControls';
import LessonSelect from './LessonSelect/LessonSelect';
import { DeprecatedBasicEditor } from '../Editor/BasicEditor';
import FolderStructure from '~/../shared/utils/FolderStructure';
import { API_UserI } from '~/../shared/types/user.types';
import {
  MediaUploadResp,
  FileDictionary,
  uploadFiles,
  uploadMedia,
} from '.';
import { withAuthModal } from '~/services/Hooks';
import { ExerciseType } from '~/../shared/types/lesson-exercise.types';

function CreateExercise({ user }: ConnectedProps<typeof connector>) {
  const router = useRouter();

  const markdownWrapper = useRef(null);
  const exampleRef = useRef(null);
  const solutionRef = useRef(null);

  const [body, setBody] = useState('');
  const [bodyError, setBodyError] = useState(false);
  const [solutionError, setSolutionError] = useState(false);
  const [showExampleEditor, setShowExampleEditor] = useState(false);
  const [showSolutionEditor, setShowSolutionEditor] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [lesson, setLesson] = useState(null);

  const filesToUpload = useRef<FileDictionary>({});

  const onMarkdownInput = (text) => {
    setBody(text);
    setBodyError(false);
  };

  const updateMarkdownWithUploadedFiles = (newMarkdown, newFiles) => {
    setBody(newMarkdown);
    Object.keys(newFiles).forEach((fileId) => {
      filesToUpload.current[fileId] = newFiles[fileId];
    });
  };

  const createExercise = async (
    formData: {
      type: ExerciseType,
    },
    userInfo: API_UserI = user.info,
  ) => {
    if (!validateRequiredData()) {
      return;
    }

    let newBody = body;
    setIsCreating(true);

    try {
      const uploadInfo = await uploadMedia(body, filesToUpload.current);
      newBody = replaceMarkdownWithUploads(uploadInfo);
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Fișierul nu a putut fi încărcat. Încearcă din nou!',
      });
      return;
    }

    try {
      await LessonExerciseService.createExercise({
        lesson,
        body: newBody,
        type: formData.type,
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
    <main className={styles['new-exercise']}>
      <h1 className="mb-8"> Creează un nou exercițiu </h1>
      <Form withStyles={false} onSubmit={withAuthModal(!!user.info, createExercise)} className="relative" id="createForm">
        <div ref={markdownWrapper} className="relative">
          <MarkdownTextarea
            title="Descrie exercițiul"
            markdown={body}
            onUpload={(files, cursorPosition) => uploadFiles(
              files, cursorPosition, body, updateMarkdownWithUploadedFiles,
            )}
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
                <DeprecatedBasicEditor ref={exampleRef} />
              </>
            )
            : (
              <Button
                variant="light"
                onClick={() => setShowExampleEditor(true)}
              >
                Adaugă cod de început
              </Button>
            )
        }
      </div>
      <div className={`${styles['example-wrapper']} relative`}>
        {
          showSolutionEditor
            ? (
              <>
                <h3> Soluție</h3>
                <DeprecatedBasicEditor ref={solutionRef} />
                {solutionError && (
                  <p className={`${styles['error-message']} absolute text-right text-bold`}>
                    Nu poți crea un exercițiu fără soluție 👆
                  </p>
                )}
              </>
            )
            : (
              <Button
                variant="light"
                className={`btn ${solutionError ? 'btn--danger' : 'btn--light'}`}
                onClick={() => setShowSolutionEditor(true)}
              >
                Adaugă soluția exercițiului
              </Button>
            )
        }
      </div>
      <ChapterControls form="createForm" />
      <footer className="d-flex align-items-center justify-content-between">
        <LessonSelect onChange={(value) => setLesson(value)} />
        <div>
          <Button
            variant="blue"
            form="createForm"
            type="submit"
            loading={isCreating}
          >
            Creează
          </Button>
        </div>
      </footer>
    </main>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(CreateExercise);
