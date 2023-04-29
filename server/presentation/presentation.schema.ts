import mongoose from "mongoose";
import { PresentationI } from "../../shared/types/presentation.types";

const PresentationSchema = new mongoose.Schema<PresentationI>({
  presentationId: { type: String, required: true, unique: true },
  views: { type: Number, required: true },
  title: { type: String, required: true },
  thumb: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, required: true }
}, {
  timestamps: {
    updatedAt: 'updatedAt',
  },
});

const Presentation: mongoose.Model<PresentationI> = mongoose.models.Presentation
  || mongoose.model('Presentation', PresentationSchema);

export { Presentation };
