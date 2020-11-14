import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import Button from './button'

describe('Button component', () => {
  const onPressMock = jest.fn()
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Button onPress={onPressMock}>abc</Button>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('OnPress function should be called', () => {
    const component = themeRender(<Button onPress={onPressMock}>abc</Button>)
    const button = component.getByTestId('sommelier-button')
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })
})
