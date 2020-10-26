import React from 'react'
import styled from 'styled-components/native'
import { storiesOf } from '@storybook/react-native'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { Input } from './input'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, number } from '@storybook/addon-knobs'
import { INPUT_SIZE_KEYS } from '../../theme/inputSizes'

const StyledWrapper = styled.View`
  display: flex;
  flex-direction: column;
`

const StyledPadding = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`

export const list = () => (
  <StyledWrapper>
    <Input
      onChange={() => 's'}
      size='lg'
      clearButtonMode={true}
      placeholder='Поиск по избранному'
      editable={false}
    />
    <StyledPadding />
    <Input
      onChange={() => 's'}
      size='md'
      clearButtonMode={true}
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <Input
      onChange={() => 's'}
      size='sm'
      clearButtonMode={true}
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <StyledPadding />
    <Input
      onChange={() => 's'}
      size='lg'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable={false}
    />
    <StyledPadding />
    <Input
      onChange={() => 's'}
      size='md'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <Input
      onChange={() => 's'}
      size='sm'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable
    />
  </StyledWrapper>
)

export const knobs = () => (
  <StyledWrapper>
    <Input
      onChange={action('Input has been change')}
      size={select('size', INPUT_SIZE_KEYS, INPUT_SIZE_KEYS.lg)}
      clearButtonMode={boolean('ClearButtonMode', false)}
      placeholder={text('Placeholder text', 'Поиск по избранному')}
      editable={boolean('Editable', true)}
      defaultValue={text('DefaultValue text', '')}
      value={text('Value text', '')}
      maxLength={number('Max length', 15)}
    />
  </StyledWrapper>
)

storiesOf('Input', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Input list', list)

storiesOf('Input', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Input knobs', knobs)
