import mongoose from 'mongoose';
import { ChapterType } from '~/shared-types';
import { validateAgainstSchemaProps } from '../database';

const ExercisesSchema = new mongoose.Schema(
  {
    type: { type: String, enum: [ChapterType.HTML, ChapterType.CSS, ChapterType.JS] },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise', ExercisesSchema);

class ExerciseModel {
  static search() {
    return Exercise.find({});
  }

  static create(payload) {
    validateAgainstSchemaProps(payload, ExercisesSchema);

    const submission = new Exercise(payload);

    return new Promise((resolve, reject) => {
      submission.save((err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default ExerciseModel;
