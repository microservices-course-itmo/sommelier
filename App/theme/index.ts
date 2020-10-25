import { headerSizes } from './headerSizes'
import { boxSizes } from './boxSizes'
import { colors } from './colors'
import { fontSizes } from './fontSizes'
import { borders } from './borders'
import { inputSizes } from './inputSizes'
import { clearButtonMode } from './clearButtonMode/index'

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
  clearButtonMode: {
    ...clearButtonMode,
  },
}

export default theme
