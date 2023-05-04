import { Types } from "mongoose";
import { LessonI } from "./lesson.types";
import { API_CertificationI, WIPPopulatedCertificationI } from "./certification.types";

/**
 * The Tutorial entity is at the center of our platform.
 * Each tutorial has a collection of lessons, each with one
 * or more exercises. When finishing all exercises, the student
 * will receive a Certification.
 */
export interface TutorialI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  tutorialId: string;

  // Displayed in the UI
  name: string;

  // Collection of lesson IDs. The exercises are derived from
  // the lessons, thus they are not first class properties on
  // the tutorial.
  lessons: string[];
}

export interface WIPPopulatedTutorialI {
  _id?: Types.ObjectId;

  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  tutorialId: string;

  // Displayed in the UI
  name: string;

  lessons: LessonI[]
}

export interface API_TutorialI {
  tutorialId: string;
  name: string;
  lessons: LessonI[]
}

export interface TutorialProgressI {
  // Unique, human-readable ID.
  // This is used when Routing in the UI.
  tutorialId: string;

  // Displayed in the UI
  name: string;

  lessons: {
    // Lesson ID
    _id?: Types.ObjectId;

    lessonId: string;

    // A student can start solving a lesson only if
    // he/she sent solutions to all the previous exercises.
    locked: boolean;

    // By splitting into these 3 metrics, we can compute
    // completion percentages, which we'll show in the UI.
    progress: {
      done: number;
      inProgress: number;
      total: number;
    }
  }[];

  certification: WIPPopulatedCertificationI | null;
}

export interface API_TutorialProgressI {
  tutorialId: string;
  name: string;

  lessons: {
    lessonId: string;
    locked: boolean;
    progress: {
      done: number;
      inProgress: number;
      total: number;
    }
  }[];

  certification: API_CertificationI | null;
}
