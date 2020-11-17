import React from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components/native'
import Modal from './modal'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const Content = styled.View`
  width: 100%;
  height: 218px;
  background-color: white;
  opacity: 1;
`

const defaultModal = () => {
  const visible = boolean('visible', false)

  return (
    <>
      <Modal open={visible}>
        <Content>
          <Text>Text inside modal</Text>
        </Content>
      </Modal>

      <Text>Text outside modal</Text>
    </>
  )
}

storiesOf('Modal', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultModal)
