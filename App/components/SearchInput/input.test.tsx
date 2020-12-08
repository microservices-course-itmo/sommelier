import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import SearchInput from './input'
import theme from '../../theme'

describe('SearchInput component', () => {
  const onChangeMock = jest.fn()
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<SearchInput onChange={onChangeMock} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component all props matches snapshot', () => {
    const component = themeRender(
      <SearchInput
        onChange={onChangeMock}
        defaultValue='abc'
        placeholder='123'
        editable
        size='lg'
        maxLength={30}
        value='987'
        clearButtonMode
      />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Default value prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} defaultValue='abc' />
    )
    expect(
      component.getByTestId('sommelier-search-input').props.defaultValue
    ).toBe('abc')
  })
  it('Placeholder prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} placeholder='abc' />
    )
    expect(
      component.getByTestId('sommelier-search-input').props.placeholder
    ).toBe('abc')
  })
  it('Editable prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} editable={false} />
    )
    expect(
      component.getByTestId('sommelier-search-input').props.editable
    ).toBeFalsy()
  })
  it('Size prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} size='md' clearButtonMode />
    )
    const searchSVG = component.getByTestId('sommelier-search-input-search-svg')
    const searchInput = component.getByTestId('sommelier-search-input')
    const closeSVG = component.getByTestId('sommelier-search-input-close-svg')
    expect(searchSVG.props.height).toBe(theme.searchSizes.md)
    expect(searchSVG.props.width).toBe(theme.searchSizes.md)
    expect(searchInput.props.size).toBe('md')
    expect(closeSVG.props.height).toBe(theme.inputSearchFontSizes.md)
    expect(closeSVG.props.height).toBe(theme.inputSearchFontSizes.md)
  })
  it('Value prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} value='123' />
    )
    expect(component.getByTestId('sommelier-search-input').props.value).toBe(
      '123'
    )
  })
  // TODO: OnChange testing
  // it('OnChange function should be called', () => {
  //   const component = themeRender(<SearchInput onChange={onChangeMock} />)
  //   const searchInput = component.getByTestId('sommelier-search-input')
  //   fireEvent.changeText(searchInput, '123')
  //   expect(onChangeMock).toHaveBeenCalled()
  // })
  it('Max length prop assigns correctly', () => {
    const component = themeRender(
      <SearchInput onChange={onChangeMock} maxLength={15} />
    )
    expect(
      component.getByTestId('sommelier-search-input').props.maxLength
    ).toBe(15)
  })
  it('Clear button mode works correctly', () => {
    const elem = themeRender(
      <SearchInput onChange={onChangeMock} clearButtonMode />
    )
    fireEvent.press(elem.getByTestId('sommelier-search-input-clear-button'))
    expect(elem.getByTestId('sommelier-search-input').props.value).toBe('')
  })
})
