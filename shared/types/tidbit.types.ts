import { Types } from 'mongoose';

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
}

export interface TidbitItemI {
  // Mongo generated
  _id?: Types.ObjectId;

  imageSrc: string;
  language?: string;
  codeSnippets?: string[];
}
