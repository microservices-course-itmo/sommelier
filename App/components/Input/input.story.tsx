import React from 'react'
import styled from 'styled-components/native'
import { storiesOf } from '@storybook/react-native'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { Input } from './input'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: column;
`

export const list = () => (
  <StyledWrapper>
    <Input
      onChange={() => 's'}
      size='lg'
      clearButtonMode='always'
      placeholder='Поиск по избранному'
      maxLength={15}
      editable
    />
  </StyledWrapper>
)

storiesOf('Input', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Input list', list)
