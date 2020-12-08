import React from 'react'
import { themeRender } from '../../config/test-utils'
import { StarsRating } from './starsRating'

describe('Stars rating component', () => {
  it('Component renders correctly', () => {
    const tree = themeRender(<StarsRating rating={3.5} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  // it('Rating prop assigns correctly', () => {
  //   const elem = themeRender(<StarsRating rating={10} />)
  //   expect(elem.toJSON().props.rating).toBe(5)
  // })
  // it('Score prop assigns correctly', () => {
  //   const elem = themeRender(<StarsRating rating={3} score={10934} />)
  //   expect(elem.toJSON().props.score).toBe(10934)
  // })
})
