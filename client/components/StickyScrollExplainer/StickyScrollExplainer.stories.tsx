import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StickyScrollExplainerComponent from './StickyScrollExplainer';

export default {
  title: 'Generic/Sticky Scroll Explainer',
  component: StickyScrollExplainerComponent,
} as ComponentMeta<typeof StickyScrollExplainerComponent>;

const Template: ComponentStory<typeof StickyScrollExplainerComponent> = (args) => (
  <div style={{
    margin: '2em auto',
    width: '90%',
    height: '500px',
    maxWidth: '1200px',
  }}
  >
    <h1> Content to simulate a long page </h1>
    <ul>
      <li> Australia </li>
      <li> Canada </li>
      <li> Saudi Arabia </li>
      <li> United States </li>
      <li> India </li>
      <li> Russia </li>
      <li> South Africa </li>
      <li> Turkey </li>
      <li> Argentina </li>
      <li> Brazil </li>
      <li> Mexico </li>
      <li> France </li>
      <li> Germany </li>
      <li> Italy </li>
      <li> United Kingdom </li>
      <li> China </li>
      <li> Indonesia </li>
      <li> Japan </li>
      <li> South Korea </li>
    </ul>
    <StickyScrollExplainerComponent {...args} />
    <h1> Content to simulate a long page </h1>
    <ul>
      <li> Australia </li>
      <li> Canada </li>
      <li> Saudi Arabia </li>
      <li> United States </li>
      <li> India </li>
      <li> Russia </li>
      <li> South Africa </li>
      <li> Turkey </li>
      <li> Argentina </li>
      <li> Brazil </li>
      <li> Mexico </li>
      <li> France </li>
      <li> Germany </li>
      <li> Italy </li>
      <li> United Kingdom </li>
      <li> China </li>
      <li> Indonesia </li>
      <li> Japan </li>
      <li> South Korea </li>
    </ul>
  </div>
);

const ExplanationExample = () => (
  <div style={{ border: '1px solid #ccc', padding: '10em 0' }}>
    <p className="my-10">Lorem Ipsum is simply dummy text</p>
    <p className="my-10">of the printing and typesetting industry.</p>
    <p className="my-10">Lorem Ipsum has been the industry's</p>
    <p className="my-10">standard dummy text ever since the 1500s,</p>
    <p className="my-10">when an unknown printer took a galley of</p>
    <p className="my-10">type and scrambled it to make a type</p>
    <p className="my-10">specimen book. It has survived not only</p>
    <p className="my-10">five centuries, but also the leap into</p>
    <p className="my-10">electronic typesetting, remaining essentially</p>
    <p className="my-10">unchanged. It was popularised in the</p>
    <p className="my-10">1960s with the release of Letraset sheets</p>
    <p className="my-10">containing Lorem Ipsum passages, and more</p>
    <p className="my-10">recently with desktop publishing software</p>
    <p className="my-10">like Aldus PageMaker including versions of</p>
    <p className="my-10">Lorem Ipsum.</p>
  </div>
);

const AnimationExample = ({ percentage }: { percentage: number }) => (
  <div style={{ background: '#fff' }}>
    <h1>
      {' '}
      Loading:
      {' '}
      {`${percentage}%`}
    </h1>
  </div>
);

export const StickyScrollExplainer = Template.bind({});
StickyScrollExplainer.args = {
  Explainer: ExplanationExample,
  Animation: AnimationExample,
  breakpoint: 800,
};
