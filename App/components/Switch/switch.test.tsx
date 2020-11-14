import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import Switch from './switch'

describe('Switch component', () => {
  const onChangeMock = jest.fn()
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Switch />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(
      <Switch switchType='heart' value onChange={onChangeMock} disabled />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  // TODO: Switch type prop assings correctly
  // it('Switch type prop assings correctly', () => {
  //   const component = themeRender(<Switch switchType='heart' />)
  //   expect(component.getByTestId('sommelier-switch').
  // })
  it('Value prop assings correctly', () => {
    const component = themeRender(<Switch value />)
    expect(component.getByTestId('sommelier-switch').props.value).toBeTruthy()
  })
  // TODO: figure out why this doesn't work
  it('Disabled prop assings correctly', () => {
    const component = themeRender(<Switch disabled />)
    expect(
      component.getByTestId('sommelier-switch').props.disabled
    ).toBeTruthy()
  })
  it('OnChange function should be called', () => {
    const component = themeRender(<Switch onChange={onChangeMock} />)
    fireEvent.press(component.getByTestId('sommelier-switch'))
    expect(onChangeMock).toHaveBeenCalled()
  })
})
