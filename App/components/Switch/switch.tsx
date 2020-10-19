import React, { ReactNode } from 'react'
import SvgUri from 'react-native-svg-uri'
import filledFavorite from '../../../assets/images/filledFavorite.svg'
import unfilledFavorite from '../../../assets/images/unfilledFavorite.svg'
import * as Styled from './switch.styled'
import { Props } from './switch.types'

const Switch = ({
  children,
  type = 'heart',
  value = false,
  onChange = (): void => {},
  onClick = (): void => {},
  disabled = false,
}: Props) => (
  <Styled.SwitchContainer
    onChange={onChange}
    onClick={disabled ? (): void => {} : onClick}
    disabled={disabled}
  >
    {(() => {
      switch (type) {
        case 'heart': {
          if (value) {
            return <SvgUri width='25' height='25' source={filledFavorite} />
          }
          return <SvgUri width='25' height='25' source={unfilledFavorite} />
        }
        case 'something': {
          return null // something new
        }
        default: {
          return null
        }
      }
    })()}
  </Styled.SwitchContainer>
)

export default Switch
