let pokemonIdInput = document.querySelector("#pokemon-id");
let thenCatchButton = document.querySelector("#then-catch-btn");
thenCatchButton.addEventListener("click", thenCatchDemo);

function thenCatchDemo() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdInput.value}`)
    .then((res) => {
      return res.json(); // .json returns another promise that contains the response body converted into a JS object
    })
    .then((data) => {
      addPokemonToTable(data);
    });
}

function asyncAwaitDemo() {}

function addPokemonToTable(pokemon) {
  let pokemonTbodyElement = document.querySelector("#poke-table tbody");
  let row = document.createElement("tr");
  let idCell = document.createElement("td");
  idCell.innerHTML = pokemon.id;
  let nameCell = document.createElement("td");
  nameCell.innerHTML = pokemon.name;
  let imageCell = document.createElement("td");

  let imageElement = document.createElement("img");
  imageCell.appendChild(imageElement);
  imageElement.setAttribute("src", pokemon.sprites.front_default);

  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(imageCell);

  pokemonTbodyElement.appendChild(row);
}
