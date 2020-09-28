import styled from 'styled-components';
import { css } from 'styled-components';
import { SIZE } from '../theme/spacing';

export const THEME = {
  size: {
    sm: css`
     font-size: 10px;
     line-height: 12px;
  `,
    md: css`
      font-size: 12px;
      line-height: 14px;
  `,
    lg: css`
      font-size: 14px;
      line-height: 16px;
  `
  }
}

type Props = {
  color: string,
  bold: boolean,
  block: boolean
  size?: keyof typeof SIZE
  crossedOut?: boolean;
};



export const StyledH1 = styled.h1<Props>`
  color: ${({ color }) => color};
  font-size: 32px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledH2 = styled.h2<Props>`
  color: ${({ color }) => color};
  font-size: 24px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledH3 = styled.h3<Props>`
  color: ${({ color }) => color};
  font-size: 18.72px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledH4 = styled.h4<Props>`
  color: ${({ color }) => color};
  font-size: 16px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledH5 = styled.h5<Props>`
  color: ${({ color }) => color};
  font-size: 13.28px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledH6 = styled.h6<Props>`
  color: ${({ color }) => color};
  font-size: 10.72px;
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'}
`;

export const StyledText = styled.span<Props>`
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold ? 900 : 100};
  display: ${({ block }) => block ? 'block' : 'inline'};
  ${({ size }) => !!size && THEME.size[size]};
  text-decoration: ${({ crossedOut }) => crossedOut ? 'line-through' : 'none'};
`;
