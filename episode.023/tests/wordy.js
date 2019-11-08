import Wordy from '../src/wordy'
import { expect, assert } from 'chai'
import cases from 'jest-in-case'

describe(':: wordy', () => {
  cases(
    'Operations',
    opts => {
      expect(new Wordy(opts.question).response()).equal(opts.nbr)
    },
    [
      { name: 'Test Add n°1', question: 'What is 1 plus 1', nbr: 2 },
      { name: 'Test Add n°2', question: 'What is 50 plus 2', nbr: 52 },
      { name: 'Test Add n°3', question: 'What is -5 plus -30', nbr: -35 },
      { name: 'Test Sub n°1', question: 'What is 3 minus 1', nbr: 2 },
      { name: 'Test Sub n°2', question: 'What is -5 minus 1', nbr: -6 },
      { name: 'Test Sub n°3', question: 'What is -5 minus -1', nbr: -4 },
      { name: 'Test Mul n°1', question: 'What is 3 multiplied 10', nbr: 30 },
      { name: 'Test Mul n°2', question: 'What is -5 multiplied 20', nbr: -100 },
      { name: 'Test Mul n°3', question: 'What is -5 multiplied -15', nbr: 75 },
      { name: 'Test Div n°1', question: 'What is 20 divided 2', nbr: 10 },
      { name: 'Test Div n°2', question: 'What is 55 divided -5', nbr: -11 },
      { name: 'Test Div n°3', question: 'What is -50 divided -5', nbr: 10 },
      {
        name: 'Test Div and Add',
        question: 'What is -50 divided -5 plus 3',
        nbr: 13
      },
      {
        name: 'Test Mult and Sub',
        question: 'What is 10 multiplied 3 minus 5',
        nbr: 25
      },
      {
        name: 'Test Mult and Sub',
        question: 'What is 10 multiplied 3 minus 5',
        nbr: 25
      }
    ]
  )

  test('Non-math questions', () => {
    let wrapper = function() {
      new Wordy('Who am i ?')
    }
    assert.throws(wrapper, 'Non-math questions')
  })

  test('Unsupported operations', () => {
    let wrapper = function() {
      new Wordy('What is 30 cubbed')
    }
    assert.throws(wrapper, 'Unsupported operations')
  })
})
