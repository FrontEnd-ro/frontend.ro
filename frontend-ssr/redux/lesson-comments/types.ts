export interface CommentState {
  [lessonId: string]: Comment[]
}

export interface Comment {
  _id: string,
  avatar: string;
  username: string;
  comment: string;
  timestamp: number;
}
