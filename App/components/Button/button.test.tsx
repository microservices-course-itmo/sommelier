import Button from './button'
import renderer from 'react-test-renderer'
import React from 'react'
import 'react-native'
import { action } from '@storybook/addon-actions'

describe('Button component', () => {
  it('matches the snapshot', () => {
    const snapshot = renderer.create(
      <Button onPress={action('tapper-default')}>Press Me</Button>
    ).toJSON();
    expect(snapshot).toMatchSnapshot()
  })
})
