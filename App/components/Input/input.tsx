import React, { useState, useCallback, useRef } from 'react'
import { TextInput } from 'react-native'
import {
  Container,
  PlaceholderLabel,
  LabeledInput,
  RubleIcon,
} from './input.styled'
import Ruble from '../../../assets/images/ruble.svg'

interface InputProps {
  placeholder: string
}

interface InputReference extends TextInput {
  value: string
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<InputReference>(null)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    if (inputRef.current) setIsFilled(!!inputRef.current.value)
  }, [])

  const handleChangeText = useCallback((text) => {
    if (inputRef.current) inputRef.current.value = text
  }, [])

  return (
    <Container>
      <PlaceholderLabel
        isFocused={isFocused}
        isFilled={isFilled}
        onPress={() => setIsFocused(!isFocused)}
      >
        {placeholder}
      </PlaceholderLabel>
      <LabeledInput
        ref={inputRef}
        keyboardAppearance='dark'
        placeholderTextColor='#DCDCDC'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleChangeText}
        {...rest}
      />
      <RubleIcon>
        <Ruble width='12px' height='21px' />
      </RubleIcon>
    </Container>
  )
}

export default Input
