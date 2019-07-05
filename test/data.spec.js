//global.window = global;
//global.assert = require('chai').assert;
require('../src/data.js');


//describe('allCharacters', () => {
//it('is a function', () => {
//    expect(typeof example).toBe('object');
//  });

//  it('returns `example`', () => {
//    expect(example.example()).toBe('example');
//  });
//});

//describe('filtrado', () => {
  //it('is a function', () => {
    //expect(typeof example.filtrado).toBe('function');
  //});

  //it('returns `filtrado`', () => {
    //expect(example.filtrado()).toBe('filtrado');
  //});
//});
describe('orderAz()', () => {

  it('debería devolver true para letra a', () => {
  });
  it('debería devolver false para letra z', () => {
  });
describe('orderZa()', () => {

  it('debería devolver true para letra z', () => {
  });
  it('debería devolver false para letra a', () => {
  });
});
describe('filterAlive()', () => {

  it('debería devolver true para letra "Alive"', () => {
  });
  it('debería devolver false para letra "Dead"', () => {
  });
  it('debería devolver false para letra "unknown"', () => {
  });
});
describe('filterDead()', () => {

  it('debería devolver true para letra "Dead"', () => {
  });
  it('debería devolver false para letra "Alive"', () => {
  });
  it('debería devolver false para letra "unknown"', () => {
  });
});
describe('filterUnknown()', () => {

  it('debería devolver true para letra "unknown"', () => {
  });
  it('debería devolver false para letra "Alive"', () => {
  });
  it('debería devolver false para letra "Dead"', () => {
  });
});
describe('computeStatsAll()', () => {

  it('debería devolver true para letra "Alive","Dead","unknown"', () => {
  });
});
describe('computeStatsAlive()', () => {

  it('debería devolver true para letra "Alive"', () => {
  });
  it('debería devolver false para letra "Dead"', () => {
  });
  it('debería devolver false para letra "unknown"', () => {
  });
});
describe('computeStatsDead()', () => {

  it('debería devolver true para letra "Dead"', () => {
  });
  it('debería devolver false para letra "Alive"', () => {
  });
  it('debería devolver false para letra "unknown"', () => {
  });
});
describe('computeStatsUnknown()', () => {

  it('debería devolver true para letra "unknown"', () => {
  });
  it('debería devolver false para letra "Alive"', () => {
  });
  it('debería devolver false para letra "Dead"', () => {
  });
});
});