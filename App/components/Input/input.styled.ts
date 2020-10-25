import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../theme/index'

type Props = {
  size: keyof typeof theme.inputSizes
  editable: boolean
}

export const StyledInput = styled.TextInput<Props & TextInputProps>`
  margin-left: 5px;
  width: 100%;
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
`

export const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid #9e9e9e;
  border-radius: 50px;
  align-items: center;
  padding-left: 5px;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
`
