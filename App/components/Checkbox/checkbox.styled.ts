import styled from 'styled-components/native'

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const CheckboxText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  align-self: auto;
  font-size: 20px;
  font-weight: 500;
  margin-left: 40px;
`
