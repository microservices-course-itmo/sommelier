import React, { useState } from 'react'
import styled from 'styled-components/native'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { SearchInput } from './input'
import { INPUT_SIZE_KEYS } from '../../theme/inputSearchSizes'

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
    <SearchInput
      onChange={() => 's'}
      size='lg'
      clearButtonMode
      placeholder='Поиск по избранному'
      editable={false}
    />
    <StyledPadding />
    <SearchInput
      onChange={() => 's'}
      size='md'
      clearButtonMode
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <SearchInput
      onChange={() => 's'}
      size='sm'
      clearButtonMode
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <StyledPadding />
    <SearchInput
      onChange={() => 's'}
      size='lg'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable={false}
    />
    <StyledPadding />
    <SearchInput
      onChange={() => 's'}
      size='md'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable
    />
    <StyledPadding />
    <SearchInput
      onChange={() => 's'}
      size='sm'
      clearButtonMode={false}
      placeholder='Поиск по избранному'
      editable
    />
  </StyledWrapper>
)

export const InputKnobs = () => (
  <StyledWrapper>
    <SearchInput
      onChange={() => 'onChange called'}
      size={select('size', INPUT_SIZE_KEYS, INPUT_SIZE_KEYS.lg)}
      clearButtonMode={boolean('ClearButtonMode', false)}
      placeholder={text('Placeholder text', 'Поиск по избранному')}
      editable={boolean('Editable', true)}
      defaultValue={text('DefaultValue text', '')}
      value=''
      // maxLength={number('Max length', 15)}
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
  .add('Input knobs', () => <InputKnobs />)
