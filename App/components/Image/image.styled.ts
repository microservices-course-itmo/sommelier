import styled from 'styled-components/native'

export const ImageContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-vertical: 14;
  border-radius: 6;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.primary};
  margin-vertical: 7;
`

export const ImageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  align-self: center;
  font-size: 20px;
  font-weight: 500;
`
