import React from 'react'
import { themeRender } from '../../config/test-utils'
import { InputPrice } from './input'

describe('Input Price component', () => {
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<InputPrice />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(<InputPrice placeholder='123' value='123' />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Placeholder prop assigns correctly', () => {
    const component = themeRender(<InputPrice placeholder='123' />)
    expect(
      component.getByTestId('sommelier-input-price-placeholder').children[0]
    ).toBe('123')
  })
  it('Value prop assigns correctly', () => {
    const component = themeRender(<InputPrice value='123' />)
    expect(
      component.getByTestId('sommelier-input-price-label').props.value
    ).toBe('123')
  })
})
