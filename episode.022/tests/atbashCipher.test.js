import AtBash from '../src/atbashCipher'
import { expect } from 'chai'
import cases from 'jest-in-case'

describe(':: atbashCipher', () => {
  cases(
    'Encode',
    opts => {
      expect(new AtBash().encode(opts.encode)).equal(opts.decode)
    },
    [
      { encode: 'yes', decode: 'bvh' },
      { encode: 'NO', decode: 'ml' },
      { encode: 'H E L L O', decode: 'svool' },
      {
        encode: 'thequickbrownfoxjumpsoverthelazydog',
        decode: 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt'
      }
    ]
  )

  cases(
    'Decode',
    opts => {
      expect(new AtBash().decode(opts.decode)).equal(opts.encode)
    },
    [
      { encode: 'yes', decode: 'bvh' },
      { encode: 'no', decode: 'ml' },
      { encode: 'hello', decode: 'svool' },
      {
        encode: 'thequickbrownfoxjumpsoverthelazydog',
        decode: 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt'
      }
    ]
  )
})
