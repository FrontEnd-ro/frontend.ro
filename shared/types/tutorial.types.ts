import { API_CertificationI } from "./certification.types";
import { API_LessonI } from "./lesson.types";

export interface API_TutorialI {
  tutorialId: string;
  name: string;
  lessons: API_LessonI[]
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
