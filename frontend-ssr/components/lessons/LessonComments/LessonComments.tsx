import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '~/redux/root.reducer';

import {
  loadComments, addComment,
} from '~/redux/lesson-comments/lesson-comments.actions';
import LessonCommentsService from '~/services/LessonComments.service';
import SweetAlertService from '~/services/sweet-alert/SweetAlert.service';

import SkeletonImage from '~/components/SkeletonImage';
import CommentBlock from './comment/CommentBlock';
import NewComment from './newComment/NewComment';

interface State {
  loading: boolean;
}

interface Props extends PropsFromRedux{
  idLesson: string,
}

class LessonComments extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.comments.lessonId === undefined,
    };
  }

  componentDidMount() {
    const { comments, idLesson } = this.props;

    if (comments.lessonId === undefined) {
      this.loadLessonComments(idLesson);
    }
  }

  loadLessonComments = async (id) => {
    const { dispatch, idLesson } = this.props;

    this.setState({ loading: true });

    try {
      const newComments = await LessonCommentsService.getComments(id);
      dispatch(loadComments(idLesson, newComments));
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  addLessonComment = async (id, newComment) => {
    const { dispatch, idLesson } = this.props;

    this.setState({ loading: true });

    try {
      await LessonCommentsService.addComment(id);
      dispatch(addComment(idLesson, newComment));
    } catch (err) {
      SweetAlertService.toast({ type: 'error', text: err });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { comments, idLesson } = this.props;
    const { loading } = this.state;

    return (
      <div style={{ border: '5px solid black' }}>
        <ul>
          {comments[idLesson] && comments[idLesson].map((commentProps) => (
            <CommentBlock
              {...commentProps}
              key={commentProps._id}
            />
          ))}
          {loading && (
          <li style={{ padding: '0.5em 1em', backgroundColor: 'rgba(192,192,192, 0.9)' }}>
            <SkeletonImage width="1.6em" height="1.6em" />
            <SkeletonImage width="1.6em" height="1.6em" />
            <SkeletonImage width="1.6em" height="1.6em" />
            <SkeletonImage width="1.6em" height="1.6em" />
            <SkeletonImage width="1.6em" height="1.6em" />
          </li>
          )}
          <NewComment onComment={this.addLessonComment} />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    comments: state.comments,
  };
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(LessonComments);
