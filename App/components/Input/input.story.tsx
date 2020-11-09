import React from 'react'
import styled from 'styled-components/native'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native/dist'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import Input from './input'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Padding = styled.View`
  padding-left: 50px;
`

const list = () => (
  <Container>
    <Input placeholder='От' />
    <Padding />
    <Input placeholder='До' />
  </Container>
)

storiesOf('Input Price', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('Input list', list)
