import React from 'react';
import { text } from '@storybook/addon-knobs';
import Box from './box'

export default {
  title: 'Box',
};

export const boxKnob = () => (
  <Box
  >
    {text("text", 'BOXTEXT asdasdasd')}
  </Box>
);