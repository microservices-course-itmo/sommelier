import 'styled-components'
import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './Colors'
import { borders } from './borders'
import { fontSizes } from './FontSizes'

declare module 'styled-components' {
  export interface DefaultTheme {
    headerSizes: typeof headerSizes
    boxSizes: typeof boxSizes
    colors: typeof colors
    fontSizes: typeof fontSizes
    borders: typeof borders
  }
}
