import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean } from '@storybook/addon-knobs'

import RadioButton from './RadioButton'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultRadioButton = () => (
  <RadioButton checked={boolean('checked', true)}>Red Vine</RadioButton>
)

storiesOf('RadioButton', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default RadioButton', defaultRadioButton)