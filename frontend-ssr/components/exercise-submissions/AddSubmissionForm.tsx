/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { uuid } from '~/services/Utils';
import { ChapterType, SubmissionType } from '~/redux/exercise-submissions/types';
import { addSubmission } from '~//redux/exercise-submissions/submissions.actions';

interface Props {
    dispatch: any;
}

function AddSubmissionForm({ dispatch }:Props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const username = e.target.username.value;
    const avatarSrc = e.target.avatar.value;
    const chapter = e.target.chapters.value;
    const type = e.target.submissionType.value;

    const exercise = {
      id: uuid(),
      username,
      avatarSrc,
      chapter,
      time: Date.now(),
      type,
      editing: false,
    };
    console.log(exercise);
    if (username) {
      dispatch(addSubmission(exercise));
    }

    form.reset();
  };

  return (
    <section>
      <h2>Add a New Submission</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
        />
        <br />
        <input
          type="url"
          id="avatar"
          name="avatar"
          pattern="https://.*"
        />
        <br />
        <select
          name="chapterType"
          id="chapters"
        >
          <option value="html">{ChapterType.HTML}</option>
          <option value="css">{ChapterType.CSS}</option>
          <option value="js">{ChapterType.JS}</option>
        </select>
        <br />
        <select
          name="submissionType"
          id="submissionType"
        >
          <option value="pending">{SubmissionType.PENDING}</option>
          <option value="assigned">{SubmissionType.ASSIGNED}</option>
        </select>
        <br />
        <button type="submit">Save Submission</button>
      </form>
    </section>
  );
}
export default connect()(AddSubmissionForm);
