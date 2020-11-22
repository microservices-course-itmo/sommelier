import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { themeRender } from '../../config/test-utils'
import SearchInput from './input'

describe('SearchInput component', () => {
  const mockFn = jest.fn((x) => x + 42)
  it('Component matches snapshot', () => {
    const tree = themeRender(
      <SearchInput editable size='sm' onChange={mockFn} clearButtonMode />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('default value prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        defaultValue='abc'
        editable
        size='sm'
        onChange={mockFn}
        clearButtonMode
      />
    )
    expect(elem.toJSON().children[1].props.defaultValue).toBe('abc')
  })
  it('placeholder prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        placeholder='abc'
        editable
        size='sm'
        onChange={mockFn}
        clearButtonMode
      />
    )
    expect(elem.toJSON().children[1].props.placeholder).toBe('abc')
  })
  it('ediatable prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        editable={false}
        size='sm'
        onChange={mockFn}
        clearButtonMode
      />
    )
    expect(elem.toJSON().children[1].props.editable).toBeFalsy()
  })
  it('size prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput editable size='lg' onChange={mockFn} clearButtonMode />
    )
    expect(elem.toJSON().children[1].props.size).toBe('lg')
  })
  it('max length prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        editable
        size='sm'
        maxLength={20}
        onChange={mockFn}
        clearButtonMode
      />
    )
    expect(elem.toJSON().children[1].props.maxLength).toBe(20)
  })
  it('value prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        editable
        size='sm'
        value='abc'
        onChange={mockFn}
        clearButtonMode
      />
    )
    expect(elem.toJSON().children[1].props.value).toBe('abc')
  })
  it('clear button mode prop assigns correctly', () => {
    const elem = themeRender(
      <SearchInput
        editable
        size='sm'
        onChange={mockFn}
        clearButtonMode={false}
      />
    )
    expect(elem.toJSON().children[1].props.clearButtonMode).toBeFalsy()
  })
  // OnChange()
})
