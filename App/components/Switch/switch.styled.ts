import styled from 'styled-components/native'
import { Props, ToggleProps, NotchProps } from './switch.types'

export const SwitchContainer = styled.TouchableWithoutFeedback<Props>`
  ${({ disabled }) => disabled && `opacity: 0.5;`}
`

export const Toggle = styled.View<ToggleProps>`
  height: 16px;
  width: 34px;
  border-radius: 50px;
  background-color: ${({ value }) =>
    value ? 'rgba(69, 208, 158, 0.5)' : '#ededed'};
`

export const Notch = styled.View<NotchProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ value }) => (value ? '#45d09e' : '#e0e0e0')};
  ${({ value }) => (value ? 'right: -3px;' : 'left: -3px;')}
  top: -2px;
  position: absolute;
  z-index: 1;
`

export const Mark = styled.View`
  position: absolute;
  left: 6px;
  top: 6px;
`
