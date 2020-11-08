import React from 'react'
import { themeRender } from '../test-utils'
import Checkbox from './checkbox'
import { Text } from '../Typography'

describe('Checkbox component', () => {
  it('Component with only necessary props matches snapshot', () => {
    const tree = themeRender(
      <Checkbox checked>
        <Text>abc</Text>
      </Checkbox>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
