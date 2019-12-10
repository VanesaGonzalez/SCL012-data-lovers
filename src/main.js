
import { showChampion, lineChampions } from './data.js';

let championsData = showChampion(''); 
let lineData = lineChampions('');

const home = document.getElementById('home');
const homeButton = document.getElementById('homeButton');
const champions = document.getElementById('champions');
const championsButton = document.getElementById('championsButton');

function makeChampions(data) {
  let innerHTML = `<div class='row'>
                    <select name='' id='selectClases' class='classSelect'>
                      <option value =''>Todas las clases</option>
                      <option value ='Assassin'>Asesino</option>
                      <option value ='Fighter'>Luchador</option>
                      <option value ='Mage'>Mago</option>
                      <option value ='Support'>Soporte</option>
                      <option value ='Tank'>Tanque</option>
                    </select>
                    <button id='Top' class='positionButton'>Superior</button>
                    <button id='Jungle' class='positionButton'>Jungla</button>
                    <button id="Mid" class='positionButton'>Medio</button>
                    <button id="Bot" class='positionButton'>Inferior</button>
                    <button id="Support" class='positionButton'>Soporte</button></div>`
  innerHTML += '<div id="championsWraper" class="row">'
  data.map(data => {
    innerHTML += '<div class = "championBox margin-top">';
    innerHTML += '<button class="imageButton center"><img class="imgRedonda" src = "' + data.splash + '"/></button>';
    innerHTML += '<p class="name-title">' + data.name + '</p>';
    innerHTML += '<p class="name-title">' + data.title + '</p>';
    innerHTML += '</div>'; // div que cierra  
  })
  innerHTML += '</div>'
  return innerHTML;
}

function makeButtons () {
  const selectClases = document.getElementById('selectClases');
  const topLine = document.getElementById('Top');
  const jgLine = document.getElementById('Jungle');
  const midLine = document.getElementById('Mid');
  const botLine = document.getElementById('Bot');
  const supportLine = document.getElementById('Support');
  selectClases.addEventListener('change', setFilter);
  topLine.addEventListener('click', setFilterLine);
  jgLine.addEventListener('click', setFilterLine);
  midLine.addEventListener('click', setFilterLine);
  botLine.addEventListener('click', setFilterLine);
  supportLine.addEventListener('click', setFilterLine);
}

function setView(e) {
  e.preventDefault();
  if (e.target.id === 'championsButton') {
    home.style.display = 'none';
    champions.style.display = 'block';
    championsButton.style.color = 'rgba(55, 225, 227, 0.5)';
    homeButton.style.color = '';

    champions.innerHTML = makeChampions(championsData);

    makeButtons();
  } else {
    home.style.display = 'inherit';
    champions.style.display = 'none';
    homeButton.style.color = 'rgba(55, 225, 227, 0.5)';
    championsButton.style.color = '';
  }

}

function setFilter(e) {
  const filter = e.target.value;
  championsData = showChampion(filter);
  document.getElementById('championsWraper').remove;
  champions.innerHTML = makeChampions(championsData);

  makeButtons();
}

function setFilterLine(e) {
  const filter = e.target.id;
  lineData = lineChampions(filter);
  document.getElementById('championsWraper').remove;
  champions.innerHTML = makeChampions(lineData);
  
  makeButtons();
}

homeButton.addEventListener('click', setView);
championsButton.addEventListener('click', setView);

