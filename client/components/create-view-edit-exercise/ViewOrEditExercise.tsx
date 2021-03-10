import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from '~/redux/root.reducer';
import { Exercise } from '~/redux/user/types';
import FolderStructure from '~/services/utils/FolderStructure';
import {
  FileDictionary,
  MediaUploadResp,
  uploadFiles,
  uploadMedia,
} from '.';
import BasicEditorLazy from '../Editor/BasicEditor/BasicEditor.lazy';
import Form from '../Form';
import MarkdownTextarea from '../MarkdownTextarea';
import ChapterControls from './ChapterControls/ChapterControls';
import LessonSelect from './LessonSelect/LessonSelect';

import styles from './NewExercise.module.scss';
import PrivacyControls from './PrivacyControls/PrivacyControls';

import viewCover from './the-search.svg';
import editCover from './coding.svg';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';
import ExerciseService from '~/services/Exercise.service';
import { ChapterType } from '~/redux/exercise-submissions/types';
import Button from '~/components/Button';

function ViewOrEditExercise({
  exercise,
  userInfo,
}: ConnectedProps<typeof connector> & { exercise: Exercise }) {
  const isOwnExercise = userInfo && (userInfo.username === exercise.user.username);
  const nameOrUsername = exercise.user.name || exercise.user.username;

  const [body, setBody] = useState(exercise.body);
  const [suggestion, setSuggestion] = useState(exercise.suggestion);
  const [bodyError, setBodyError] = useState(null);
  const [solutionError, setSolutionError] = useState(null);

  const filesToUpload = useRef<FileDictionary>({});

  const [isPrivate, setIsPrivate] = useState(exercise.private);
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
      type: ChapterType,
      private: 'true' | 'false'
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
      await ExerciseService.updateExercise(
        exercise._id,
        {
          suggestion,
          body: newBody,
          type: formData.type,
          private: formData.private === 'true',
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
      await ExerciseService.delete(exercise._id);
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
        {isOwnExercise ? (
          <div>
            <h1> Modifică exercițiul </h1>
            <h2>
              Dacă acest exercițiu este folosit într-una dintre lecții,
              modificările tale vor avea efect abia după aprobarea unui admin.
            </h2>
          </div>
        ) : (
          <div>
            <h1>
              Exercițiu
              {' '}
              <Link href="/lecții">
                <a className="text-blue uppercase">
                  {exercise.type}
                </a>
              </Link>

            </h1>
            <h2>
              {' '}
              <Link href={`/${exercise.user.username}`}>
                <a className="text-bold text-blue">
                  {nameOrUsername}
                </a>
              </Link>
              {' '}
              a scris un exercițiu despre
              {' '}
              <strong className="uppercase">
                {exercise.type}
              </strong>
              . Îl poți folosi în trainingurile
              tale atâta timp cât oferi atribuire
              autorului.
            </h2>
          </div>
        )}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{
          __html: isOwnExercise ? editCover : viewCover,
        }}
        />
      </section>
      <main className={styles['new-exercise']}>
        <Form withStyles={false} onSubmit={updateExercise} className="relative" id="createForm">
          <div ref={markdownWrapper}>
            <MarkdownTextarea
              title="Descrie exercițiul"
              disabled={!isOwnExercise}
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
              <BasicEditorLazy
                ref={exampleRef}
                readOnly={!isOwnExercise}
                folderStructure={exerciseBody}
              />
            </>
          )}
          {(!exerciseBody && isOwnExercise && !showExampleEditor) && (
            <Button
              variant="light"
              onClick={() => setShowExampleEditor(true)}
            >
              Adaugă cod de început
            </Button>
          )}
          {(!exerciseBody && isOwnExercise && showExampleEditor) && (
            <>
              <h3> Cod de început</h3>
              <BasicEditorLazy
                ref={exampleRef}
                readOnly={!isOwnExercise}
                folderStructure={exerciseBody}
              />
            </>
          )}
        </section>

        <section className={`${styles['example-wrapper']} relative`}>
          <h3> Soluție</h3>
          <BasicEditorLazy
            ref={solutionRef}
            readOnly={!isOwnExercise}
            folderStructure={exerciseSolution}
          />
          {solutionError && (
          <p className={`${styles['error-message']} absolute text-right text-bold`}>
            Fiecare exercițiu trebuie să aibă o soluție 👆
          </p>
          )}
        </section>

        {isOwnExercise && (
          <>
            <ChapterControls form="createForm" />
            <PrivacyControls form="createForm" isPrivate={isPrivate} onPrivacyChange={setIsPrivate} />
            <footer className="d-flex align-items-center justify-content-between">
              <LessonSelect
                selectedId={exercise.suggestion}
                onChange={(value) => setSuggestion(value.label)}
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
        )}
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

export default connector(ViewOrEditExercise);
