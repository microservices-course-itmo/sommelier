import React from 'react'
import Item from './navItem'
import Navbar from './navbar'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import menuItem1 from '../../../assets/images/menuItem1.svg'
import menuItem2 from '../../../assets/images/menuItem2.svg'
import menuItem3 from '../../../assets/images/menuItem3.svg'
import menuItem4 from '../../../assets/images/menuItem4.svg'

const defaultNavbar = () => (
  <Navbar>
    <Item icon={menuItem1} onPress={action('tapper-default')} selected={true} />
    <Item
      icon={menuItem2}
      onPress={action('tapper-default')}
      selected={false}
    />
    <Item
      icon={menuItem3}
      onPress={action('tapper-default')}
      selected={false}
    />
    <Item
      icon={menuItem4}
      onPress={action('tapper-default')}
      selected={false}
    />
  </Navbar>
)

storiesOf('Navbar', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default navbar', defaultNavbar)
