import { expect, assert } from 'chai'
import triangle from '../src/triangle'

describe(':: triangle', () => {
    it('equilateral triangle', () => {
      expect(triangle(2, 2, 2)).equal('equilateral');
    });
  
    it('isosceles triangle', () => {
      expect(triangle(6, 8, 8)).equal('isosceles');
    });
  
    it('scalene triangle', () => {
      expect(triangle(3, 4, 5)).equal('scalene');
    });
  
    it('small triangles', () => {
      expect(triangle(0.4, 0.6, 0.3)).equal('scalene');
    });
  
    it('impossible triangle', () => {
      let wrapper = function() {
        triangle(0, 0, 0)
      }
      assert.throws(wrapper, '0, 0, 0 is not a triangle')
    });
  
    it('impossible triangle', () => {
      let wrapper = function() {
        triangle(3, 4, -5)
      }
      assert.throws(wrapper, '3, 4, -5 is not a triangle')
    });

    it('impossible triangle', () => {
      let wrapper = function() {
        triangle(0, 0, 0)
      }
      assert.throws(wrapper, '7, 3, 2 is not a triangle')
    });
})
