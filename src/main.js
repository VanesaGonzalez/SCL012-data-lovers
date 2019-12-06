import { showChampion } from './data.js';

let championsData = showChampion(''); 
console.log(championsData);

const home = document.getElementById('home');
const homeButton = document.getElementById('homeButton');
const champions = document.getElementById('champions');
const championsButton = document.getElementById('championsButton');

function setView(e) {
  if (e.target.id === 'championsButton') {
    home.style.display = 'none';
    champions.style.display = 'inherit';
    championsButton.style.color = 'rgba(55, 225, 227, 0.5)';
    homeButton.style.color = '';

    let innerHTML = '<select name="" id="selectClases" class="classSelect"><options>      <option value ="">Todas las clases</option>      <option value ="Assassin">Asesino</option>      <option value ="Fighter">Luchador</option>      <option value ="Mage">Mago</option>      <option value ="Support">Soporte</option>      <option value ="Tank">Tanque</option>    </options>  </select>  <button class="positionButton">Superior</button>  <button class="positionButton">Jungla</button>  <button class="positionButton">Medio</button>  <button class="positionButton">Inferior</button>  <button class="positionButton">Soporte</button>'
    innerHTML += '<div id="championsWraper" class="row">'
    championsData.map(data => {
      innerHTML += '<div class = "championBox margin-top">';
      innerHTML += '<button class="imageButton center"><img class="imgRedonda" src = "' + data.img + '"/></button>';
      innerHTML += '<p class="name-title">' + data.name + '</p>';
      innerHTML += '<p class="name-title">' + data.title + '</p>';
      innerHTML += '</div>'; // div que cierra  
    })
    innerHTML += '</div>'
    champions.innerHTML = innerHTML;
    
    const selectClases = document.getElementById('selectClases');
    selectClases.addEventListener('change', setFilter);

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
  let innerHTML = '<select name="" id="selectClases" class="classSelect"><options>      <option value ="">Todas las clases</option>      <option value ="Assassin">Asesino</option>      <option value ="Fighter">Luchador</option>      <option value ="Mage">Mago</option>      <option value ="Support">Soporte</option>      <option value ="Tank">Tanque</option>    </options>  </select>  <button class="positionButton">Superior</button>  <button class="positionButton">Jungla</button>  <button class="positionButton">Medio</button>  <button class="positionButton">Inferior</button>  <button class="positionButton">Soporte</button>'
  innerHTML += '<div id="championsWraper" class="row">'
  championsData.map(data => {
    innerHTML += '<div class = "championBox margin-top">';
    innerHTML += '<button class="imageButton center"><img class="imgRedonda" src = "' + data.img + '"/></button>';
    innerHTML += '<p class="name-title">' + data.name + '</p>';
    innerHTML += '<p class="name-title">' + data.title + '</p>';
    innerHTML += '</div>'; // div que cierra  
  })
  innerHTML += '</div>'
  champions.innerHTML = innerHTML;
  const selectClases = document.getElementById('selectClases');
  selectClases.addEventListener('change', setFilter);
}

homeButton.addEventListener('click', setView);
championsButton.addEventListener('click', setView);
