import React from 'react'
import { themeRender } from '../../config/test-utils'
import { Image } from './image'

describe('Image component', () => {
  const imageMock = 'image.jpg'
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(<Image image={imageMock} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(
      <Image image={imageMock} width={900} height={600} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Uri prop assigns correctly', () => {
    const component = themeRender(<Image image={imageMock} />)
    expect(component.getByTestId('sommelier-image').props.source.uri).toBe(
      imageMock
    )
  })
  it('Width prop assigns correctly', () => {
    const component = themeRender(<Image image={imageMock} width={50} />)
    expect(component.getByTestId('sommelier-image').props.width).toBe(50)
  })
  it('Height prop assigns correctly', () => {
    const component = themeRender(
      <Image
        image='https://i.pinimg.com/originals/53/54/81/535481ed597409956a8e1288987a4ae3.jpg'
        height={50}
      />
    )
    expect(component.getByTestId('sommelier-image').props.height).toBe(50)
  })
})
