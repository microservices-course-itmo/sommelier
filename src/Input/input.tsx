import React, { ReactElement, ReactNode } from 'react'
import * as Styled from './input.styled';
import { SIZE } from '../theme/spacing';


type Props = {
    name?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    prefix?: ReactNode;
    size?: keyof typeof SIZE;
    maxLength?: number;
    value?: string;
    onChange?: (inputValue: string) => void;
    allowClear?: boolean;
}

export const Input = ({ size = SIZE.md, maxLength, value, onChange, allowClear }: Props): ReactElement => (
    <Styled.StyledInput size={size}></Styled.StyledInput >
);
