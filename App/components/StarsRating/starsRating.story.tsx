import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, number } from '@storybook/addon-knobs'
import { StarsRating } from './starsRating'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultRating = () => (
  <StarsRating score={number('score', 12390)} rating={number('rating', 3.5)} />
)

storiesOf('Stars Rating', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('Stars Rating', defaultRating)
