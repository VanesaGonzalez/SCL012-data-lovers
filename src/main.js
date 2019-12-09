
import { showChampion, lineChampions, findById } from './data.js';

let championsData = showChampion(''); 
let lineData = lineChampions('');

const home = document.getElementById('home');
const homeButton = document.getElementById('homeButton');
const champions = document.getElementById('champions');
const championsButton = document.getElementById('championsButton');
const filters = document.getElementById('filters');
const modal = document.querySelector(".modal");

function makeChampions(data) {
  let innerHTML = '<div id="championsWraper" class="row">'; //
  data.map(data => { //hace la caja de campeones
    innerHTML += '<div class="margin-box"><button id="' + data.key + '" class="imageButton"><div id="' + data.key + '" class="championBox margin-top">'; // un div fuera del botón para generar el margen.Y el botón que engloba toda la caja q ue sea clickeable.
    innerHTML += '<img id="' + data.key + '" class="imgRedonda center" src="' + data.splash + '"/>';
    innerHTML += '<p id="' + data.key + '" class="name-title">' + data.name + '</p>';
    innerHTML += '<p id="' + data.key + '" class="name-title">' + data.title + '</p>';
    innerHTML += '</div></button></div>'; // div que cierra  
  })
  innerHTML += '</div>'

  return innerHTML;
}

function makeButtons () { // captura los botones y agrega evento
  const selectClases = document.getElementById('selectClases');
  const topLine = document.getElementById('top');
  const jgLine = document.getElementById('jungla');
  selectClases.addEventListener('change', setFilter);
  topLine.addEventListener('click', setFilterLine);
  jgLine.addEventListener('click', setFilterLine);

}

function setView(e) { // cambia entre inicio y campeones
  e.preventDefault();
  if (e.target.id === 'championsButton') {
    home.style.display = 'none';
    filters.style.display = 'block';
    champions.style.display = 'block';
    championsButton.style.color = 'rgba(55, 225, 227, 0.5)';
    homeButton.style.color = '';

    champions.innerHTML = makeChampions(championsData); // hace cada caja de campeones

    const imagesButtons = document.querySelectorAll(".imageButton"); // botón de la caja, capturo y agrego evento

    imagesButtons.forEach(function(elem) {
      elem.addEventListener("click", openModal);
    });

    makeButtons(); 
  } else {
    home.style.display = 'inherit';
    champions.style.display = 'none';
    homeButton.style.color = 'rgba(55, 225, 227, 0.5)';
    championsButton.style.color = '';
  }

}

function setFilter(e) { //filtro en select o clases
  const filter = e.target.value;
  championsData = showChampion(filter); // filtra la información
  document.getElementById('championsWraper').remove; //borra todas las cajas
  champions.innerHTML = makeChampions(championsData); // "dibuja" cajas con información filtrada

  const imagesButtons = document.querySelectorAll(".imageButton");

  imagesButtons.forEach(function(elem) {
    elem.addEventListener("click", openModal);
  });

  makeButtons();
}

function setFilterLine(e) {
  const filter = e.target.id;
  lineData = lineChampions(filter);
  document.getElementById('championsWraper').remove;
  champions.innerHTML = makeChampions(lineData);

  const imagesButtons = document.querySelectorAll(".imageButton");

  imagesButtons.forEach(function(elem) {
    elem.addEventListener("click", openModal);
  });
  
  makeButtons();
}

function openModal(e) {

  const result = findById(e.target.id); //devuelve solo un campeón

  let tags = ''; // inicializo una variable para guardar tags, mapeo cada uno y cuando es el primero solo guardo el tag, y si vienen más le agrego guión
  result.tags.map((tag, index) => {
    if (index === 0) {
      tags = tag;
    } else {
      tags += ' - ' + tag;
    }
  });

  let content = '<span class="close">&times;</span>'; // equis para cerrar modal
  content += '<img class="modalImg" src="' + result.splash + '"/>'; //comienza a dibujar la caja
  content += '<p class="modalTitle">' + tags + '</p>';
  content += '<p id="blurb">' + result.blurb + '</p>';
  content += '<p id="stats"> Life' + "   " + result.stats.hp + '</p>';
  content += '<p id="stats"> Attack Range' + "   " + result.stats.attackrange + '</p>';
  content += '<p id="stats"> Attack Speed Offset' + "   " + result.stats.attackspeedoffset + '</p>';
  content += '<p id="stats"> Move Speed' + "   " + result.stats.movespeed + '</p>';
  content += '<p id="stats"> Life Regen' + "   " + result.stats.hpregen + '</p>';
  content += '<p id="stats"> Armor' + "   " + result.stats.armor + '</p>';
  content += '<p id="stats"> Spell Block' + "   " + result.stats.spellblock + '</p>';


  modal.firstElementChild.innerHTML = content; 
  modal.style.display = "block";

  const span = document.querySelector(".close");
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

homeButton.addEventListener('click', setView);
championsButton.addEventListener('click', setView);
