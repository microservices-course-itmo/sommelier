import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean } from '@storybook/addon-knobs'

import Checkbox from './checkbox'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultCheckbox = () => (
  <Checkbox checked={boolean('checked', true)}>White wine</Checkbox>
)

storiesOf('Checkbox', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default checkbox', defaultCheckbox)
