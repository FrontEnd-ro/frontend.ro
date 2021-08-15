import { Document, Schema } from "mongoose";
//Each interface for a schema needs to extend a `Document` so the specific type has the functions available

interface FeedbackInterface extends Document {
  body: String;
  file_key: String;
  position: [Number];
  type: String;
  // createdAt: Date;
}

interface SubmissionInterface extends Document {
  code: String;
  user: UserDocumentInterface;
  assignee: Schema.Types.ObjectId;
  exercise: Schema.Types.ObjectId;
  status: String;
  feedbacks: [FeedbackInterface];
}


interface UserInterface {
  email: String;
  username: String;
  password: string;
  avatar: String;
}

interface UserDocumentInterface extends UserInterface,Document {
  name?: String;
  description?: String;
  github_access_token?: String;
  lastLogin?: string;
  role?: String;
}

interface PresentationInterface extends Document {
  presentationId: String;
  views: number;
  title: String;
  thumb: String;
  description: String;
  created: Number;
  //Not sure about this one
  // updatedAt:Date;
}

interface LeasonExercicesJsonInterface extends Document {
  leason: String;
}
interface LeasonsInterface extends Document {
  lessonId: String;
  views: number;
}
interface ExerciseJSONInterface extends Document {
  user: UserDocumentInterface;
  type: String;
  tags: [String];
  body: String;
  example: String;
  solution: String;
  private: Boolean;
  suggestion: String;
}

interface SubscribersInterface extends Document {
  name?: String;
  email?: String;
}


interface AttendeInterface {
  name: String;
  tel: String;
  email: String;

}
interface IAttendeDocument extends Document,AttendeInterface {
}

interface EventInterface extends Document {
  label: String;
  total: number;
  attendees: [IAttendeDocument|AttendeInterface];
  waitlist: [IAttendeDocument|AttendeInterface];
}

interface ChallengeParticipantInterface extends Document {
  user: UserDocumentInterface;
  lastDoneTask: String | null;
  meta: any;
}

interface ChallengeInterface extends Document {
  id: String;
  tasks: [String];
  participants: [ChallengeParticipantInterface];
}

interface SearchUser {
  username?: String;
  email?: String;
}

interface Query {
  user: Schema.Types.ObjectId;
  private?: Boolean;
}
interface IReturnValidateUser {
  result: Boolean;
  reason?: String;
}


interface LastDoneTask{
  meta:any;
  lastDoneTask:String;
}

export type {
  UserDocumentInterface,
  SubmissionInterface,
  FeedbackInterface,
  SearchUser,
  PresentationInterface,
  LeasonExercicesJsonInterface,
  ExerciseJSONInterface,
  LeasonsInterface,
  SubscribersInterface,
  Query,
  IAttendeDocument,
  EventInterface,
  ChallengeInterface,
  ChallengeParticipantInterface,
  IReturnValidateUser,
  UserInterface,
  LastDoneTask,
  AttendeInterface
};
