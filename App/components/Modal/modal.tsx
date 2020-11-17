import React from 'react'
import * as Styled from './modal.styled'
import theme from '../../theme'
import { ModalProps } from './modal.types'

const Modal = ({ open = false, children }: ModalProps) => {
  // open && ... -----> Тип "false" не может быть назначен для типа "Element | null"
  return (
    <>{open && <Styled.ModalContainer>{children}</Styled.ModalContainer>}</>
  )
}

export default Modal
