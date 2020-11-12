import React from 'react'
import { storiesOf } from '@storybook/react-native/dist'
import { withKnobs, number, select } from '@storybook/addon-knobs'

import Image from './image'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import { SIZE } from '../../theme/boxSizes'
import { COLOR_KEYS } from '../../theme/colors'

const images = [
  'https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg',
  'https://ca-times.brightspotcdn.com/dims4/default/0557795/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2F0e%2F67795b6727fdeec0cd44074f9473%2Fla-heb-women-alcohol-health-20110906-001',
]

const imageKnobs = () => (
  <Image
    image={select('image', images, images[0])}
    width={number('width', 128)}
    height={number('height', 128)}
    pX={select('padding-x', SIZE, SIZE.xs)}
    pY={select('padding-y', SIZE, SIZE.xs)}
    mX={select('margin-x', SIZE, SIZE.xs)}
    mY={select('margin-y', SIZE, SIZE.xs)}
    borderRadius={number('borderRadius', 0)}
    borderColor={select('color', COLOR_KEYS, COLOR_KEYS.black)}
    backgroundColor={select(
      'backgroundColor',
      COLOR_KEYS,
      COLOR_KEYS.grayBackground
    )}
  />
)

storiesOf('Image', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .addDecorator(withKnobs)
  .add('image knobs', imageKnobs)
