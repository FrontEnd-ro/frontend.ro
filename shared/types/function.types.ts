// Types used both in Lambda Functions and our regualar "server" code.
export type DiplomaScreenshotInput = {
  url: string;
  dryRun: boolean;
  certificationId: string;
};
