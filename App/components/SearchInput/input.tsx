import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from 'react-native'
import theme from '../../theme/index'
import * as Styled from './input.styled'
import Search from '../../../assets/images/search.svg'
import Close from '../../../assets/images/close.svg'
import { INPUT_SIZE_KEYS } from '../../theme/inputSearchSizes'

type Props = {
  defaultValue?: string
  placeholder?: string
  editable?: boolean
  size?: keyof typeof theme.inputSearchSizes
  maxLength?: number
  value?: string
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  clearButtonMode?: boolean
}

const SearchInput = ({
  value,
  onChange,
  maxLength,
  placeholder,
  defaultValue,
  clearButtonMode,
  editable = true,
  size = INPUT_SIZE_KEYS.md,
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
              width={theme.inputSearchFontSizes[size]}
              height={theme.inputSearchFontSizes[size]}
            />
          </TouchableOpacity>
        </Styled.ViewClose>
      )}
    </Styled.StyledView>
  )
}

export default SearchInput
