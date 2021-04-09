import '!style-loader!css-loader!sass-loader!../client/styles/index.scss';
// @ config.js
import { configure,  addDecorator } from '@storybook/react';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../client/redux/root.reducer';

import { withNextRouter } from 'storybook-addon-next-router';

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