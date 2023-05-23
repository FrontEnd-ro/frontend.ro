import mongoose, { Document, Types } from 'mongoose';
import { API_TidbitI } from '../../shared/types/tidbit.types';

export interface TidbitI {
  // Mongo generated
  _id?: Types.ObjectId;

  // Human readable (eg: "html-images")
  tidbitId: string;

  title: string;

  textColor: string;

  backgroundColor: string;

  items: TidbitItemI[];

  description?: string;

  createdDate?: Date;

  views: number;

  language: 'en' | 'ro';
}

export interface TidbitItemI {
  // Mongo generated
  _id?: Types.ObjectId;

  imageSrc: string;
  language?: string;
  codeSnippets?: string[];
}

const TidbitItemSchema = new mongoose.Schema<TidbitItemI>({
  imageSrc: { type: String, required: true },
  language: { type: String },
  codeSnippets: [{ type: String }],
});

const TidbitSchema = new mongoose.Schema<TidbitI>({
  tidbitId: { type: String, required: true },
  title: { type: String, required: true },
  textColor: { type: String, required: true },
  backgroundColor: { type: String, required: true },
  items: [TidbitItemSchema],
  description: { type: String },
  createdDate: { type: Date, default: new Date() },
  views: { type: Number, default: 0 },
  language: { type: String, required: true },
});

TidbitSchema.index({ tidbitId: 1, language: 1 }, { unique: true });

const Tidbit: mongoose.Model<TidbitI, {}, {}> = mongoose.models.Tidbit
  || mongoose.model<TidbitI>('Tidbit', TidbitSchema);


function sanitizeTidbit(tidbit: Document<any, any, TidbitI> & TidbitI): API_TidbitI {
  return {
    tidbitId: tidbit.tidbitId,
    title: tidbit.title,
    textColor: tidbit.textColor,
    backgroundColor: tidbit.backgroundColor,
    createdDate: tidbit.createdDate,
    language: tidbit.language,
    items: tidbit.items.map((item) => ({
      imageSrc: item.imageSrc,
      language: item.language,
      codeSnippets: item.codeSnippets,
    })),
  }
  
}

export default Tidbit;
export { sanitizeTidbit };
