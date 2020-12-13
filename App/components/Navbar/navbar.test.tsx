import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import { Navbar, Item } from './navbar'
import { Text } from '../Typography'

describe('Navigation Bar component', () => {
  const onPressMock = jest.fn()
  const iconMock = 'icon.jpg'
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Navbar>abc</Navbar>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(
      <Navbar>
        <Item onPress={onPressMock} text='abc' icon={iconMock} />
        <Item onPress={onPressMock} text='123' icon={iconMock} />
      </Navbar>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('OnPress function should be called', () => {
    const component = themeRender(
      <Navbar>
        <Item onPress={onPressMock} icon={iconMock} />
      </Navbar>
    )
    const navItem = component.getByTestId('sommelier-nav-item')
    fireEvent.press(navItem)
    expect(onPressMock).toHaveBeenCalled()
  })
  // TODO: Icon and Text testing
  // it('Icon prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Navbar>
  //       <Item onPress={onPressMock} icon={iconMock} />
  //     </Navbar>
  //   )
  //   expect(
  //     component.getByTestId('sommelier-nav-item').children[0].children[0]
  //   ).toBe(iconMock)
  // })
  // it('Text prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Navbar>
  //       <Item onPress={onPressMock} text='abc' icon={iconMock} />
  //     </Navbar>
  //   )
  //   expect(component.getByTestId('sommelier-nav-item').children[1]).toBe(
  //     <Text>abc</Text>
  //   )
  // })
})
