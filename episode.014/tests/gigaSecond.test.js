import { expect } from 'chai'
import gigaSecond from '../src/gigaSecond'

describe('Gigasecond', function () {
    test('tells a gigasecond since the year 2000', () => {
      expect(gigaSecond(new Date(Date.UTC(2000, 1, 1)))).eql(new Date(Date.UTC(2031, 9, 10, 1, 46, 40)));
    });
  
    test('A gigasecond after my birthday', () => {
      expect(gigaSecond(new Date(Date.UTC(1997, 22, 3, 14, 3, 59)))).eql(new Date(Date.UTC(2030, 6, 12, 15, 50, 39)));
    });
});