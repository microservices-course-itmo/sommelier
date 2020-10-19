import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs'
import Switch from './switch'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultSwitch = () => (
  <Switch
    type={select(
      'Type',
      {
        something: 'something',
      },
      'heart'
    )}
    value
    // onClick={} // тут должен быть экшн))))
    disabled={boolean('Disabled', false)}
  />
)

storiesOf('Switch', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultSwitch)
