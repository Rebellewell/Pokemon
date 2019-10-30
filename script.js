// // TO CREAT AN ELEMENT AND ADD TO THE DOM
// // create an element
// var myFirstEl = document.createElement('li'); //in quotes for the element, otherwise variable
// // add info and classes to the element
// myFirstEl.innerText = 'Charizard';
// myFirstEl.classList.add('pokemon');
// //myFirstEl.classList.remove('pokemon');
// // grab the element already in the DOM that will house the new element
// var pokeList = document.getElementById('pokemon');
// // append new element to parent
// pokeList.appendChild(myFirstEl);

for (var i = 0; i < pokemonNames.length; i++) {
  addPokemon(pokemonNames[i]);
}

function addPokemon(name) {
  // 1 - create element
  var pokeEl = document.createElement('div');
  // 2 - customnize element
  pokeEl.innerText = name;
  pokeEl.classList.add('pokemon');
  // 3 - get future parent
  var pokeList = document.getElementById('pokemon-list');
  // 4 - append new element to parent
  pokeList.appendChild(pokeEl);
}