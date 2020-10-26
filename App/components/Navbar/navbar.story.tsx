import React from 'react'
import Item from './navItem'
import Navbar from './navbar'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import MenuItem1 from '../../../assets/images/MenuItem1.svg'
import MenuItem2 from '../../../assets/images/MenuItem2.svg'
import MenuItem3 from '../../../assets/images/MenuItem3.svg'
import MenuItem4 from '../../../assets/images/MenuItem4.svg'
import { text } from '@storybook/addon-knobs'

const defaultNavbar = () => (
  <Navbar>
    <Item
      onPress={action('tapper-default')}
      selected={true}
      text={text('main', 'Главное')}
    >
      <MenuItem1 />
    </Item>
    <Item
      onPress={action('tapper-default')}
      selected={false}
      text={text('catalog', 'Каталог')}
    >
      <MenuItem2 />
    </Item>
    <Item
      onPress={action('tapper-default')}
      selected={false}
      text={text('favorite', 'Избранное')}
    >
      <MenuItem3 />
    </Item>
    <Item
      onPress={action('tapper-default')}
      selected={false}
      text={text('profile', 'Профиль')}
    >
      <MenuItem4 />
    </Item>
  </Navbar>
)

storiesOf('Navbar', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default navbar', defaultNavbar)
