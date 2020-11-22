import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { BufferView, ThemeDecorator } from '../../config/decorators'
import MenuItem1 from '../../../assets/images/MenuItem1.svg'
import MenuItem2 from '../../../assets/images/MenuItem2.svg'
import MenuItem3 from '../../../assets/images/MenuItem3.svg'
import MenuItem4 from '../../../assets/images/MenuItem4.svg'
import { Navbar, Item } from './navbar'

const defaultNavbar = () => (
  <Navbar>
    <Item onPress={action('tapper-default')} text={text('main', 'Главное')}>
      <MenuItem1 />
    </Item>
    <Item
      onPress={action('tapper-default')}
      text={text('catalog', 'Каталог')}
      icon={<MenuItem2 />}
    />
    <Item
      onPress={action('tapper-default')}
      text={text('favorite', 'Избранное')}
      icon={<MenuItem3 />}
    />
    <Item
      onPress={action('tapper-default')}
      text={text('profile', 'Профиль')}
      icon={<MenuItem4 />}
    />
  </Navbar>
)

const defaultNavItem = () => (
  <Item
    onPress={action('tapper-default')}
    text={text('favorite', 'Избранное')}
    icon={<MenuItem3 />}
  />
)

storiesOf('Navbar', module)
  .addDecorator(BufferView)
  .addDecorator(ThemeDecorator)
  .add('Default navbar', defaultNavbar)
  .add('Default item', defaultNavItem)
