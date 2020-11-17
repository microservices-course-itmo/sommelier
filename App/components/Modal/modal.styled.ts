import styled from 'styled-components/native'
// import { vw, vh } from 'react-native-viewport-units'
// import { vw, vh } from 'react-native-expo-viewport-units'
// import { ModalProps } from './modal.types'

// const { vw, vh } = require('react-native-viewport-units')

export const ModalContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalCover};
`

// export const ModalLayout = styled.View`
//   background-color: white;
// `
