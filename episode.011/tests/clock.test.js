import Clock from '../src/clock'
import { expect } from 'chai'
import cases from 'jest-in-case';

describe(':: clock', (): void => {
  test('on the hour', () => {
    expect(new Clock(8).getTime()).equal('08:00')
  })

  cases('Clock', opts => {
    expect(new Clock(opts.hour, opts.minute).getTime()).equal(opts.time);
  }, [
    { name: '11:09', hour: 11, minute: 9, time: '11:09' },
    { name: '00:00', hour: 24, minute: 0, time: '00:00' },
    { name: '01:00', hour: 25, minute: 0, time: '01:00' },
    { name: '4:00', hour: 100, minute: 0, time: '04:00' },
    { name: '2:00', hour: 1, minute: 60, time: '02:00' },
    { name: '2:40', hour: 0, minute: 160, time: '02:40' },
    { name: '22:20', hour: 1, minute: -160, time: '22:20' }
  ]);

  cases('Clock adding', opts => {
    expect(new Clock(opts.hour, opts.minute).addMinutes(opts.add).getTime()).equal(opts.time);
  }, [
    { name: '11:09', hour: 11, minute: 9, add: 3, time: '11:12' },
    { name: '00:00', hour: 24, minute: 0, add: -3, time: '23:57' },
    { name: '01:00', hour: 25, minute: 0, add: 62, time: '02:02' },
    { name: '4:00', hour: 100, minute: 0, add: -62, time: '02:58' },
  ]);
  
  cases('Clock sub', opts => {
    expect(new Clock(opts.hour, opts.minute).subMinutes(opts.sub).getTime()).equal(opts.time);
  }, [
    { name: '11:09', hour: 11, minute: 9, sub: 3, time: '11:06' },
    { name: '00:00', hour: 24, minute: 0, sub: -3, time: '00:03' },
    { name: '01:00', hour: 25, minute: 0, sub: 62, time: '23:58' },
    { name: '4:00', hour: 100, minute: 0, sub: -62, time: '05:02' },
  ]);

  cases('Clock comparison', opts => {
    expect(new Clock(opts.hour, opts.minute).compareClocks(new Clock(opts.newHour, opts.newMinutes))).equal(opts.bool);
  }, [
    { name: '11:09 True', hour: 11, minute: 9, newHour: 11, newMinutes: 9, bool: true },
    { name: '11:08 False', hour: 11, minute: 9, newHour: 11, newMinutes: 8, bool: false },
    { name: '10:52 True', hour: 10, minute: 52, newHour: 11, newMinutes: -8, bool: true },
    { name: '23:52 True', hour: 11, minute: -8, newHour: 10, newMinutes: 52, bool: true },
    { name: '21:09 True', hour: -3, minute: 9, newHour: 21, newMinutes: 9, bool: true },
  ]);
})
