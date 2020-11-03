import React, { useEffect, useState } from 'react'
import { GestureResponderEvent } from 'react-native'
import FilledFavorite from '../../../assets/images/filledFavorite.svg'
import UnfilledFavorite from '../../../assets/images/unfilledFavorite.svg'
import * as Styled from './switch.styled'
import theme from '../../theme'
import { Props } from './switch.types'

const Switch = ({
  children,
  switchType = 'heart',
  value = false,
  onChange = (): void => {},
  onClick = (): void => {},
  disabled = false,
}: Props) => {
  const [stateValue, setStateValue] = useState(value)

  useEffect(() => {
    onChange(stateValue)
  }, [stateValue])

  const toggleSwitch = (event: GestureResponderEvent) => {
    if (!disabled) {
      setStateValue(!stateValue)
      onClick(value, event)
    }
  }

  return (
    <Styled.SwitchContainer
      onPress={toggleSwitch}
      value={stateValue}
      disabled={disabled}
    >
      {(() => {
        switch (switchType) {
          case theme.switchTypes.heart: {
            if (stateValue) {
              return <FilledFavorite width='25' height='25' />
            }
            return <UnfilledFavorite width='25' height='25' />
          }
          case theme.switchTypes.something: {
            return null // something new
          }
          default: {
            return null
          }
        }
      })()}
    </Styled.SwitchContainer>
  )
}

export default Switch
