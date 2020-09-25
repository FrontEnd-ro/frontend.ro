/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { uuid } from '~/services/Utils';
import { ChapterType, SubmissionType, Submission } from '~/redux/exercise-submissions/types';
import { updateSubmissions } from '~/redux/exercise-submissions/submissions.actions';

interface Props {
    submission: Submission,
    dispatch: any;
}

function EditSubmissionForm({ submission, dispatch }:Props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newUsername = e.target.username.value;
    const newAvatar = e.target.avatar.value;
    const newChapter = e.target.chapters.value;
    const newType = e.target.submissionType.value;

    const newExercise = {
      newUsername,
      newAvatar,
      newChapter,
      newType,
    };
    dispatch(updateSubmissions(newExercise, submission.id));
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
