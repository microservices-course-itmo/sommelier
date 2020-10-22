import React from 'react'
import { themeRender } from '../test-utils'
import StarsRating from './starsRating'

describe('Stars rating component', () => {
  it('Component renders correctly', () => {
    const { debug } = themeRender(<StarsRating rating={3.5} />)
    debug()
  })
  // it('Rating prop assigns correctly', () => {
  //   const { debug } = themeRender(<StarsRating rating={1} />)
  //   debug()
  // })
})
