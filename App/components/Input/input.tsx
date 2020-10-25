import React, { ReactNode } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import theme from '../../theme/index'
import * as Styled from './input.styled'
import search from '../../../assets/images/search.svg'

type Props = {
  defaultValue?: string
  placeholder?: string
  editable: boolean
  size: keyof typeof theme.inputSizes
  maxLength?: number
  value?: string
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  clearButtonMode: keyof typeof theme.clearButtonMode
}

export const Input = (props: Props) => {
  const { size } = props

  return (
    <Styled.StyledView>
      <SvgUri
        width={theme.inputSizes[size]}
        height={theme.inputSizes[size]}
        source={search}
      />
      <Styled.StyledInput {...props} />
    </Styled.StyledView>
  )
}
