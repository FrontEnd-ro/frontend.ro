import { ObjectId } from 'mongoose';

export interface TidbitI {
  // Mongo generated
  _id?: ObjectId;

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
  _id?: ObjectId;

  imageSrc: string;
  language?: string;
  codeSnippets?: string[];
}
