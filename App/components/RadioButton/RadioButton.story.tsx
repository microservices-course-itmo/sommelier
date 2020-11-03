import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { RadioButton } from './RadioButton'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultRadioButton = () => (
  <RadioButton
    checked={boolean('checked', true)}
    onPress={action('tapper-default')}
  />
)

storiesOf('RadioButton', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default RadioButton', defaultRadioButton)
