import { Button } from './button'
import renderer from 'react-test-renderer'
import React from 'react'

describe('Button component', () => {
  it('matches the snapshot', () => {
    const snapshot = renderer.create(<Button />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
