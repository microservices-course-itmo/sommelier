import React from 'react'
import styled from 'styled-components/native'
import { storiesOf } from '@storybook/react-native'
import { boolean, select } from '@storybook/addon-knobs'
import { H1, H2, H3, H4, H5, H6, Text } from './typography'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { FONT_SIZE_KEYS } from '../../theme/fontSizes/index'
import { FONT_KEYS } from '../../theme/fonts/index'
import { COLOR_KEYS } from '../../theme/colors/index'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: column;
`

export const list = () => (
  <StyledWrapper>
    <H1 color='black' bold={false} italic={false}>
      H1 value
    </H1>
    <H2 color='black' bold={false} italic={false}>
      H2 value
    </H2>
    <H3 color='black' bold={false} italic={false}>
      H3 value
    </H3>
    <H4 color='black' bold={false} italic={false}>
      H4 value
    </H4>
    <H5 color='black' bold={false} italic={false}>
      H5 value
    </H5>
    <H6 color='black' bold={false} italic={false}>
      H6 value
    </H6>
    <Text color='black' bold={false} italic={false} size='md'>
      Text value
    </Text>
  </StyledWrapper>
)

export const knobs = () => (
  <StyledWrapper>
    <H1
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H1 value
    </H1>
    <H2
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H2 value
    </H2>
    <H3
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H3 value
    </H3>
    <H4
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H4 value
    </H4>
    <H5
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H5 value
    </H5>
    <H6
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
    >
      H6 value
    </H6>
    <Text
      color={select('color', COLOR_KEYS, COLOR_KEYS.black)}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={
        boolean('font-family enabled', false)
          ? select('font-family', FONT_KEYS, FONT_KEYS.PtSans)
          : undefined
      }
      size={select('text font-size', FONT_SIZE_KEYS, FONT_SIZE_KEYS.md)}
      crossedOut={boolean('cross-out', false)}
    >
      Text value
    </Text>
  </StyledWrapper>
)

storiesOf('Typography', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Typography list', list)

storiesOf('Typography', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Typography knobs', knobs)
