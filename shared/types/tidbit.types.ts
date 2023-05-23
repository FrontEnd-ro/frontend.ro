// Response of the Tidbit APIs
export interface API_TidbitI {
  // Human readable (eg: "html-images")
  tidbitId: string;

  title: string;

  textColor: string;

  backgroundColor: string;

  items: API_TidbitItemI[];

  description?: string;

  createdDate?: Date;

  language: 'en' | 'ro';
}

export interface API_TidbitItemI {
  imageSrc: string;
  language?: string;
  codeSnippets?: string[];
}
