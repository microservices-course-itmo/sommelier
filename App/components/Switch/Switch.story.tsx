import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import Switch from './switch'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs'
import { Text, View } from 'react-native'

const defaultSwitch = () => <Switch type='heart' value={true}></Switch>

storiesOf('Switch', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultSwitch)
