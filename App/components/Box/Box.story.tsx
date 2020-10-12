import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import Box from './box'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs'
import { Text, View } from 'react-native'

const defaultBox = () => (
  <Box
    m={number('m', NaN)}
    mh={number('mh', NaN)}
    mv={number('mv', NaN)}
    ml={number('ml', NaN)}
    mr={number('mr', NaN)}
    mt={number('mt', NaN)}
    mb={number('mb', NaN)}
    p={number('p', NaN)}
    ph={number('ph', NaN)}
    pv={number('pv', NaN)}
    pl={number('pl', NaN)}
    pr={number('pr', NaN)}
    pt={number('pt', NaN)}
    pb={number('pb', NaN)}
    border={{
      borderStyle: select(
        'borderStyle',
        {
          solid: 'solid',
          dashed: 'dashed',
          dotted: 'dotted',
        },
        'solid'
      ),
      borderColor: select(
        'borderColor',
        {
          white: 'white',
          black: 'black',
          dark: 'dark',
          light: 'light',
          lightGray: 'lightGray',
          primary: 'primary',
          lightGrayBorder: 'lightGrayBorder',
          grayBorder: 'grayBorder',
        },
        'grayBorder'
      ),
      borderWidth: number('borderWidth', 1),
    }}
    borderRadius={number('borderRadius', 0)}
    color={select(
      'color',
      {
        white: 'white',
        black: 'black',
        dark: 'dark',
        light: 'light',
        lightGray: 'lightGray',
        primary: 'primary',
        lightGrayText: 'lightGrayText',
      },
      'lightGrayText'
    )}
    backgroundColor={select(
      'backgroundColor',
      {
        white: 'white',
        black: 'black',
        dark: 'dark',
        light: 'light',
        lightGray: 'lightGray',
        primary: 'primary',
        grayBackground: 'grayBackground',
      },
      'grayBackground'
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
