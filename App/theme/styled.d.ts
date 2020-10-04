import 'styled-components'
import { fonts } from './Fonts/fonts'
import { colors } from './Colors/colors'
import { fontSizes } from './FontSizes/fontSizes'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: typeof fonts
    colors: typeof colors
    fontSizes: typeof fontSizes
  }
}
