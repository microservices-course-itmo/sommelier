import styled from 'styled-components/native'
import { BoxProps, BorderType } from './box.types'
import theme from '../../theme'

export const BoxContainer = styled.View<BoxProps>`
  ${({ ml }) => !!ml && `margin-left: ${ml * 8}px;`}
  ${({ mr }) => !!mr && `margin-right: ${mr * 8}px;`}
  ${({ mt }) => !!mt && `margin-top: ${mt * 8}px;`}
  ${({ mb }) => !!mb && `margin-bottom: ${mb * 8}px;`}
  ${({ mv }) => !!mv && getMarginVertical(mv)}
  ${({ mh }) => !!mh && getMarginHorizontal(mh)}
  ${({ m }) => !!m && `margin: ${m * 8}px;`}
  ${({ pl }) => !!pl && `padding-left: ${pl * 8}px;`}
  ${({ pr }) => !!pr && `padding-right: ${pr * 8}px;`}
  ${({ pt }) => !!pt && `padding-top: ${pt * 8}px;`}
  ${({ pb }) => !!pb && `padding-bottom: ${pb * 8}px;`}
  ${({ pv }) => !!pv && getPaddingVertical(pv)}
  ${({ ph }) => !!ph && getPaddingHorizontal(ph)}
  ${({ p }) => !!p && `padding: ${p * 8}px;`}
  ${({ border }) => border && getBorder(border)}
  border-radius: ${({ borderRadius }) => borderRadius}px;
  color: ${({ color, theme }) => color && theme.colors[color]};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor && theme.colors[backgroundColor]};
`

const getMarginVertical = (mv: number) =>
  `
  margin-left: ${mv * 8}px;
  margin-right: ${mv * 8}px;
  `

const getMarginHorizontal = (mh: number) =>
  `
  margin-top: ${mh * 8}px;
  margin-bottom: ${mh * 8}px;
  `

const getPaddingVertical = (pv: number) =>
  `
  padding-left: ${pv * 8}px;
  padding-right: ${pv * 8}px;
  `

const getPaddingHorizontal = (ph: number) =>
  `
  padding-top: ${ph * 8}px;
  padding-bottom: ${ph * 8}px;
  `

const getBorder = (border: BorderType) => {
  const { borderWidth, borderStyle, borderColor } = border
  return `
  ${borderWidth && `border-width: ${borderWidth}px;`}
  ${
    borderStyle &&
    theme.borders[borderStyle] &&
    `border-style: ${theme.borders[borderStyle]};`
  }
  ${
    borderColor &&
    theme.colors[borderColor] &&
    `border-color: ${theme.colors[borderColor]};`
  }
  `
}
