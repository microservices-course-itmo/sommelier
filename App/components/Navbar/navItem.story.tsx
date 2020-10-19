import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Item from './navItem'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import menuItem1 from '../../../assets/images/menuItem1.svg'

const defaultNavItem = () => (
  <Item icon={menuItem1} onPress={action('tapper-default')} />
)

storiesOf('NavItem', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default item', defaultNavItem)
