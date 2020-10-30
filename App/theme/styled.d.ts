import 'styled-components'
import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './Colors'
import { borders } from './borders'
import { fontSizes } from './FontSizes'
import { inputSizes, searchSizes, inputFontSizes } from './inputSearchSizes'

declare module 'styled-components' {
  export interface DefaultTheme {
    headerSizes: typeof headerSizes
    boxSizes: typeof boxSizes
    colors: typeof colors
    fontSizes: typeof fontSizes
    borders: typeof borders
    inputSearchSizes: typeof inputSizes
    searchSizes: typeof searchSizes
    inputSearchFontSizes: typeof inputFontSizes
  }
}
