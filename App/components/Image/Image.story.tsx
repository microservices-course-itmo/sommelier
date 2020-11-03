import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, number, text, select } from '@storybook/addon-knobs'
import theme from '../../theme'

import Image from './image'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultImage = () => (
  <Image
    image={text(
      'image',
      'https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
    )}
    width={number('width', 128)}
    height={number('height', 128)}
    border={text('border', '5px solid white')}
    borderRadius={number('borderRadius', 5)}
  />
)

storiesOf('Image', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('default', defaultImage)
