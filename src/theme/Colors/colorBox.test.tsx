import ColorBox from './colorBox'
import renderer from 'react-test-renderer'
import React from 'react'

describe('ColorBox component', () => {
  it('matches the snapshot white', () => {
    const tree = renderer.create(<ColorBox color={'#FFFFFF'} colorName={'white'}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('matches the snapshot black', () => {
    const tree = renderer.create(<ColorBox color={'#000000'} colorName={'black'}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})