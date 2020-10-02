import React, { ReactElement, ReactNode } from 'react'
import * as Styled from './typography.styled';
import { SIZE } from '../theme/spacing';


type Props = {
    children: ReactNode;
    color: string;
    bold?: boolean;
    fontWeightText?: number;
    italic: boolean;
    block: boolean;
    size?: keyof typeof SIZE;
    crossedOut?: boolean;
}

export const H1 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH1 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH1>
);

export const H2 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH2 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH2>
);

export const H3 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH3 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH3>
);

export const H4 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH4 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH4>
);

export const H5 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH5 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH5>
);

export const H6 = ({ children, color, bold = false, italic, block }: Props): ReactElement => (
    <Styled.StyledH6 color={color} bold={bold} italic={italic} block={block}>{children}</Styled.StyledH6>
);

export const Text = ({ children, color, fontWeightText = 100, italic, block, size = SIZE.md, crossedOut }: Props): ReactElement => (
    <Styled.StyledText color={color} fontWeightText={fontWeightText} italic={italic} block={block} size={size} crossedOut={crossedOut}>{children}</Styled.StyledText>
);

export const Subtitle = ({ children, color, fontWeightText = 100, italic, block, size = SIZE.md, crossedOut }: Props): ReactElement => (
    <Styled.StyledSubtitle color={color} fontWeightText={fontWeightText} italic={italic} block={block} size={size} crossedOut={crossedOut}>{children}</Styled.StyledSubtitle>
);


