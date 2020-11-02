import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { borders } from './borders'
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
  borders: {
    ...borders,
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
