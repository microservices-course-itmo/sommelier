import React from 'react'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'
import { NativeModules } from 'react-native'
import { loadStories } from './storyLoader'
import url from 'url'

import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  loadStories()
}, module)

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 19002, host: hostname })

export default StorybookUIRoot
