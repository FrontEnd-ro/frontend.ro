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
});

const Tidbit: mongoose.Model<TidbitI, {}, {}> = mongoose.models.Tidbit
  || mongoose.model<TidbitI>('Tidbit', TidbitSchema);


function sanitizeTidbit(tidbit: Document<TidbitI> & TidbitI): TidbitI {
  const tidbitCopy = tidbit.toObject();
  delete tidbitCopy._id;

  tidbitCopy.items.forEach((item) => {
    delete item._id;
  })

  return tidbitCopy;
}

export default Tidbit;
export { sanitizeTidbit };
