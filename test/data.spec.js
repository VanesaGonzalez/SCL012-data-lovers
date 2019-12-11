// importamos la función `example`
/*import { example } from "../src/data";

describe('example', () => {

  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});
*/
import { showChampion, lineChampions } from './data.js';

describe('showChampion', () => {

  it('debería ser una función', () => {
    expect(typeof showChampion).toBe('function');
  });

  it('debería ser una función', () => {
    expect(showChampion('Assasins').Akali.tag[0]).toEqual('Assassin');
  });


});