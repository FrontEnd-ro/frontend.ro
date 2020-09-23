import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import EditPostForm from './EditPostForm';

function PostsList(props: { posts: any;}) {
  const { posts } = props;

  return (
    <div>
      <h1>All Posts</h1>
      {posts.postReducer.map((post) => (
        <div key={post.id}>
          {post.editing
            ? (
              <EditPostForm
                title={post.title}
                message={post.message}
                id={post.id}
              />
            )
            : (
              <Post
                title={post.title}
                message={post.message}
                id={post.id}
              />
            )}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  posts: state,
});

export default connect(mapStateToProps)(PostsList);
