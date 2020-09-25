export interface Submission {
    username: string,
    avatarSrc: string,
    id: string,
    chapter: ChapterType,
    time: number,
    type: SubmissionType,
    editing?: boolean,
}
export interface SubmissionState {
    submissions: Submission[],
}
export enum ChapterType {
    HTML = 'html',
    CSS = 'css',
    JS = 'js',
}
export enum SubmissionType {
    PENDING = 'pending',
    ASSIGNED = 'assigned',
}
