
import LoL from './data/lol/lol.js';
export const showChampion = (filter) => {
  const champions = []
  Object.keys(LoL.data).forEach( (item) => {
    if(LoL.data[item].tags.some(tag => tag === filter) || filter === ''){

      champions.push(LoL.data[item]);
    }
  });
  return champions;
}

