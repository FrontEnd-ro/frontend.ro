import { Types } from "mongoose";

export interface LessonI {
  _id?: Types.ObjectId;

  lessonId: string;

  views?: number;
}

export interface API_LessonI {
  lessonId: string;

  views?: number;
}
