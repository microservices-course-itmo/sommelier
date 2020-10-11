import React, { ReactNode } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import * as Styled from './starsRating.styled'
import SvgUri from 'react-native-svg-uri'

type Props = {
  children: ReactNode
  score?: number
  rating?: number
}

const preparedStars = (rating) => {
  let stars = []
  for (let i = 1; i <= 5; i++) {
    let path = require('../../../assets/images/filledStar.svg')
    if (i > rating) {
      path = require('../../../assets/images/unfilledStar.svg')
    }
    stars.push(<SvgUri width='25' height='25' source={path} />)
  }
  return stars
}

export const StarsRating = ({ children = '', score, rating }: Props) => (
  <Styled.container>
    <Styled.ratingContainer>
      <Styled.imageContainer>{preparedStars(rating)}</Styled.imageContainer>
      <Styled.ratingText>{score ? '(' + score + ')' : ''}</Styled.ratingText>
    </Styled.ratingContainer>
  </Styled.container>
)

export default StarsRating
