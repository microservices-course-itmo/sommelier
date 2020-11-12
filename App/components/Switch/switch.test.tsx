import React from 'react'
import { themeRender } from '../../config/test-utils'
import Switch from './switch'
import { Text } from '../Typography'

describe('Switch component', () => {
  const mockFn = jest.fn()
  it('Component with only necessary props matches snapshot', () => {
    const tree = themeRender(<Switch />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const tree = themeRender(
      <Switch
        switchType='heart'
        value
        onChange={mockFn}
        onClick={mockFn}
        disabled
      >
        <Text>abc</Text>
      </Switch>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  // it('SwitchType prop assigns correctly', () => {
  //   const elem = themeRender(<Switch switchType='heart' />).toJSON()
  //   fireEvent.press(elem)
  //   expect(mockFn).toHaveBeenCalled()
  // })
})
