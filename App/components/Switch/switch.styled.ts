import styled from 'styled-components/native'
import { Props } from './switch.types'

export const SwitchContainer = styled.TouchableOpacity<Props>`
  ${({ disabled }) => disabled && `opacity: 0.5;`}
`
