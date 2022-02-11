import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import OptionsDrawerComponent from './OptionsDrawer';
import {
  CopyLinkButton, FacebookButton, LinkedInButton, WhatsAppButton,
} from '../SocialMediaButtons';

export default {
  title: 'OptionsDrawer',
  component: OptionsDrawerComponent,
} as ComponentMeta<typeof OptionsDrawerComponent>;

const urlToShare = 'https://FrontEnd.ro';

const Template: ComponentStory<typeof OptionsDrawerComponent> = (args) => (
  <div style={{ margin: '5em'}}>
    <OptionsDrawerComponent {...args}>
      <OptionsDrawerComponent.Element>
        <CopyLinkButton text={urlToShare} />
      </OptionsDrawerComponent.Element>
      <OptionsDrawerComponent.Element>
        <FacebookButton url={urlToShare} />
      </OptionsDrawerComponent.Element>
      <OptionsDrawerComponent.Element>
        <LinkedInButton url={urlToShare} />
      </OptionsDrawerComponent.Element>
      <OptionsDrawerComponent.Element>
        <WhatsAppButton url={urlToShare} />
      </OptionsDrawerComponent.Element>
    </OptionsDrawerComponent>
  </div>
);

export const OptionsDrawer = Template.bind({});
OptionsDrawer.args = {
  trigger: {
    text: 'Share',
    icon: faShare,
  },
};
