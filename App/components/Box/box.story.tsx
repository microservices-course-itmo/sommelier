import React from 'react'
import { Text, View } from 'react-native'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import Box from './box'
import { COLOR_KEYS } from '../../theme/colors'
import { SIZE } from '../../theme/boxSizes'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultBox = () => (
  <Box
    pX={select('padding-x', SIZE, SIZE.xs)}
    pY={select('padding-y', SIZE, SIZE.xs)}
    mX={select('margin-x', SIZE, SIZE.xs)}
    mY={select('margin-y', SIZE, SIZE.xs)}
    borderRadius={number('borderRadius', 0)}
    borderColor={select('color', COLOR_KEYS, COLOR_KEYS.black)}
    backgroundColor={select(
      'backgroundColor',
      COLOR_KEYS,
      COLOR_KEYS.grayBackground
    )}
  >
    <View style={{ height: number('Height of inner component', 300) }}>
      <Text>{text('Text', 'Default box')}</Text>
    </View>
  </Box>
)

storiesOf('Box', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultBox)
