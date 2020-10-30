import React from 'react'
import { themeRender } from '../test-utils'
import { SearchInput } from './input'

describe('SearchInput component', () => {
  const mockFn = jest.fn((x) => x + 42)
  it('Component matches snapshot', () => {
    const tree = themeRender(
      <SearchInput editable size='sm' onChange={mockFn} clearButtonMode />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
