import LoL from './data/lol/lol.js';

export const showChampion = (filter) => {
  const champions = [];
  Object.keys(LoL.data).forEach((item) => {
    if (LoL.data[item].tags.some((tag) => tag === filter) || filter === '') {
      champions.push(LoL.data[item]);
    }
  });
  return champions;
};

export const lineChampions = (filter) => {
  const lines = [];
  Object.keys(LoL.data).forEach((item) => {
    if (LoL.data[item].lines.some((line) => line === filter) || filter === '') {
      lines.push(LoL.data[item]);
    }
  });
  return lines;
};
