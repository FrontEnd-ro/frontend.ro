import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExerciseVersion as ExerciseVersionComponent } from './ExerciseVersionHistory';
import { FeedbackType, SubmissionVersionI } from '~/../shared/types/submission.types';

export default {
  title: 'Exercise/Version',
  component: ExerciseVersionComponent,
} as ComponentMeta<typeof ExerciseVersionComponent>;

const Template: ComponentStory<typeof ExerciseVersionComponent> = (args) => (
  <ExerciseVersionComponent {...args} />

);

const approvedVersion: SubmissionVersionI = {
  _id: '_id',
  approved: true,
  feedbacks: [],
  code: 'code',
  createdAt: '11 March 2021',
  submission: 'submission_id',
};

const rejectedVersion: SubmissionVersionI = {
  _id: '_id',
  approved: false,
  feedbacks: [{
    type: FeedbackType.IMPROVEMENT,
    file_key: 'file_key',
    body: 'body',
    position: [1, 2, 3, 4],
  }, {
    type: FeedbackType.OPINION,
    file_key: 'file_key',
    body: 'body',
    position: [1, 2, 3, 4],
  }, {
    type: FeedbackType.PRAISE,
    file_key: 'file_key',
    body: 'body',
    position: [1, 2, 3, 4],
  }],
  code: 'code',
  createdAt: '11 March 2021',
  submission: 'submission_id',
};

export const Approved = Template.bind({});
Approved.args = {
  href: '#',
  index: 1,
  version: approvedVersion,
};

export const ApprovedActive = Template.bind({});
ApprovedActive.args = {
  href: '#',
  index: 1,
  isActive: true,
  version: approvedVersion,
};

export const Rejected = Template.bind({});
Rejected.args = {
  href: '#',
  index: 2,
  version: rejectedVersion,
};
