import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../theme/index'

type Props = {
  size: keyof typeof theme.inputSizes
}

type ViewProps = {
  editable: boolean
}

export const StyledInput = styled.TextInput<Props & TextInputProps>`
  font-size: ${({ size, theme }) => theme.inputSearchFontSizes[size]};
  padding-left: 5px;
  padding-right: 60px;
  width: 100%;
  height: ${({ size, theme }) => theme.inputSearchSizes[size]};
`

export const StyledView = styled.View<ViewProps>`
  display: flex;
  flex-direction: row;
  border: 1px solid ${theme.colors.searchInputBorder};
  border-radius: 50px;
  align-items: center;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  background-color: ${({ editable }) =>
    editable ? theme.colors.white : theme.colors.notEditableField};
`

export const ViewClose = styled.View`
  position: absolute;
  right: 15px;
  height: 100%;
  justify-content: center;
  margin-left: 5px;
`
