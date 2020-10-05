import styled from 'styled-components/native'
import { Props } from './box'

export const BoxContainer = styled.TouchableOpacity<Props>`
  ${({ m }) => (m || m === 0 ? `margin: ${m * 8}px;` : '')}
  ${({ mv }) => (mv || mv === 0 ? `margin-vertical: ${mv * 8}px;` : '')}
  ${({ mh }) => (mh || mh === 0 ? `margin-horizontal: ${mh * 8}px;` : '')}
  ${({ ml }) => (ml || ml === 0 ? `margin: ${ml * 8}px;` : '')}
  ${({ mr }) => (mr || mr === 0 ? `margin: ${mr * 8}px;` : '')}
  ${({ mt }) => (mt || mt === 0 ? `margin: ${mt * 8}px;` : '')}
  ${({ mb }) => (mb || mb === 0 ? `margin: ${mb * 8}px;` : '')}
  ${({ p }) => (p || p === 0 ? `padding: ${p * 8}px;` : '')}
  ${({ pv }) => (pv || pv === 0 ? `padding-vertical: ${pv * 8}px;` : '')}
  ${({ ph }) => (ph || ph === 0 ? `padding-horizontal: ${ph * 8}px;` : '')}
  ${({ pl }) => (pl || pl === 0 ? `padding: ${pl * 8}px;` : '')}
  ${({ pr }) => (pr || pr === 0 ? `padding: ${pr * 8}px;` : '')}
  ${({ pt }) => (pt || pt === 0 ? `padding: ${pt * 8}px;` : '')}
  ${({ pb }) => (pb || pb === 0 ? `padding: ${pb * 8}px;` : '')}
  ${({ border }) => (border ? `border: ${border};` : '')}
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius};` : ''}
  ${({ boxShadow }) => (boxShadow ? `box-shadow: ${boxShadow};` : '')}
  flex: 1;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
`
