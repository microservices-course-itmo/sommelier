import styled from 'styled-components/native'

export const container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ratingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const imageContainer = styled.Image`
  width: 25;
  height: 25;
`

export const ratingText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  font-size: 20px;
  font-weight: 500;
`
