import React, { useState, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '~/redux/root.reducer';
import FolderStructure from '~/../shared/utils/FolderStructure';
import {
  FileDictionary,
  MediaUploadResp,
  uploadFiles,
  uploadMedia,
} from '.';
import { DeprecatedBasicEditor } from '../Editor/BasicEditor';
import Form from '../Form';
import MarkdownTextarea from '../MarkdownTextarea';
import ChapterControls from './ChapterControls/ChapterControls';
import LessonSelect from './LessonSelect/LessonSelect';

import styles from './NewExercise.module.scss';

import editCover from './coding.svg';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import LessonExerciseService from '~/services/api/LessonExercise.service';
import Button from '~/components/Button';
import { API_LessonExerciseI, ExerciseType } from '~/../shared/types/lesson-exercise.types';

function EditExercise({
  exercise,
  userInfo,
}: ConnectedProps<typeof connector> & { exercise: API_LessonExerciseI }) {
  const [body, setBody] = useState(exercise.body);
  const [lesson, setLesson] = useState<string | null>(exercise.lesson);
  const [bodyError, setBodyError] = useState(null);
  const [solutionError, setSolutionError] = useState(null);

  const filesToUpload = useRef<FileDictionary>({});

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [showExampleEditor, setShowExampleEditor] = useState(false);
  const [showSolutionEditor, setShowSolutionEditor] = useState(false);

  const markdownWrapper = useRef(null);
  const [exampleRef, solutionRef] = [useRef(null), useRef(null)];

  const router = useRouter();

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

  const updateExercise = async (
    formData: {
      type: ExerciseType,
    },
  ) => {
    if (!validateRequiredData()) {
      return false;
    }

    let newBody = body;
    setIsEditing(true);

    try {
      const uploadInfo = await uploadMedia(body, filesToUpload.current);
      newBody = replaceMarkdownWithUploads(uploadInfo);
    } catch (err) {
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Fișierul nu a putut fi încărcat. Încearcă din nou!',
      });

      return false;
    }

    try {
      await LessonExerciseService.updateExercise(
        exercise._id,
        {
          lesson,
          body: newBody,
          type: formData.type,
          example: exampleRef.current ? exampleRef.current.getFolderStructure() : null,
          solution: solutionRef.current ? solutionRef.current.getFolderStructure() : null,
        },
      );

      SweetAlertService.toast({
        type: 'success',
        text: 'Exercițiul a fost modificat cu succes!',
      });

      router.push(`/${userInfo.username}`);
    } catch (err) {
      SweetAlertService.toast({
        text: err?.message || 'Oops! Nu am putut crea exercițiul',
        type: 'error',
      });
    } finally {
      setIsEditing(false);
    }

    return false;
  };

  const deleteExercise = async () => {
    const result = await SweetAlertService.confirm({
      title: 'Șterge exercițiul',
      text: 'Ești sigur? Această decizie e permanentă.',
      confirmButtonText: 'Da, șterge exercițiul',
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      setIsDeleting(true);
      await LessonExerciseService.delete(exercise._id);
      SweetAlertService.toast({
        type: 'success',
        text: 'Exercițiu șters cu success',
      });

      router.replace(`/${userInfo.username}`);
    } catch (err) {
      console.error('[deleteExercise]', err);
      SweetAlertService.toast({
        type: 'error',
        text: err.message || 'Oops. Se pare că nu am putut șterge exercițiul. Încearcă din nou',
      });
    } finally {
      setIsDeleting(false);
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

  const exerciseBody = exercise.example ? new FolderStructure(JSON.parse(exercise.example)) : null;
  const exerciseSolution = exercise.solution
    ? new FolderStructure(JSON.parse(exercise.solution))
    : null;

  return (
    <div>
      <section className={`${styles.cta} relative`}>
        <div>
          <h1> Modifică exercițiul </h1>
          <h2>
            Dacă acest exercițiu este folosit într-una dintre lecții,
            modificările tale vor avea efect abia după aprobarea unui admin.
          </h2>
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{
          __html: editCover,
        }}
        />
      </section>
      <main className={styles['new-exercise']}>
        <Form withStyles={false} onSubmit={updateExercise} className="relative" id="createForm">
          <div ref={markdownWrapper}>
            <MarkdownTextarea
              title="Descrie exercițiul"
              markdown={body}
              initialTab="PREVIEW"
              onInput={onMarkdownInput}
              onUpload={(files, cursorPosition) => uploadFiles(
                files, cursorPosition, body, updateMarkdownWithUploadedFiles,
              )}
            />
            {bodyError && (
            <p className={`${styles['error-message']} text-right text-bold absolute`}>
              Fiecare exercițiu trebuie să aibă o descriere 👆
            </p>
            )}
          </div>
        </Form>

        <section className={styles['example-wrapper']}>
          {exerciseBody && (
            <>
              <h3> Cod de început</h3>
              <DeprecatedBasicEditor
                ref={exampleRef}
                folderStructure={exerciseBody}
              />
            </>
          )}
          {(!exerciseBody && !showExampleEditor) && (
            <Button
              variant="light"
              onClick={() => setShowExampleEditor(true)}
            >
              Adaugă cod de început
            </Button>
          )}
          {(!exerciseBody && showExampleEditor) && (
            <>
              <h3> Cod de început</h3>
              <DeprecatedBasicEditor
                ref={exampleRef}
                folderStructure={exerciseBody}
              />
            </>
          )}
        </section>

        <section className={`${styles['example-wrapper']} relative`}>
          <h3> Soluție</h3>
          <DeprecatedBasicEditor
            ref={solutionRef}
            folderStructure={exerciseSolution}
          />
          {solutionError && (
          <p className={`${styles['error-message']} absolute text-right text-bold`}>
            Fiecare exercițiu trebuie să aibă o soluție 👆
          </p>
          )}
        </section>

        <>
          <ChapterControls form="createForm" />
          <footer className="d-flex align-items-center justify-content-between">
            <LessonSelect
              selectedId={exercise.lesson}
              onChange={(value) => setLesson(value)}
            />
            <div>
              <Button
                variant="danger"
                onClick={deleteExercise}
                loading={isDeleting}
                className="mr-2"
              >
                Șterge
              </Button>

              <Button
                variant="blue"
                form="createForm"
                type="submit"
                loading={isEditing || isDeleting}
              >
                Modifică
              </Button>
            </div>
          </footer>
        </>
      </main>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    userInfo: state.user.info,
  };
}

const connector = connect(mapStateToProps);

export default connector(EditExercise);
