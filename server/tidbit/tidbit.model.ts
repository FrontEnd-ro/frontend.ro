import mongoose, { Document } from 'mongoose';
import { TidbitI, TidbitItemI } from '../../shared/types/tidbit.types';



const TidbitItemSchema = new mongoose.Schema<TidbitItemI>({
  imageSrc: { type: String, required: true },
  language: { type: String },
  codeSnippets: [{ type: String }],
});

const TidbitSchema = new mongoose.Schema<TidbitI>({
  tidbitId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  textColor: { type: String, required: true },
  backgroundColor: { type: String, required: true },
  items: [TidbitItemSchema],
  description: { type: String },
  createdDate: { type: Date, default: new Date() },
  views: { type: Number, default: 0 },
});

const Tidbit: mongoose.Model<TidbitI, {}, {}> = mongoose.models.Tidbit
  || mongoose.model<TidbitI>('Tidbit', TidbitSchema);


function sanitizeTidbit(tidbit: Document<any, any, TidbitI> & TidbitI): TidbitI {
  const tidbitCopy = tidbit.toObject();
  delete tidbitCopy._id;

  tidbitCopy.items.forEach((item) => {
    delete item._id;
  });
  delete tidbitCopy.views;

  return tidbitCopy;
}

export default Tidbit;
export { sanitizeTidbit };
