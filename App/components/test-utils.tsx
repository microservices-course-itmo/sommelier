import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

const themeRender = (component: any) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

export * from '@testing-library/react-native'

export { themeRender }
