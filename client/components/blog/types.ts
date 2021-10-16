export interface BlogArticle {
  id: string;
  title: string;
  cover: BlogCover;
  timestamp: number;
  firstParagraph: string;
}

export interface BlogCover {
  width: number;
  height: number;
  src: string;
}
