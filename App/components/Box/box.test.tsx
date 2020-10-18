import React from 'react'
import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Box from './box'
import { H1 } from '../Typography'

const themeRender = (component: any) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Box component', () => {
  it('Component matches snapshot', () => {
    const tree = themeRender(<Box>abc</Box>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Background color prop assigns correctly', () => {
    const { getByText } = themeRender(<Box pt={50}>abc</Box>)
    expect(getByText('abc').props.pt).toBe(50)
  })
})
