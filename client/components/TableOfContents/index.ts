import TableOfContents, { Chapter } from './TableOfContents';

interface ChapterWihtoutHref {
  id: string;
  title: string;
  subchapters?: ChapterWihtoutHref[]
}

/**
 * Given a list of Chapters without `href` field,
 * recursively parse them and their `subChapters` and
 * add the `href` field.
 * @param chapters ChapterWihtoutHref[]
 * @returns Chapter[];
 */
const parseChapters = (chapters: ChapterWihtoutHref[]) => {
  return chapters.map(parseOneChapter);

  function parseOneChapter(chapter: ChapterWihtoutHref): Chapter {
    return {
      ...chapter,
      href: `#${chapter.id}`,
      subchapters: chapter.subchapters?.map(parseOneChapter),
    };
  }
};

export default TableOfContents;
export { parseChapters };
export type { Chapter };
