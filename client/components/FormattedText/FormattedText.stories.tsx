import React from 'react';
import FormattedText from './FormattedText';

export default {
  title: 'FormattedText',
};

export const Default = () => (
  <>
    <FormattedText as="span">span</FormattedText>
    <FormattedText as="strong">strong</FormattedText>
  </>
);
