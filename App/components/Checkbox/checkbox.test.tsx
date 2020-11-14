import React from 'react'
import { themeRender } from '../../config/test-utils'
import Checkbox from './checkbox'

describe('Checkbox component', () => {
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Checkbox checked>abc</Checkbox>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Checked prop assigns correctly', () => {
    const component = themeRender(<Checkbox checked={false}>abc</Checkbox>)
    expect(
      component.getByTestId('sommelier-checkbox').props.checked
    ).toBeFalsy()
  })
})
