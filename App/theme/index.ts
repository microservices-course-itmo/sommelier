import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { borders } from './borders'
import { switchTypes } from './switchTypes'

const theme = {
  boxSizes: {
    ...boxSizes,
  },
  headerSizes: {
    ...headerSizes,
  },
  colors: {
    ...colors,
  },
  fontSizes: {
    ...fontSizes,
  },
  borders: {
    ...borders,
  },
  switchTypes: {
    ...switchTypes,
  },
}

export default theme
