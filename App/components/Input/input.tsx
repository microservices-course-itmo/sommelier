import React, { useState, useCallback } from 'react'
import { TextInput } from 'react-native'

import * as Styled from './input.styled'

import Ruble from '../../../assets/images/ruble.svg'

type Props = {
  placeholder?: string
  value?: string
}

const InputPrice = ({ placeholder, value = '' }: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState(value)

  const inputRef = React.createRef<TextInput>()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [setIsFocused])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [setIsFocused])

  const toggleFocus = useCallback(() => {
    setIsFocused(!isFocused)
  }, [isFocused, setIsFocused])

  const textInput = useCallback(
    (text) => {
      setText(text)
    },
    [text, setText]
  )

  const isInputEmpty = text !== ''

  return (
    <Styled.StyledContainer>
      <Styled.StyledPlaceholderLabel
        isFocused={isFocused}
        isFilled={isInputEmpty}
        onPress={toggleFocus}
      >
        {placeholder}
      </Styled.StyledPlaceholderLabel>
      <Styled.StyledLabeledInput
        keyboardType='numeric'
        placeholderTextColor='#DCDCDC'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={textInput}
        value={text}
        ref={inputRef}
        data-test='sommelier-input-price'
      />
      <Styled.StyledRubleIcon>
        <Ruble width='12px' height='21px' />
      </Styled.StyledRubleIcon>
    </Styled.StyledContainer>
  )
}

export default InputPrice
