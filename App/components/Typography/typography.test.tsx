import React from 'react'
import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components'
import { H1, H2, H3, H4, H5, H6, Text } from './typography'
import theme from '../../theme'

const themeRender = (component: any) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe('Typography component', () => {
  describe('Component matches snapshot', () => {
    it('Text renders correctly', () => {
      const tree = themeRender(<Text>Abc 123</Text>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H1 renders correctly', () => {
      const tree = themeRender(<H1>Abc 123</H1>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H2 renders correctly', () => {
      const tree = themeRender(<H2>Abc 123</H2>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H3 renders correctly', () => {
      const tree = themeRender(<H3>Abc 123</H3>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H4 renders correctly', () => {
      const tree = themeRender(<H4>Abc 123</H4>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H5 renders correctly', () => {
      const tree = themeRender(<H5>Abc 123</H5>).toJSON()
      expect(tree).toMatchSnapshot()
    })
    it('H6 renders correctly', () => {
      const tree = themeRender(<H6>Abc 123</H6>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe('Props testing', () => {
    it('color prop assigns correctly', () => {
      const { getByText } = themeRender(<Text color='lightGray'>abc</Text>)
      expect(getByText('abc').props.color).toBe('lightGray')
    })
    it('bold prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text bold>abc</Text>)
      expect(getByText('abc').props.bold).toBe(true)
    })
    it('italic prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text italic>abc</Text>)
      expect(getByText('abc').props.italic).toBe(true)
    })
    it('crossed-out prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text crossedOut>abc</Text>)
      expect(getByText('abc').props.crossedOut).toBe(true)
    })
    it('crossed-out prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text crossedOut>abc</Text>)
      expect(getByText('abc').props.crossedOut).toBe(true)
    })
    it('font-family prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text fontFamily='PtSans'>abc</Text>)
      expect(getByText('abc').props.fontFamily).toBe('PtSans')
    })
    it('size prop assigns correctly ', () => {
      const { getByText } = themeRender(<Text size='lg'>abc</Text>)
      expect(getByText('abc').props.size).toBe('lg')
    })
  })
})
