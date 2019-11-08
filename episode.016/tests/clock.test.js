import { expect } from 'chai'
import reverse from '../src/reverse'

describe(':: clock', () => {
  test('reverse cool', () => {
    expect(reverse('cool')).equal('looc')
  })

  test('reverse cool', () => {
    expect(reverse('Super')).equal('repuS')
  })

  test('reverse cool', () => {
    expect(reverse('Make it happen')).equal('neppah ti ekaM')
  })

  test('reverse cool', () => {
    expect(reverse('kayak')).equal('kayak')
  })
})
