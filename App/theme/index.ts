import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { borders } from './borders'
import { inputSizes, searchSizes, inputFontSizes } from './inputSearchSizes'

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
  inputSizes: {
    ...inputSizes,
  },
  searchSizes: {
    ...searchSizes,
  },
  inputFontSizes: {
    ...inputFontSizes,
  },
}

export default theme
