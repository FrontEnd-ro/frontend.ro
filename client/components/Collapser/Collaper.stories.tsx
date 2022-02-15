import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CollapserComponent from './Collapser';

export default {
  title: 'Generic/Collapser',
  component: CollapserComponent,
} as ComponentMeta<typeof CollapserComponent>;

const Template: ComponentStory<typeof CollapserComponent> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapserComponent isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </CollapserComponent>
  );
};

export const DefaultClosed = Template.bind({});
DefaultClosed.args = {
  defaultOpen: false,
};

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  defaultOpen: true,
};

export const WithCustomToggler = Template.bind({});
WithCustomToggler.args = {
  Toggler: ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => (
    <p
      style={{
        padding: '0.5em',
        border: '2px dashed red',
      }}
      onClick={onClick}
    >
      {isOpen ? 'Close' : 'Open'}
    </p>
  ),
};
