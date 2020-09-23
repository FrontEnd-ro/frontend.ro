/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { uuid } from '~/services/Utils';

function AddPostForm(props: {dispatch: any;}) {
  const { dispatch } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = e.target.postTitle.value;
    const message = e.target.postContent.value;

    const data = {
      id: uuid(),
      title,
      message,
      editing: false,
    };

    if (title && message) {
      dispatch({
        type: 'ADD_POST',
        data,
      });
    }

    form.reset();
  };

  return (
    <section>
      <h2>Add a New Post</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
        />
        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
        />
        <br />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
}
export default connect()(AddPostForm);
