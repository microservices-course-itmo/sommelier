import React from 'react'
import { themeRender } from '../../config/test-utils'
import Box from './box'

describe('Box component', () => {
  it('Component matches snapshot', () => {
    const tree = themeRender(<Box>abc</Box>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Background color prop assigns correctly', () => {
    const elem = themeRender(<Box backgroundColor='white'>abc</Box>)
    expect(elem.toJSON().props.backgroundColor).toBe('white')
  })
  it('Padding X prop assigns correctly', () => {
    const elem = themeRender(<Box pX='s'>abc</Box>)
    expect(elem.toJSON().props.pX).toBe('s')
  })
  it('Padding Y prop assigns correctly', () => {
    const elem = themeRender(<Box pY='s'>abc</Box>)
    expect(elem.toJSON().props.pY).toBe('s')
  })
  it('Margin X prop assigns correctly', () => {
    const elem = themeRender(<Box mX='s'>abc</Box>)
    expect(elem.toJSON().props.mX).toBe('s')
  })
  it('Margin Y prop assigns correctly', () => {
    const elem = themeRender(<Box mY='s'>abc</Box>)
    expect(elem.toJSON().props.mY).toBe('s')
  })
  it('Border color prop assigns correctly', () => {
    const elem = themeRender(<Box borderColor='white'>abc</Box>)
    expect(elem.toJSON().props.borderColor).toBe('white')
  })
  it('Border radius prop assigns correctly', () => {
    const elem = themeRender(<Box borderRadius={5}>abc</Box>)
    expect(elem.toJSON().props.borderRadius).toBe(5)
  })
  it('Background color prop assigns correctly', () => {
    const elem = themeRender(<Box backgroundColor='white'>abc</Box>)
    expect(elem.toJSON().props.backgroundColor).toBe('white')
  })
})
