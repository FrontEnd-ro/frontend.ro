/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';

function EditPostForm(props: { id: string; title: string; message: string; dispatch: any}) {
  const {
    id, title, message, dispatch,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newTitle = e.target.postTitle.value;
    const newMessage = e.target.postContent.value;

    const data = {
      newTitle,
      newMessage,
    };

    dispatch({
      type: 'UPDATE',
      id,
      data,
    });

    form.reset();
  };

  return (
    <section>
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          defaultValue={title}
        />
        <br />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={message}
        />
        <br />
        <button type="submit">Update Post</button>
      </form>
    </section>
  );
}
export default connect()(EditPostForm);
