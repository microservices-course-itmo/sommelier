import React from 'react'
import { themeRender } from '../test-utils'
import Box from './box'

describe('Box component', () => {
  it('Component matches snapshot', () => {
    const tree = themeRender(<Box>abc</Box>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  // it('Background color prop assigns correctly', () => {
  //   const { getByText } = themeRender(<Box pt={50}>abc</Box>)
  //   expect(getByText('abc').props.pt).toBe(50)
  // })
})
