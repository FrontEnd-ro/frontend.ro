import '!style-loader!css-loader!sass-loader!../client/styles/index.scss';
// @ config.js
import { configure,  addDecorator } from '@storybook/react';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../client/redux/root.reducer';

import  { withNextRouter } from '@gogaille/storybook-addon-next-router';

/**
 * How to make 'next/image' work with Storybook:
 * https://xenox.dev/next-image-with-storybookjs/
 */
 import * as NextImage from 'next/image';
 Object.defineProperty(NextImage, 'default', {
   configurable: true,
   // Overwrite `width` and `height` to `auto` since
   // we're not using the Next Image component.
   value: props => <img {...props} width="auto" height="auto" />
 });

export const decorators = [withNextRouter()];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const store = createStore(rootReducer);

addDecorator(S => (
  <Provider store={store}>
    <S />
  </Provider>
));

configure(require.context('../client', true, /\.stories\.js$/), module);