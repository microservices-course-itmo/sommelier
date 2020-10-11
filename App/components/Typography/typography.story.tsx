import React from 'react'
import styled from 'styled-components/native'
import { storiesOf } from '@storybook/react-native'
import { boolean, select } from '@storybook/addon-knobs'
import { H1, H2, H3, H4, H5, H6, Text } from './typography'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import theme from '../../theme/index'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: column;
`

const FONT_SIZES = Object.keys(theme.fontSizes) as Array<
  keyof typeof theme.fontSizes
>
const COLORS = Object.keys(theme.colors) as Array<keyof typeof theme.colors>
const FONTS = Object.keys(theme.fonts) as Array<keyof typeof theme.fonts>

export const list = () => (
  <StyledWrapper>
    <H1 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H1 value
    </H1>
    <H2 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H2 value
    </H2>
    <H3 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H3 value
    </H3>
    <H4 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H4 value
    </H4>
    <H5 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H5 value
    </H5>
    <H6 color='black' bold={false} italic={false} fontFamily='PtSans'>
      H6 value
    </H6>
    <Text
      color='black'
      bold={false}
      italic={false}
      fontFamily='PtSans'
      size='md'
    >
      Text value
    </Text>
  </StyledWrapper>
)

export const knobs = () => (
  <StyledWrapper>
    <H1
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H1 value
    </H1>
    <H2
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H2 value
    </H2>
    <H3
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H3 value
    </H3>
    <H4
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H4 value
    </H4>
    <H5
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H5 value
    </H5>
    <H6
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
    >
      H6 value
    </H6>
    <Text
      color={select('color', COLORS, COLORS[1])}
      bold={boolean('bold', false)}
      italic={boolean('font-style: italic', false)}
      fontFamily={select('font-family', FONTS, FONTS[0])}
      size={select('text font-size', FONT_SIZES, FONT_SIZES[0])}
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
