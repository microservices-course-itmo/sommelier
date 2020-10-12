import styled from 'styled-components/native'
import { Props } from './switch'

export const SwitchContainer = styled.TouchableOpacity<Props>`
  ${({ disabled }) => (disabled ? `opacity: 0.5;` : ``)}
`
