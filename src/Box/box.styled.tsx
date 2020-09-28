import styled from 'styled-components';
import theme from '../theme';
import { BoxProps } from './box'


export const StyledBox = styled.div<BoxProps>`
    color: ${({color}) => (color && theme.colors[color])
        ? theme.colors[color]
        : theme.colors.black};
    background-color: ${({backgroundColor}) => (backgroundColor && theme.colors[backgroundColor])
        ? theme.colors[backgroundColor]
        : theme.colors.white};
    ${({border}) => border && `border: ${border};`}
    ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius};`}
    ${({mt}) => mt && `margin-top: ${mt};`}
    ${({mb}) => mb && `margin-bottom: ${mb};`}
    ${({mr}) => mr && `margin-right: ${mr};`}
    ${({ml}) => ml && `margin-left: ${ml};`}
    ${({mv, mh}) => mv && mh
        ? `margin: ${mv}rem ${mh}rem;`
        : mv ? `margin: ${mv}rem auto;`
        : mh ? `margin: auto ${mh}rem;`
        : ''}
    ${({m}) => m && `margin: ${m}rem;`}
    ${({pt}) => pt && `padding-top: ${pt}rem;`}
    ${({pb}) => pb && `padding-bottom: ${pb}rem;`}
    ${({pr}) => pr && `padding-right: ${pr}rem;`}
    ${({pl}) => pl && `padding-left: ${pl}rem;`}
    ${({pv, ph}) => pv && ph
        ? `padding: ${mv}rem ${ph}rem;`
        : pv ? `padding: ${pv}rem auto;`
        : ph ? `padding: auto ${ph}rem;`
        : ''}
    ${({p}) => p && `padding: ${p}rem;`}

`;

