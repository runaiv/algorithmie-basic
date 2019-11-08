import { expect } from 'chai'
import differenceOfSquares from '../src/differenceOfSquares'

describe(':: differenceOfSquares', () => {
  it('1 to 10', () => {
    expect(differenceOfSquares(10)).equal(2640)
  })
  it('1 to 15', () => {
    expect(differenceOfSquares(15)).equal(13160)
  })
})
