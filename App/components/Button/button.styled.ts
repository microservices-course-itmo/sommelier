import styled from 'styled-components/native'
import theme from '../../theme'

type ButtonProps = {
  width?: number
  borderRadius?: number
  height?: number
}

type UnderButtonProps = {
  width?: number
  height?: number
  borderRadius?: number
  shadowWidth?: number
  shadowHeight?: number
  shadowOpacity?: number
  top?: number
  shadowColor?: keyof typeof theme.colors
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primaryRed};
  border-radius: ${({ borderRadius }) => borderRadius || 0};
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};
  z-index: 2;
`

export const UnderButtonContainer = styled.View<UnderButtonProps>`
    position: absolute;
    left: 5;
    top: ${({ top }) => top || 0};
    background-color: ${({ theme }) => theme.colors.primaryDarkRed};
    border-radius: ${({ borderRadius }) => borderRadius || 0};
    width: ${({ width }) => width || 0};
    height: ${({ height }) => height || 0};
    shadow-offset: { 
        width: ${({ shadowWidth }) => shadowWidth || 0}, 
        height: ${({ shadowHeight }) => shadowHeight || 0} 
    };
    shadow-opacity: ${({ shadowOpacity }) => shadowOpacity || 0};
    shadow-color: ${({ theme }) => theme.colors.shadowButton};   
    z-index: 1;
`
/*${({shadowWidth}) => shadowWidth || 0}*/
/*${({shadowHeight}) => shadowHeight || 0}*/

export const ButtonTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  align-self: center;
  font-weight: 500;
`

export const Wrapper = styled.View<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  width: ${({ width }) => width || 0};
  height: ${({ height }) => height || 0};
`
