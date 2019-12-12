import { showChampion, lineChampions, findById } from '../src/data';

describe('showChampion', () => {
  it('debería ser una función', () => {
    expect(typeof showChampion).toBe('function');
  });

  it('debería ser un asesino', () => {
    expect(showChampion('Assassin')[0].name).toEqual('Ahri');
  });
});

describe('lineChampions', () => {
  it('debería ser una función', () => {
    expect(typeof lineChampions).toBe('function');
  });

  it('debería ser un superior', () => {
    expect(lineChampions('Top')[0].name).toEqual('Aatrox');
  });
});

describe('findById', () => {
  it('debería ser una función', () => {
    expect(typeof findById).toBe('function');
  });
  it('debería ser uno específico', () => {
    expect(findById('266').name).toEqual('Aatrox');
  });
});
