import React from 'react'
import { Text, View } from 'react-native'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'
import Box from './box'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultBox = () => (
  <Box
    m={number('m', 0)}
    mh={number('mh', 0)}
    mv={number('mv', 0)}
    ml={number('ml', 0)}
    mr={number('mr', 0)}
    mt={number('mt', 0)}
    mb={number('mb', 0)}
    p={number('p', 0)}
    ph={number('ph', 0)}
    pv={number('pv', 0)}
    pl={number('pl', 0)}
    pr={number('pr', 0)}
    pt={number('pt', 0)}
    pb={number('pb', 0)}
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
