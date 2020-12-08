import React, { ReactNode } from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../theme'

const themeRender = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

export * from '@testing-library/react-native'

export { themeRender }
