import React from 'react'
import { action } from '@storybook/addon-actions'

import { ImageUploader, ImageUploaderProps } from '../ImageUploader'


export default {
  title: '🌱 Molecules/ImageUploader',
  component: ImageUploader,
  argTypes: {
    register: {
      control: { type: 'disabled' }
    },
  },
}

export const Basic = (args: ImageUploaderProps) => (
  <ImageUploader
    {...args}
  />
)
