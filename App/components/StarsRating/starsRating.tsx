import React from 'react'
import SvgUri from 'react-native-svg-uri'
import * as Styled from './starsRating.styled'
import filledStar from '../../../assets/images/filledStar.svg'
import unfilledStar from '../../../assets/images/unfilledStar.svg'

type Props = {
  rating: number
  score?: number
}

const preparedStars = (rating: number) => {
  const stars = []
  for (let i = 1; i <= 5; i += 1) {
    if (i > rating) {
      stars.push(<SvgUri width='25' height='25' source={unfilledStar} />)
    } else {
      stars.push(<SvgUri width='25' height='25' source={filledStar} />)
    }
  }
  return stars
}

const StarsRating = ({ score, rating }: Props) => (
  <Styled.Container>
    <Styled.RatingContainer>
      <Styled.ImageContainer>{preparedStars(rating)}</Styled.ImageContainer>
      {!!score && <Styled.RatingText>{score}</Styled.RatingText>}
    </Styled.RatingContainer>
  </Styled.Container>
)

export default StarsRating
