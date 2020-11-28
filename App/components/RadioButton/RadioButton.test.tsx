import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import RadioButton from './RadioButton'
import { Text } from '../Typography'

describe('RadioButton component', () => {
  const mockFn = jest.fn()
  it('Component with only necessary props matches snapshot', () => {
    const tree = themeRender(<RadioButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const tree = themeRender(
      <RadioButton checked={false}>
        <Text>abc</Text>
      </RadioButton>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Checked prop assigns correctly', () => {
    const elem = themeRender(<RadioButton checked={false} />)
    expect(elem.toJSON().children[1].props.checked).toBeFalsy()
  })
  // TODO: New functionality
  // it('onPress function should be called when pressing', () => {
  //   const elem = themeRender(<RadioButton onPress={mockFn} />)
  //   fireEvent.press()
  //   expect(mockFn).toHaveBeenCalled()
  // })
})
