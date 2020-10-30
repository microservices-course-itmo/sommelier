import styled from 'styled-components/native'

export const CheckboxContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-vertical: 14;
  border-radius: 6;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.primary};
  margin-vertical: 7;
`
