export type LessonConfig = {
  chapters: {
    title: string;
    id: string;
    subchapters?: {
      title: string;
      id: string
    }[]
  }[];
}
