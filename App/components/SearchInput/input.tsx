import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native'
import SvgUri from 'react-native-svg-uri'
import theme from '../../theme/index'
import * as Styled from './input.styled'
import Search from '../../../assets/images/search.svg'
import Close from '../../../assets/images/close.svg'

type Props = {
  defaultValue?: string
  placeholder?: string
  editable: boolean
  size: keyof typeof theme.inputSizes
  maxLength?: number
  value?: string
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  clearButtonMode: boolean
}

export const SearchInput = ({
  defaultValue,
  placeholder,
  editable,
  size,
  value,
  onChange,
  clearButtonMode,
  maxLength,
}: Props) => {
  const [text, setText] = useState(value)
  return (
    <Styled.StyledView editable={editable}>
      <Search
        width={theme.searchSizes[size]}
        height={theme.searchSizes[size]}
      />
      <Styled.StyledInput
        defaultValue={defaultValue}
        placeholder={placeholder}
        editable={editable}
        size={size}
        value={text}
        onChange={onChange}
        onChangeText={(text) => setText(text)}
        maxLength={maxLength}
      />
      {clearButtonMode && (
        <Styled.ViewClose>
          <TouchableOpacity onPress={() => setText('')}>
            <Close
              width={theme.inputFontSizes[size]}
              height={theme.inputFontSizes[size]}
            />
          </TouchableOpacity>
        </Styled.ViewClose>
      )}
    </Styled.StyledView>
  )
}