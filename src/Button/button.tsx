import React, { ReactElement, MouseEvent, ReactNode } from 'react'
import * as Styled from './button.styled';

type Props = {
  children: ReactNode;
  onClick: (event: MouseEvent) => void;
}

const Button = ({children, onClick}: Props): ReactElement => (
  <Styled.StyledButton onClick={onClick}>{children}</Styled.StyledButton>
);

export default Button;