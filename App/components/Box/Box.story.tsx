import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import Box from './box'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs'
import { Text, View } from 'react-native'

const defaultBox = () => (
  <Box
    m={number('m (margin)', 0)}
    mh={number('mh (margin-horizontal)', 0)}
    mv={number('mv (margin-vertical)', 0)}
    ml={number('ml (margin-left', 0)}
    mr={number('mr (margin-right', 0)}
    mt={number('mt (margin-top', 0)}
    mb={number('mb (margin-bottom', 0)}
    p={number('p (padding', 0)}
    ph={number('ph (padding-horizontal', 0)}
    pv={number('pv (padding-vertical', 0)}
    pl={number('pl (padding-left', 0)}
    pr={number('pr (padding-right', 0)}
    pt={number('pt (padding-top', 0)}
    pb={number('pb (padding-bottom', 0)}
    color={color('color', '#ffffff')}
    border={text('border', '1px solid #000000')}
    borderRadius={text('borderRadius', '5px')}
    boxShadow={text('boxShadow', '0px 2px 5px rgba(94, 94, 94, 0.2)')}
  >
    <View style={{ height: number('Height of inner component', 300) }}>
      <Text>{text('Text inside', 'I am box')}</Text>
    </View>
  </Box>
)

storiesOf('Box', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultBox)
