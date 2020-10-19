import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import Button from './button'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultButton = () => (
  <Button onPress={action('tapper-default')}>Press Me</Button>
)

storiesOf('Button', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default button', defaultButton)
