import React from 'react';
import { connect } from 'react-redux';

function Post(props: { id: string; title: string; message: string; dispatch: any}) {
  const {
    id, title, message, dispatch,
  } = props;

  return (
    <article>
      <h3>{title}</h3>
      <p>{message}</p>
      <button
        type="button"
        onClick={() => (dispatch({ type: 'EDIT_POST', id }))}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => (dispatch({ type: 'DELETE_POST', id }))}
      >
        Delete
      </button>
    </article>
  );
}

export default connect()(Post);
