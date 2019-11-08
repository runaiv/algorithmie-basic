import { expect } from 'chai'
import LinkedList from '../src/linkedList'

describe(':: linkedList', () => {
  it('pop push elements linked list', () => {
    const list = new LinkedList()
    list.push(10)
    list.push(20)
    expect(list.pop()).equal(20)
    expect(list.pop()).equal(10)
  })

  it('pop shift elements linked list', () => {
    const list = new LinkedList()
    list.push(10)
    list.push(20)
    expect(list.shift()).equal(10)
    expect(list.shift()).equal(20)
  })

  it('pop unshift elements linked list', () => {
    const list = new LinkedList()
    list.unshift(10)
    list.unshift(20)
    expect(list.pop()).equal(10)
    expect(list.pop()).equal(20)
  })

  it('unshift shift elements linked list', () => {
    const list = new LinkedList()
    list.unshift(10)
    list.unshift(20)
    expect(list.shift()).equal(20)
    expect(list.shift()).equal(10)
  })
})
