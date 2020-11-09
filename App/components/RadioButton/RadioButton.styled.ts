import styled from 'styled-components/native'

export const RadioButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const RadioButtonText = styled.Text`
  color: black;
`

export const RadioButtonViewUnfilled = styled.View`
  height: 20
  width: 20
  borderRadius: 10
  borderWidth: 1
  borderColor: #757575
  alignItems: center
  justifyContent: center
  marginRight: 40
`

export const RadioButtonViewFilled = styled.View`
  width: 20
  height: 20
  borderRadius: 10
  borderColor: #A22841
  backgroundColor: #A22841
  alignItems: center
  justifyContent: center
  marginRight: 40
`
