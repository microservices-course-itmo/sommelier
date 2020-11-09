import styled, { css } from 'styled-components/native'

interface PlaceholderLabelProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.View`
  width: 126px;
  height: 50px;
  margin-top: 40px;
  border-bottom-width: 1px;
  padding-right: 12px;
  padding-left: 1px;
  border-bottom-color: #dcdcdc;
  display: flex;
  flex-direction: row;
`

export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
  position: absolute;
  left: 0;
  color: #dcdcdc;
  ${(props) =>
    props.isFocused || props.isFilled
      ? css`
          transform: translateY(4px);
          font-size: 12px;
        `
      : css`
          transform: translateY(+25px);
          font-size: 18px;
        `}
`

export const LabeledInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333333;
  padding: 0;
  margin-bottom: -20px;
`

export const RubleIcon = styled.View`
  position: absolute;
  bottom: 2px;
  right: 0px;
`
