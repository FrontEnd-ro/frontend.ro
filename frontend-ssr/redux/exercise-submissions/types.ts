import { ChapterType } from '~/services/constants';

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
    search: string,
    page: number,
}
export enum SubmissionType {
    PENDING = 'pending',
    ASSIGNED = 'assigned',
}
