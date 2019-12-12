import { showChampion, lineChampions, findById } from './data.js';

let championsData = showChampion('');
let lineData = lineChampions('');

const home = document.getElementById('home');
const homeButton = document.getElementById('homeButton');
const champions = document.getElementById('champions');
const championsButton = document.getElementById('championsButton');
const filters = document.getElementById('filters');
const modal = document.querySelector('.modal');

function makeChampions(data) {
  let innerHTML = '<div id="championsWraper" class="row">'; //
  data.map((d) => { // hace la caja de campeones
    innerHTML += `<div class="margin-box"><button id="${d.key}" class="imageButton"><div id="${d.key}" class="championBox margin-top">`; // un div fuera del botón para generar el margen.Y el botón que engloba toda la caja q ue sea clickeable.
    innerHTML += `<img id="${d.key}" class="imgRedonda center" src="${d.splash}"/>`;
    innerHTML += `<p id="${d.key}" class="name-title">${d.name}</p>`;
    innerHTML += `<p id="${d.key}" class="name-title">${d.title}</p>`;
    innerHTML += '</div></button></div>'; // div que cierra
    return false;
  });
  innerHTML += '</div>';

  return innerHTML;
}

function openModal(e) {
  const result = findById(e.target.id); // devuelve solo un campeón

  let tags = ''; // inicializo una variable para guardar tags, mapeo cada uno y cuando es el primero solo guardo el tag, y si vienen más le agrego guión
  result.tags.map((tag, index) => {
    if (index === 0) {
      tags = tag;
    } else {
      tags += ` - ${tag}`;
    }
    return true;
  });

  let content = '<span class="close">&times;</span>'; // equis para cerrar modal
  content += `<img class="modalImg" src="${result.splash}"/>`; // comienza a dibujar la caja
  content += `<p class="modalTitle">${tags}</p>`;
  content += `<p id="blurb">${result.blurb}</p>`;
  content += '<br>';
  content += '<div id="statsDiv"><div class="row">';
  content += `<div class="row stat"><img src="../Images/Icons/vida.png"/><p id="stats"> Life: ${result.stats.hp}</p></div>`;
  content += `<div class="row stat"><img src="../Images/Icons/regeneraciondevida.png"/><p id="stats"> Attack Range: ${result.stats.attackrange}</p></div>`;
  content += `<div class="row stat"><img src="../Images/Icons/dañodeataque.png"/><p id="stats"> Attack Speed Offset: ${result.stats.attackspeedoffset}</p></div>`;
  content += `<div class="row stat"><img src="../Images/Icons/armadura.png"/><p id="stats"> Move Speed: ${result.stats.movespeed}</p></div>`;
  content += `<div class="row stat"><img src="../Images/Icons/velocidaddeataque.png"/><p id="stats"> Life Regen: ${result.stats.hpregen}</p></div>`;
  content += `<div class="row stat"><img src="../Images/Icons/resistenciamagica.png"/><p id="stats"> Armor: ${result.stats.armor}</p></div>`;
  content += `<div class="row stat lastStat"><img src="../Images/Icons/velocidaddemovimiento.png"/><p id="stats"> Spell Block: ${result.stats.spellblock} + '</p></div>`;
  content += '</div></div>';


  modal.firstElementChild.innerHTML = content;
  modal.style.display = 'block';

  const span = document.querySelector('.close');
  // When the user clicks on <span> (x), close the modal
  span.onclick = function hide() {
    modal.style.display = 'none';
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function hide(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function setFilter(e) { // filtro en select o clases
  const filter = e.target.value;
  championsData = showChampion(filter); // filtra la información
  document.getElementById('championsWraper').remove(); // borra todas las cajas
  champions.innerHTML = makeChampions(championsData); // "dibuja" cajas con información filtrada

  const allButtons = document.querySelectorAll('.positionButton'); // devuelve el color original a los botones
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].setAttribute('style', 'background: #080808;');
  }

  const imagesButtons = document.querySelectorAll('.imageButton');

  imagesButtons.forEach((elem) => {
    elem.addEventListener('click', openModal);
  });
}

function setFilterLine(e) {
  const filter = e.target.id;
  const allButtons = document.querySelectorAll('.positionButton');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].setAttribute('style', 'background: #080808;');
  }

  e.target.style.background = 'rgba(8, 8, 8, 0.5)';
  lineData = lineChampions(filter);
  document.getElementById('championsWraper').remove();
  champions.innerHTML = makeChampions(lineData);
  const selectClases = document.getElementById('selectClases');
  selectClases.value = '';

  const imagesButtons = document.querySelectorAll('.imageButton');

  imagesButtons.forEach((elem) => {
    elem.addEventListener('click', openModal);
  });
}

function makeButtons() { // captura los botones y agrega evento
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

function setView(e) { // cambia entre inicio y campeones
  e.preventDefault();
  if (e.target.id === 'championsButton') {
    home.style.display = 'none';
    filters.style.display = 'block';
    champions.style.display = 'block';
    championsButton.style.color = 'rgba(55, 225, 227, 0.5)';
    homeButton.style.color = '';

    champions.innerHTML = makeChampions(championsData); // hace cada caja de campeones

    const imagesButtons = document.querySelectorAll('.imageButton'); // botón de la caja, capturo y agrego evento

    imagesButtons.forEach((elem) => {
      elem.addEventListener('click', openModal);
    });

    makeButtons();
  } else {
    home.style.display = 'inherit';
    champions.style.display = 'none';
    filters.style.display = 'none';
    homeButton.style.color = 'rgba(55, 225, 227, 0.5)';
    championsButton.style.color = '';
  }
}

homeButton.addEventListener('click', setView);
championsButton.addEventListener('click', setView);
