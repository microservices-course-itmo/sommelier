import ColorBox from './colorBox'
import renderer from 'react-test-renderer'
import React from 'react'

describe('ColorBox component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ColorBox color={'#FFFFFF'} colorName={'white'}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})