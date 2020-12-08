import React from 'react'
import { themeRender } from '../../config/test-utils'
import { StarsRating } from './starsRating'

describe('Stars rating component', () => {
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<StarsRating rating={3.5} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component all props matches snapshot', () => {
    const component = themeRender(<StarsRating rating={4} score={123} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  // TODO: Rating & Score testing
})
