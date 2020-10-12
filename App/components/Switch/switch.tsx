import React, { ReactNode } from 'react'
import * as Styled from './switch.styled'
import SvgUri from 'react-native-svg-uri'
import filledFavorite from '../../../assets/images/filledFavorite.svg'
import unfilledFavorite from '../../../assets/images/unfilledFavorite.svg'

// import FavoriteSvg from './svg/favorite.svg'
export const SwitchTypes = {
  heart: 'heart',
  something: 'something',
}

export type Props = {
  children: ReactNode
  type: keyof typeof SwitchTypes
  value?: boolean
  onChange?: (value: boolean, event: Event) => void
  onClick?: (value: boolean, event: Event) => void
  disabled?: boolean
}

const Switch = ({
  children,
  type,
  value,
  onChange,
  onClick,
  disabled,
}: Props) => (
  <Styled.SwitchContainer
    onChange={onChange}
    onClick={onClick}
    disabled={disabled}
  >
    {(() => {
      switch (type) {
        case SwitchTypes.heart: {
          if (value) {
            ;<SvgUri width='25' height='25' source={filledFavorite} />
          } else {
            ;<SvgUri width='25' height='25' source={unfilledFavorite} />
          }
        }
        case SwitchTypes.something: {
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
