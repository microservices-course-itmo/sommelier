import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './button'

export default {
  title: 'Button',
};

export const buttonKnob = () => (
  <Button
    onClick={action("button on click")}
  >
    {text("text", 'Some button text')}
  </Button>
);