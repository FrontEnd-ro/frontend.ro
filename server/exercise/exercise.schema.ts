import mongoose from 'mongoose';

const ExerciseSchemaJSONDefinition = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['html', 'css', 'js'] },
  tags: [{ type: String }],
  body: { type: String, required: true },
  example: { type: String },
  solution: { type: String, required: true },
  private: { type: Boolean, default: false },
  suggestion: { type: String, required: false },
}

const ExerciseSchema = new mongoose.Schema(ExerciseSchemaJSONDefinition, {
  timestamps: true,
});

export { ExerciseSchema, ExerciseSchemaJSONDefinition };
