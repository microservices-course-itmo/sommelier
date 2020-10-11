import 'styled-components'
import { fonts } from './Fonts'
import { colors } from './Colors'
import { fontSizes } from './FontSizes'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: typeof fonts
    colors: typeof colors
    fontSizes: typeof fontSizes
  }
}
