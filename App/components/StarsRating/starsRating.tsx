import React, { ReactNode } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import * as Styled from './starsRating.styled'
import SvgUri from 'react-native-svg-uri'

type Props = {
  children: ReactNode
  score?: number
  rating?: number
}

export const StarsRating = ({
  children = '',
  score = 10000,
  rating = 3,
}: Props) => {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    let path = require('./filledStar.svg')
    if (i > rating && i <= rating + 0.5) {
      path = require('./almostFilledStar.svg')
    } else if (i > rating) {
      path = require('./unfilledStar.svg')
    }
    stars.push(<SvgUri width='25' height='25' source={path} />)
  }
  return (
    <Styled.container>
      <Styled.ratingContainer>
        {stars}
        <Styled.ratingText>({score})</Styled.ratingText>
      </Styled.ratingContainer>
    </Styled.container>
  )
}

export default StarsRating
