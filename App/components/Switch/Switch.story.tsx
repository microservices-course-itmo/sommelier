import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { Switch } from './switch'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultSwitch = () => (
  <Switch
    switchType={select(
      'Type',
      {
        default: 'default',
        heart: 'heart',
      },
      'heart'
    )}
    value={false}
    disabled={boolean('Disabled', false)}
  />
)

storiesOf('Switch', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultSwitch)
