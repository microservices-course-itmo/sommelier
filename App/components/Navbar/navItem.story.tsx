import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Item from './navItem'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import MenuItem3 from '../../../assets/images/MenuItem3.svg'

const defaultNavItem = () => (
  <Item
    onPress={action('tapper-default')}
    text={text('favorite', 'Избранное')}
    selected={true}
  >
    <MenuItem3 />
  </Item>
)

storiesOf('NavItem', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default item', defaultNavItem)
