import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import StarsRating from './starsRating'
import { withKnobs, number, text } from '@storybook/addon-knobs'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultRating = () => (
  <StarsRating score={number('score', 12390)} rating={number('rating', 3.5)}>
    {text('text', 'check out')}
  </StarsRating>
)

storiesOf('Stars Rating', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('Stars Rating', defaultRating)
