import React from 'react'
import { themeRender } from '../../config/test-utils'
import { H1, H2, H3, H4, H5, H6, Text } from './typography'

describe('Typography component', () => {
  describe('Component matches snapshot', () => {
    it('Text renders correctly', () => {
      const component = themeRender(<Text>Abc 123</Text>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H1 renders correctly', () => {
      const component = themeRender(<H1>Abc 123</H1>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H2 renders correctly', () => {
      const component = themeRender(<H2>Abc 123</H2>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H3 renders correctly', () => {
      const component = themeRender(<H3>Abc 123</H3>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H4 renders correctly', () => {
      const component = themeRender(<H4>Abc 123</H4>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H5 renders correctly', () => {
      const component = themeRender(<H5>Abc 123</H5>)
      expect(component.toJSON()).toMatchSnapshot()
    })
    it('H6 renders correctly', () => {
      const component = themeRender(<H6>Abc 123</H6>)
      expect(component.toJSON()).toMatchSnapshot()
    })
  })
  describe('Text props testing', () => {
    it('color prop assigns correctly', () => {
      const component = themeRender(<Text color='lightGray'>abc</Text>)
      expect(component.getByTestId('sommelier-typography').props.color).toBe(
        'lightGray'
      )
    })
    it('bold prop assigns correctly ', () => {
      const component = themeRender(<Text bold>abc</Text>)
      expect(component.getByTestId('sommelier-typography').props.bold).toBe(
        true
      )
    })
    it('italic prop assigns correctly ', () => {
      const component = themeRender(<Text italic>abc</Text>)
      expect(component.getByTestId('sommelier-typography').props.italic).toBe(
        true
      )
    })
    it('size prop assigns correctly ', () => {
      const component = themeRender(<Text size='lg'>abc</Text>)
      expect(component.getByTestId('sommelier-typography').props.size).toBe(
        'lg'
      )
    })
    it('crossed-out prop assigns correctly ', () => {
      const component = themeRender(<Text crossedOut>abc</Text>)
      expect(
        component.getByTestId('sommelier-typography').props.crossedOut
      ).toBe(true)
    })
  })
  describe('Header props testing', () => {
    it('color prop assigns correctly', () => {
      const component = themeRender(<H1 color='lightGray'>abc</H1>)
      expect(component.getByText('abc').props.color).toBe('lightGray')
    })
    it('bold prop assigns correctly ', () => {
      const component = themeRender(<H1 bold>abc</H1>)
      expect(component.getByText('abc').props.bold).toBe(true)
    })
    it('italic prop assigns correctly ', () => {
      const component = themeRender(<H1 italic>abc</H1>)
      expect(component.getByText('abc').props.italic).toBe(true)
    })
    it('crossed-out prop assigns correctly ', () => {
      const component = themeRender(<H1 crossedOut>abc</H1>)
      expect(component.getByText('abc').props.crossedOut).toBe(true)
    })
  })
})
