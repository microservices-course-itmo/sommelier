import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { borderStyles } from './borderStyles'
import { switchTypes } from './switchTypes'
import {
  inputSearchSizes,
  searchSizes,
  inputSearchFontSizes,
} from './inputSearchSizes'

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
  borderStyles: {
    ...borderStyles,
  },
  switchTypes: {
    ...switchTypes,
  },
  inputSearchSizes: {
    ...inputSearchSizes,
  },
  searchSizes: {
    ...searchSizes,
  },
  inputSearchFontSizes: {
    ...inputSearchFontSizes,
  },
}

export default theme
