import React from 'react'
import { themeRender } from '../../config/test-utils'
import Image from './image'

describe('Image component', () => {
  it('Component matches snapshot', () => {
    const tree = themeRender(
      <Image image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg' />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Width prop assigns correctly', () => {
    const elem = themeRender(
      <Image
        image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
        width={50}
      />
    )
    expect(elem.toJSON().children[0].props.width).toBe(50)
  })
  it('Height prop assigns correctly', () => {
    const elem = themeRender(
      <Image
        image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
        height={50}
      />
    )
    expect(elem.toJSON().children[0].props.height).toBe(50)
  })
  it('Border prop assigns correctly', () => {
    const elem = themeRender(
      <Image
        image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
        border='solid'
      />
    )
    expect(elem.toJSON().children[0].props.border).toBe('solid')
  })
  it('Border radius prop assigns correctly', () => {
    const elem = themeRender(
      <Image
        image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
        borderRadius={5}
      />
    )
    expect(elem.toJSON().props.borderRadius).toBe(5)
  })
})
