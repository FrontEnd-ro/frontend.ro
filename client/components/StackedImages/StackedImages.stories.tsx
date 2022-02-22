import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StackedImagesComponent from './StackedImages';

export default {
  title: 'Generic/Stacked Images',
  component: StackedImagesComponent,
} as ComponentMeta<typeof StackedImagesComponent>;

const Template: ComponentStory<typeof StackedImagesComponent> = (args) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div style={{ padding: '3em', width: '100%' }}>
      <StackedImagesComponent {...args} currentIndex={currentImage} />
      <br />
      <br />
      <br />
      <div>
        <button type="button" onClick={() => setCurrentImage(currentImage - 1)}>
          Previous
        </button>
        <button type="button" onClick={() => setCurrentImage(currentImage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

const baseArgs = {
  images: [{
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/blob-animation/1.jpg',
    alt: 'Cum să animezi un Blob?',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/blob-animation/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/feature-tutorial-progress/1.jpg',
    alt: 'Nouă funcționalitate pe FrontEnd.ro',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/feature-tutorial-progress/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/so-frontend-is-just-buttons/1.jpg',
    alt: 'Deci FrontEnd-ul e doar butoane?',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/so-frontend-is-just-buttons/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-forms/1.jpg',
    alt: 'Formulare Web',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-forms/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/video-audio/1.jpg',
    alt: 'Video și Audio',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/video-audio/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-images/1.jpg',
    alt: 'Imagini și cum le optimizăm?',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-images/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/container-elements/1.jpg',
    alt: 'Elemente de tip container',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/container-elements/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-lists/1.jpg',
    alt: 'Liste în HTML',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-lists/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/links-and-buttons/1.jpg',
    alt: 'Linkuri și Butoane',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/links-and-buttons/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/text-markup/1.jpg',
    alt: 'Markup pentru texte',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/text-markup/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-validation/1.jpg',
    alt: 'Validarea paginii HTML',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-validation/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-structure/1.jpg',
    alt: 'Structura fiecărei pagini HTML',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/html-structure/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/about-web-development-and-html/1.jpg',
    alt: 'Despre Web Development și HTML',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/about-web-development-and-html/1.jpg',
  }, {
    src: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/responsive-logo/1.jpg',
    alt: 'Cum să faci logo-ul responsive?',
    href: 'https://d3tycb976jpudc.cloudfront.net/curriculum/tidbits/responsive-logo/1.jpg',
  }],
  rotationDelta: 25,
};

export const StackedImages = Template.bind({});
StackedImages.args = {
  ...baseArgs,
};
