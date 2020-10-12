import styled from 'styled-components/native'
import { Props, borderType } from './box'
import theme from '../../theme'

export const BoxContainer = styled.View<Props>`
  ${({ ml }) => (ml || ml === 0 ? `margin-left: ${ml * 8}px;` : '')}
  ${({ mr }) => (mr || mr === 0 ? `margin-right: ${mr * 8}px;` : '')}
  ${({ mt }) => (mt || mt === 0 ? `margin-top: ${mt * 8}px;` : '')}
  ${({ mb }) => (mb || mb === 0 ? `margin-bottom: ${mb * 8}px;` : '')}
  ${({ mv }) => (mv || mv === 0 ? getMarginVertical(mv) : '')}
  ${({ mh }) => (mh || mh === 0 ? getMarginHorizontal(mh) : '')}
  ${({ m }) => (m || m === 0 ? `margin: ${m * 8}px;` : '')}
  ${({ pl }) => (pl || pl === 0 ? `padding-left: ${pl * 8}px;` : '')}
  ${({ pr }) => (pr || pr === 0 ? `padding-right: ${pr * 8}px;` : '')}
  ${({ pt }) => (pt || pt === 0 ? `padding-top: ${pt * 8}px;` : '')}
  ${({ pb }) => (pb || pb === 0 ? `padding-bottom: ${pb * 8}px;` : '')}
  ${({ pv }) => (pv || pv === 0 ? getPaddingVertical(pv) : '')}
  ${({ ph }) => (ph || ph === 0 ? getPaddingHorizontal(ph) : '')}
  ${({ p }) => (p || p === 0 ? `padding: ${p * 8}px;` : '')}
  ${({ border }) => (border ? getBorder(border) : '')}
  ${({ borderRadius }) =>
    borderRadius || borderRadius === 0
      ? `border-radius: ${borderRadius}px;`
      : ''}
  ${({ color }) =>
    color && theme.colors[color] ? `color: ${theme.colors[color]};` : ''}
  ${({ backgroundColor }) =>
    backgroundColor && theme.colors[backgroundColor]
      ? `background-color: ${theme.colors[backgroundColor]};`
      : ''}
`

const getMarginVertical = (mv: number) => {
  return `
  margin-left: ${mv * 8}px;
  margin-right: ${mv * 8}px;
  `
}

const getMarginHorizontal = (mh: number) => {
  return `
  margin-top: ${mh * 8}px;
  margin-bottom: ${mh * 8}px;
  `
}

const getPaddingVertical = (pv: number) => {
  return `
  padding-left: ${pv * 8}px;
  padding-right: ${pv * 8}px;
  `
}

const getPaddingHorizontal = (ph: number) => {
  return `
  padding-top: ${ph * 8}px;
  padding-bottom: ${ph * 8}px;
  `
}
const getBorder = (border: borderType) => {
  const { borderWidth, borderStyle, borderColor } = border
  return `
  ${borderWidth || borderWidth === 0 ? `border-width: ${borderWidth}px;` : ''}
  ${
    borderStyle && theme.borderStyles[borderStyle]
      ? `border-style: ${theme.borderStyles[borderStyle]};`
      : ''
  }
  ${
    borderColor && theme.colors[borderColor]
      ? `border-color: ${theme.colors[borderColor]};`
      : ''
  }
  `
}
