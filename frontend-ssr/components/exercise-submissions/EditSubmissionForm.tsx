/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { ChapterType } from '../../services/constants';
import { SubmissionType, Submission } from '~/redux/exercise-submissions/types';
import { updateSubmission } from '~/redux/exercise-submissions/exercise-submissions.actions';
import { uuid } from '~/services/Utils';

interface Props {
    submission: Submission,
    dispatch: any;
    viewSubmission: any,
}

function EditSubmissionForm({ submission, dispatch, viewSubmission }:Props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const username = e.target.username.value;
    const avatarSrc = e.target.avatar.value;
    const chapter = e.target.chapters.value;
    const type = e.target.submissionType.value;

    const newExercise = {
      id: uuid(),
      username,
      avatarSrc,
      chapter,
      type,
      time: Date.now(),
    };
    viewSubmission();
    dispatch(updateSubmission(submission.id, newExercise));
    form.reset();
  };

  return (
    <section>
      <h2>Edit Submission</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue={submission.username}
        />
        <br />
        <input
          type="url"
          id="avatar"
          name="avatar"
          pattern="https://.*"
          defaultValue={submission.avatarSrc}
        />
        <br />
        <select
          name="chapterType"
          id="chapters"
          defaultValue={submission.chapter}
        >
          <option value="html">{ChapterType.HTML}</option>
          <option value="css">{ChapterType.CSS}</option>
          <option value="js">{ChapterType.JS}</option>
        </select>
        <br />
        <select
          name="submissionType"
          id="submissionType"
          defaultValue={submission.type}
        >
          <option value="pending">{SubmissionType.PENDING}</option>
          <option value="assigned">{SubmissionType.ASSIGNED}</option>
        </select>
        <br />
        <button type="submit">Update Submission</button>
      </form>
    </section>
  );
}
export default connect()(EditSubmissionForm);
