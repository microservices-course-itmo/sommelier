import { css } from 'styled-components/native'

export const headerSizes = {
  h6: css`
    font-size: 12px;
    line-height: 20px;
  `,
  h5: css`
    font-size: 16px;
    line-height: 20px;
  `,
  h4: css`
    font-size: 20px;
    line-height: 24px;
  `,
  h3: css`
    font-size: 24px;
    line-height: 24px;
  `,
  h2: css`
    font-size: 30px;
    line-height: 32px;
  `,
  h1: css`
    font-size: 38px;
    line-height: 40px;
  `,
}

export const HEADER_SIZES_KEYS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const
