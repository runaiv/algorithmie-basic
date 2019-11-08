import { expect } from 'chai'
import cases from 'jest-in-case'
import secretHandshake from '../src/secretHandshake'

describe(':: secretHandshake', () => {
  cases(
    'Simple cases',
    opts => {
      expect(secretHandshake(opts.code)).eql(opts.handshake)
    },
    [
      { name: 'wink', code: 1, handshake: ['wink'] },
      { name: 'double blink', code: 2, handshake: ['double blink'] },
      { name: 'close your eyes', code: 4, handshake: ['close your eyes'] },
      { name: 'jump', code: 8, handshake: ['jump'] }
    ]
  )

  it('secretHandshake(3)', () => {
    expect(secretHandshake(3)).eql(['wink', 'double blink'])
  })

  it('secretHandshake(19)', () => {
    expect(secretHandshake(19)).eql(['double blink', 'wink'])
  })

  it('all actions reversed', () => {
    expect(secretHandshake(31)).eql([
      'jump',
      'close your eyes',
      'double blink',
      'wink'
    ])
  })
})
