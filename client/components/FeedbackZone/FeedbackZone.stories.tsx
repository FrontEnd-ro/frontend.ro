import { ComponentMeta, ComponentStory } from '@storybook/react';
import FeedbackZoneComponent from './FeedbackZone';

export default {
  title: 'Generic/FeedbackZone',
  component: FeedbackZoneComponent,
} as ComponentMeta<typeof FeedbackZoneComponent>;

const Template: ComponentStory<typeof FeedbackZoneComponent> = (args) => (
  <FeedbackZoneComponent {...args} />
);

export const FeedbackZone = Template.bind({});
FeedbackZone.args = {
  author: {
    name: 'iampava',
    avatar: 'https://iampava.com/images/pava.jpg',
  },
  markdown: `
# Feedback

Ai uita sa inchizi ghilimelele pentru atributul \`lang\`.
`,
  timestamp: Date.now() - 60000, // 1 minute ago
  type: 'improvement',
};
