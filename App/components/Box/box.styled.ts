import styled from 'styled-components/native'
import { BoxProps, BorderType } from './box.types'
import theme from '../../theme'

export const BoxContainer = styled.View<BoxProps>`
  ${({ ml }) => (!!ml || ml === 0 ? `marginLeft: ${ml * 8}px;` : '')}
  ${({ mr }) => (!!mr || mr === 0 ? `marginRight: ${mr * 8}px;` : '')}
${({ mt }) => (!!mt || mt === 0 ? `marginTop: ${mt * 8}px;` : '')}
${({ mb }) => (!!mb || mb === 0 ? `marginBottom: ${mb * 8}px;` : '')}
${({ mv }) => (!!mv || mv === 0 ? getMarginVertical(mv) : '')}
${({ mh }) => (!!mh || mh === 0 ? getMarginHorizontal(mh) : '')}
${({ m }) => (!!m || m === 0 ? `margin: ${m * 8}px;` : '')}
${({ pl }) => (!!pl || pl === 0 ? `paddingLeft: ${pl * 8}px;` : '')}
${({ pr }) => (!!pr || pr === 0 ? `paddingRight: ${pr * 8}px;` : '')}
${({ pt }) => (!!pt || pt === 0 ? `paddingTop: ${pt * 8}px;` : '')}
${({ pb }) => (!!pb || pb === 0 ? `paddingBottom: ${pb * 8}px;` : '')}
${({ pv }) => (!!pv || pv === 0 ? getPaddingVertical(pv) : '')}
${({ ph }) => (!!ph || ph === 0 ? getPaddingHorizontal(ph) : '')}
${({ p }) => (!!p || p === 0 ? `padding: ${p * 8}px;` : '')}
${({ border }) => (border ? getBorder(border) : '')}
${({ borderRadius }) =>
    (!!borderRadius || borderRadius === 0)
      ? `borderRadius: ${borderRadius}px;`
      : ''}

backgroundColor: ${({ backgroundColor, theme }) =>
    backgroundColor && theme.colors[backgroundColor] ? theme.colors[backgroundColor] : ''};
`

const getMarginVertical = (mv: number) =>
  `
marginLeft: ${mv * 8}px;
marginRight: ${mv * 8}px;
`

const getMarginHorizontal = (mh: number) =>
  `
marginTop: ${mh * 8}px;
marginBottom: ${mh * 8}px;
`

const getPaddingVertical = (pv: number) =>
  `
paddingLeft: ${pv * 8}px;
paddingRight: ${pv * 8}px;
`

const getPaddingHorizontal = (ph: number) =>
  `
paddingTop: ${ph * 8}px;
paddingBottom: ${ph * 8}px;
`

const getBorder = (border: BorderType) => {
  const { borderWidth, borderStyle, borderColor } = border
  return `
${(borderWidth || borderWidth === 0) ? `borderWidth: ${borderWidth}px;` : ''}
${(borderStyle && theme.borders[borderStyle]) ? `borderStyle: ${theme.borders[borderStyle]}` : ''}
${(borderColor && theme.colors[borderColor]) ? `borderColor: ${theme.colors[borderColor]}` : ''}
`
}
