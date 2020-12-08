import { ThemeProvider } from 'styled-components'
import React from 'react'
import styled from 'styled-components/native'
import { theme } from '../theme'

const StyledBufferView = styled.View`
  flex: 1;
  margin-vertical: 40;
  margin-horizontal: 20;
`

export const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export const BufferView = (storyFn: any) => (
  <StyledBufferView>{storyFn()}</StyledBufferView>
)
