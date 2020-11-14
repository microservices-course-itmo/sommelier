import React, { useEffect, useState } from 'react'
import FilledFavorite from '../../../assets/images/filledFavorite.svg'
import UnfilledFavorite from '../../../assets/images/unfilledFavorite.svg'
import CheckMark from '../../../assets/images/checkMark.svg'
import * as Styled from './switch.styled'
import theme from '../../theme'
import { Props } from './switch.types'

const Switch = ({
  switchType = 'default',
  value = false,
  onChange = (): void => {},
  disabled = false,
}: Props) => {
  const [stateValue, setStateValue] = useState(value)

  useEffect(() => {
    onChange(stateValue)
  }, [stateValue])

  const toggleSwitch = () => {
    if (!disabled) {
      setStateValue(!stateValue)
    }
  }

  return (
    <Styled.SwitchContainer
      onPress={toggleSwitch}
      value={stateValue}
      disabled={disabled}
      testID='sommelier-switch'
    >
      {(() => {
        switch (switchType) {
          case theme.switchTypes.heart: {
            if (stateValue) {
              return <FilledFavorite width='25' height='25' />
            }
            return <UnfilledFavorite width='25' height='25' />
          }
          case theme.switchTypes.default: {
            return (
              <Styled.Toggle value={stateValue}>
                <Styled.Notch value={stateValue}>
                  {stateValue && (
                    <Styled.Mark>
                      <CheckMark />
                    </Styled.Mark>
                  )}
                </Styled.Notch>
              </Styled.Toggle>
            )
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
