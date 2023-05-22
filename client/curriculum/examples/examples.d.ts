export type CurriculumExamples = Record<
  string,
  Required<Pick<SandpackProps, "theme" | "template" | "files" | "options">>
>;
