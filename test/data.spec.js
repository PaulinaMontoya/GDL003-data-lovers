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

describe('orderAz', () => {
  it('it should return an array of alphabetically ordered objects', () => {
    expect(typeof data.orderAz()).toBe(data.sort);
  });
});
describe('orderZa', () => {
  it('it should return an array of alphabetically ordered objects', () => {
    expect(data.orderZa()).toBe(data.sort);
  });
  //console.log(data.orderZa());
});
describe('filterAlive', () => {
  it('it should return a filter array', () => {
    expect(data.filterAlive()).toBe(data.filter);
  });
});