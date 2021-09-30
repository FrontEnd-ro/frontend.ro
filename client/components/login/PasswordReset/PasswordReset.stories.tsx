import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PasswordResetComponent from './PasswordReset';

export default {
  title: 'PasswordReset',
  component: PasswordResetComponent,
} as ComponentMeta<typeof PasswordResetComponent>;

const Template: ComponentStory<typeof PasswordResetComponent> = (args) => (
  <div style={{ border: '1px solid #ccc', width: '500px', padding: '1em' }}>
    <PasswordResetComponent {...args} />
  </div>
);

export const PasswordReset = Template.bind({});
PasswordReset.args = {
  onReset: (resetCode, newPassword) => console.log(resetCode, newPassword),
};

export const PasswordResetLoading = Template.bind({});
PasswordResetLoading.args = {
  loading: true,
  buttonVariant: 'success',
  onReset: (resetCode, newPassword) => console.log(resetCode, newPassword),
};

export const PasswordResetDisabled = Template.bind({});
PasswordResetDisabled.args = {
  disabled: true,
  buttonVariant: 'light',
  onReset: (resetCode, newPassword) => console.log(resetCode, newPassword),
};

export const PasswordResetCode6 = Template.bind({});
PasswordResetCode6.args = {
  characterCount: 6,
  onReset: (resetCode, newPassword) => console.log(resetCode, newPassword),
};

export const PasswordResetWithError = Template.bind({});
PasswordResetWithError.args = {
  characterCount: 6,
  errReason: 'Something went wrong',
  onReset: (resetCode, newPassword) => console.log(resetCode, newPassword),
};
