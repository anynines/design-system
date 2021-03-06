import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { ProductSlider } from '../ProductSlider'

const PRODUCTS = [
  {
    category: 'foobar',
    deliveryDays: 42,
    description: 'Lorem ipsum',
    id: 'foobar',
    imageUrl: 'foobar',
    points: 42,
    tags: 'foobar',
    title: 'foobar'
  },
  {
    category: 'foobar',
    deliveryDays: 42,
    description: 'Lorem ipsum',
    id: 'foobar2',
    imageUrl: 'foobar',
    points: 42,
    tags: 'foobar',
    title: 'foobar'
  },
  {
    category: 'foobar',
    deliveryDays: 42,
    description: 'Lorem ipsum',
    id: 'foobar3',
    imageUrl: 'foobar',
    points: 42,
    tags: 'foobar',
    title: 'foobar'
  }
]

describe('ProductSlider component', () => {
  describe('snapshot', () => {
    it('should match snapshot', () => {
      const component = render(<MemoryRouter><ProductSlider products={PRODUCTS} /></MemoryRouter>)
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
