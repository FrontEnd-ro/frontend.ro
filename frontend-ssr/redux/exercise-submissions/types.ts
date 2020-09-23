import ChapterType from '../../services/Constants';

export interface Submission {
    username: string,
    avatarSrc: string,
    id: string,
    chapter: ChapterType,
    time: number,
    type: SubmissionType,
}
export interface SubmissionState {
    submissions: Submission[],
}
export enum SubmissionType {
    PENDING = 'pending',
    ASSIGNED = 'assigned',
}
