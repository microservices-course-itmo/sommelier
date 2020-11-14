import React from 'react'
import { themeRender } from '../../config/test-utils'
import Box from './box'

describe('Box component', () => {
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Box>abc</Box>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(
      <Box
        pX='xs'
        pY='s'
        mX='m'
        mY='l'
        backgroundColor='dark'
        borderColor='white'
        borderRadius={5}
      >
        abc
      </Box>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Padding X prop assigns correctly', () => {
    const component = themeRender(<Box pX='xl'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.pX).toBe('xl')
  })
  it('Padding Y prop assigns correctly', () => {
    const component = themeRender(<Box pY='xl'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.pY).toBe('xl')
  })
  it('Margin X prop assigns correctly', () => {
    const component = themeRender(<Box mX='xl'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.mX).toBe('xl')
  })
  it('Margin Y prop assigns correctly', () => {
    const component = themeRender(<Box mY='xl'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.mY).toBe('xl')
  })
  it('Background color prop assigns correctly', () => {
    const component = themeRender(<Box backgroundColor='white'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.backgroundColor).toBe(
      'white'
    )
  })

  it('Border color prop assigns correctly', () => {
    const component = themeRender(<Box borderColor='white'>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.borderColor).toBe(
      'white'
    )
  })
  it('Border radius prop assigns correctly', () => {
    const component = themeRender(<Box borderRadius={5}>abc</Box>)
    expect(component.getByTestId('sommelier-box').props.borderRadius).toBe(5)
  })
})
