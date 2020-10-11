import { render } from '@testing-library/react-native'
import React from 'react'

import { H1, H2, H3, H4, H5, H6, Text } from './typography'
import theme from '../../theme'

const defaultProps = {
  fontFamily: theme.fonts.PtSans
}

describe("Typography component", () => {
  describe("Component matches snapshot", () => {
    it("Text renders correctly", () => {
      const tree = render(<Text {...defaultProps}>abc 123</Text>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H1 renders correctly", () => {
      const tree = render(<H1 {...defaultProps}>abc 123</H1>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H2 renders correctly", () => {
      const tree = render(<H2 {...defaultProps}>abc 123</H2>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H3 renders correctly", () => {
      const tree = render(<H3 {...defaultProps}>abc 123</H3>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H4 renders correctly", () => {
      const tree = render(<H4 {...defaultProps}>abc 123</H4>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H5 renders correctly", () => {
      const tree = render(<H5 {...defaultProps}>abc 123</H5>).toJSON();
      expect(tree).toMatchSnapshot();
    })
    it("H6 renders correctly", () => {
      const tree = render(<H6 {...defaultProps}>abc 123</H6>).toJSON();
      expect(tree).toMatchSnapshot();
    })
  })
})