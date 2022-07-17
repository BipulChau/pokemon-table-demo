let pokemonIdInput = document.querySelector("#pokemon-id");
let thenCatchButton = document.querySelector("#then-catch-btn");
thenCatchButton.addEventListener("click", thenCatchDemo);
let asyncAwaitButton = document.querySelector("#async-await-btn");
asyncAwaitButton.addEventListener("click", asyncAwaitDemo);

function thenCatchDemo() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdInput.value}`)
    .then((res) => {
      return res.json(); // .json returns another promise that contains the response body converted into a JS object
    })
    .then((data) => {
      console.log(".then .catch");
      addPokemonToTable(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function asyncAwaitDemo() {
  try {
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonIdInput.value}`
    );

    let data = await res.json();
    console.log("Kappu");
    addPokemonToTable(data);
  } catch (err) {
    console.log(err);
  }
}

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
