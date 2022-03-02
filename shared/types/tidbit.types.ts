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
}

export interface TidbitItemI {
  imageSrc: string;
  language?: string;
  codeSnippets?: string[];
}
