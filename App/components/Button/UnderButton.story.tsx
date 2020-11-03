import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { number, select } from '@storybook/addon-knobs'
import { COLOR_KEYS } from '../../theme/colors/index'

import UnderButton from './underButton'
import { BufferView, ThemeDecorator } from '../../config/decorators'

const defaultUnderButton = () => (
  <UnderButton
    height={number('height', 35)}
    width={number('width', 311)}
    borderRadius={number('border-radius', 10)}
    shadowOpacity={number('shadow-opacity', 4)}
    shadowHeight={number('shadow-height', -4)}
    shadowWidth={number('shadow-width', 0)}
    top={number('top', 0)}
    shadowColor={select('shadow-color', COLOR_KEYS, COLOR_KEYS.shadowButton)}
  />
)

storiesOf('UnderButton', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default button', defaultUnderButton)
