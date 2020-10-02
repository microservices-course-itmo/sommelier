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
    name?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    size?: keyof typeof SIZE;
    maxLength?: number;
    value?: string;
    onChange?: (inputValue: string) => void;
    allowClear?: boolean;
};


export const StyledInput = styled.input.attrs(({ size }): any => ({
    // 定义静态属性
    type: "password",

    // 定义动态属性
    margin: size || "1em",
    padding: size || "1em"
}))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* 动态计算属性 */
    margin: ${props => props.margin};
    padding: ${props => props.padding};
  `;