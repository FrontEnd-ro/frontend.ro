import { ObjectId } from "mongoose";

export interface LessonI {
  _id?: ObjectId;

  lessonId: string;

  views?: number;
}
