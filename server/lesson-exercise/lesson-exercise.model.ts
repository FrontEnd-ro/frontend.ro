import { Types } from 'mongoose';
import UserModel from '../user/user.model';
import { ServerError } from '../utils/ServerError';
import { UserI } from '../user/user.schema';
import { LessonI } from '../lesson/lesson.schema';
import { LessonExercisesSchema, LessonExercise, LessonExerciseI } from "./lesson-exercise.schema";
import { SanitizeRole, validateAgainstSchemaProps, validateObjectId } from '../ServerUtils';
import { API_LessonExerciseI } from '../../shared/types/lesson-exercise.types';

class LessonExerciseModel {
  static get(_id: string) {
    validateObjectId(_id);

    return LessonExercise
      .findById(_id)
      .populate<{ user: UserI }>('user');
  }

  static async getCount(lessonId: string) {
    const count = await LessonExercise
      .find<{ lesson: LessonI }>({ lesson: lessonId })
      .count();

    return count;
  }

  static async getAll() {
    const lessons = await LessonExercise
      .find({})
      .populate<{ user: UserI}>('user');

    return lessons;
  }

  static async getAllFromLesson(lessonId: string) {
    const lessons = await LessonExercise
      .find({ lesson: lessonId })
      .populate<{ user: UserI }>('user');

    return lessons;
  }

  static async create(payload: LessonExerciseI) {
    validateAgainstSchemaProps(payload, LessonExercisesSchema);
    const createdExercise = await new LessonExercise(payload).save();
    const createdExerciseWithUser = await createdExercise.populate<{ user: UserI }>('user');

    return createdExerciseWithUser;
  }

  static async update(_id: string, payload: LessonExerciseI) {
    validateObjectId(_id);
    const exercise = await LessonExercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, 'generic.404', { _id });
    }

    validateAgainstSchemaProps(payload, LessonExercisesSchema);
    Object.assign(exercise, payload);

    return exercise.save();
  }

  static async delete(_id: string): Promise<void> {
    validateObjectId(_id);

    const exercise = await LessonExercise.findById(_id);

    if (!exercise) {
      throw new ServerError(404, 'generic.404', { _id });
    }

    await exercise.deleteOne();
  }

  static sanitize(exercise: Omit<LessonExerciseI, 'user'> & { user: Types.ObjectId | UserI }) : API_LessonExerciseI {
    return {
      _id: exercise._id.toString(),
      body: exercise.body,
      lesson: exercise.lesson,
      solution: exercise.solution,
      type: exercise.type,
      user: exercise.user instanceof Types.ObjectId
        ? undefined
        : UserModel.sanitize(exercise.user, SanitizeRole.PUBLIC),
      example: exercise.example,
      suggestion: exercise.suggestion
    }
  }
}

export default LessonExerciseModel;