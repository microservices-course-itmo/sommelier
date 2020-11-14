import React from 'react'
import * as Styled from './starsRating.styled'
import FilledStar from '../../../assets/images/FilledStar.svg'
import UnfilledStar from '../../../assets/images/UnfilledStar.svg'

type Props = {
  rating: number
  score?: number
}

const preparedStars = (rating: number) => {
  const stars = []
  for (let i = 1; i <= 5; i += 1) {
    if (i > rating) {
      stars.push(<UnfilledStar width='25' height='25' key={i} />)
    } else {
      stars.push(<FilledStar width='25' height='25' key={i} />)
    }
  }
  return stars
}

const StarsRating = ({ score, rating }: Props) => (
  <Styled.Container data-test='sommelier-stars-rating'>
    <Styled.RatingContainer>
      <Styled.ImageContainer>{preparedStars(rating)}</Styled.ImageContainer>
      {!!score && <Styled.RatingText>{score}</Styled.RatingText>}
    </Styled.RatingContainer>
  </Styled.Container>
)

export default StarsRating
