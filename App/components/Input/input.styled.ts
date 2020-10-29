import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../theme/index'

type Props = {
  size: keyof typeof theme.inputSizes
  editable: boolean
}

export const StyledInput = styled.TextInput<Props & TextInputProps>`
  margin-left: 5px;
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
  overflow: hidden;
  width: 100%;
`

export const StyledView = styled.View<Props>`
  display: flex;
  flex-direction: row;
  border: 1px solid #9e9e9e;
  border-radius: 50px;
  align-items: center;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  background-color: ${({ editable }) =>
    editable ? 'white' : 'rgba(127,127,127,0.3)'};
`

export const ViewClose = styled.View`
  position: absolute;
  right: 5px;
  height: 100%;
  justify-content: center;
  margin-left: 5px;
`
