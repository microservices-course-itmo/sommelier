import React from 'react'
import { themeRender, fireEvent } from '../../config/test-utils'
import Button from './button'
import icon from '../../../assets/images/ButtonIcon.svg'

describe('Button component', () => {
  const onPressMock = jest.fn()
  const iconMock = icon
  it('Component with only necessary props matches snapshot', () => {
    const component = themeRender(
      <Button onPress={onPressMock} text='abc' icon={iconMock} />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Component with all props matches snapshot', () => {
    const component = themeRender(
      <Button
        onPress={onPressMock}
        text='abc'
        icon={iconMock}
        width={200}
        borderRadius={5}
        height={100}
        fontSize='md'
        color='white'
        iconHeight={25}
        iconWidth={25}
      />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('OnPress function should be called', () => {
    const component = themeRender(
      <Button onPress={onPressMock} text='abc' icon={iconMock} />
    )
    fireEvent.press(component.getByTestId('sommelier-button'))
    expect(onPressMock).toHaveBeenCalled()
  })
  // it('Width prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Button onPress={onPressMock} text='abc' icon={iconMock} width={500} />
  //   )
  //   expect(component.getByTestId('sommelier-button').props.width).toBe(500)
  // })
  // it('BorderRadius prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Button
  //       onPress={onPressMock}
  //       text='abc'
  //       icon={iconMock}
  //       borderRadius={3}
  //     />
  //   )
  //   expect(component.getByTestId('sommelier-button').props.borderRadius).toBe(3)
  // })
  // it('Height prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Button onPress={onPressMock} text='abc' icon={iconMock} height={178} />
  //   )
  //   expect(component.getByTestId('sommelier-button').props.height).toBe(178)
  // })
  // TODO: Fix this
  // it('Text prop assigns correctly', () => {
  //   const component = themeRender(
  //     <Button onPress={onPressMock} text='abc' icon={iconMock} />
  //   )
  //   expect(
  //     component.getByTestId('sommelier-button-textContainer').children[0].text
  //   ).toBe('abc')
  // })
  it('Color prop assigns correctly', () => {
    const component = themeRender(
      <Button onPress={onPressMock} text='abc' icon={iconMock} color='dark' />
    )
    expect(
      component.getByTestId('sommelier-button-textContainer').children[0].props
        .color
    ).toBe('dark')
  })
  it('FontSize prop assigns correctly', () => {
    const component = themeRender(
      <Button onPress={onPressMock} text='abc' icon={iconMock} fontSize='lg' />
    )
    expect(
      component.getByTestId('sommelier-button-textContainer').children[0].props
        .size
    ).toBe('lg')
  })
  // TODO: icon testing
})
