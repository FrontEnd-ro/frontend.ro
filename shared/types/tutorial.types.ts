import { ObjectId } from "mongoose";
import { LessonI } from "./lesson.types";

/**
 * The Tutorial entity is at the center of our platform.
 * Each tutorial has a collection of lessons, each with one
 * or more exercises. When finishing all exercises, the student
 * will receive a Certification.
 */
export interface TutorialI {
  _id?: ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  name: string;

  // Collection of lesson IDs. The exercises are derived from
  // the lessons, thus they are not first class properties on
  // the tutorial.
  lessons: string[];
}

export interface WIPPopulatedTutorialI {
  _id?: ObjectId;

  name: string;

  lessons: LessonI[]
}

export interface TutorialProgressI {
  // Tutorial name which acts like an ID
  name: string;

  lessons: {
    // Lesson ID
    _id?: ObjectId;

    lessonId: string;

    // By splitting into these 3 metrics, we can compute
    // completion percentages, which we'll show in the UI.
    progress: {
      done: number;
      inProgress: number;
      total: number;
    }
  }[];
}