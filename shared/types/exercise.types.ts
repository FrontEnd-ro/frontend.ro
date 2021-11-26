export enum ExerciseType {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
}

export interface ExerciseI {
  // UUID of the user that created it
  user: string;

  type: ExerciseType;

  tags: string[];

  body: string;

  // Starting code
  example?: string;

  solution: string;

  private: boolean;

  // Lesson suggestion for which this exercise was created
  //
  // IMPORTANT: this is not the lesson ID, but a basic string
  // for human-users to understand when looking at the exercise/DB.
  // Examples: "html/Despre HTML"
  suggestion?: string;
}

export interface LessonExerciseI extends ExerciseI {
  // Lesson to which this exercise is assigned to
  lesson: string;
}