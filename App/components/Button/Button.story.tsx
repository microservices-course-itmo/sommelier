import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { number, text, select } from '@storybook/addon-knobs'
import * as Styled from './button.styled'
import { FONT_SIZE_KEYS } from '../../theme/fontSizes/index'
import { COLOR_KEYS } from '../../theme/colors/index'

import Button from './button'
import UnderscoreButton from './underButton'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import ButtonIcon from '../../../assets/images/ButtonIcon.svg'

const defaultButton = () => (
  <Styled.Wrapper>
    <Button
      onPress={action('tapper-default')}
      height={number('height', 51)}
      width={number('width', 327)}
      borderRadius={number('border-radius', 4)}
      text={text('text', 'Применить')}
      fontSize={select('font-size', FONT_SIZE_KEYS, FONT_SIZE_KEYS.hg)}
      color={select('text color', COLOR_KEYS, COLOR_KEYS.white)}
      iconHeight={number('icon height', 16)}
      iconWidth={number('icon width', 16)}
      icon={<ButtonIcon />}
    />
    <UnderscoreButton
      height={number('height 2', 35)}
      width={number('width 2', 311)}
      borderRadius={number('border-radius 2', 10)}
      shadowOpacity={number('shadow-opacity', 4)}
      shadowHeight={number('shadow-height', 4)}
      shadowWidth={number('shadow-width', 0)}
      top={number('top', 21)}
      shadowColor={select('shadow-color', COLOR_KEYS, COLOR_KEYS.shadowButton)}
    />
  </Styled.Wrapper>
)

storiesOf('Button', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default button', defaultButton)
