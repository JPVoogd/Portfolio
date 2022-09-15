const poke_container = document.getElementById("poke-container");
var pokemon_min = 1;
var pokemon_max = 151;
const colors = {
  fire: "#fd7d23",
  grass: "#9bcb51",
  electric: "#eed535",
  water: "#4592c3",
  ground: "#ab9843",
  rock: "#a38c22",
  fairy: "#fcb9ea",
  poison: "#b97fca",
  bug: "#719f40",
  dragon: "#54a3cf",
  psychic: "#f365b8",
  flying: "#bdb8b8",
  fighting: "#d46823",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = pokemon_min; i <= pokemon_max; i++) {
    await getPokemon(i);
  }
};

// function chooseGen(chosen) {
//   switch (chosen) {
//     case "1":
//       pokemon_min = 1;
//       pokemon_max = 151;
//       fetchPokemons();
//       break;
//     case "2":
//       pokemon_min = 152;
//       pokemon_max = 251;
//       fetchPokemons();
//       break;
//     case "3":
//       pokemon_min = 252;
//       pokemon_max = 386;
//       fetchPokemons();
//       break;
//     case "4":
//       pokemon_min = 387;
//       pokemon_max = 493;
//       fetchPokemons();
//       break;
//     case "5":
//       pokemon_min = 494;
//       pokemon_max = 649;
//       console.log("gen 3");
//       fetchPokemons();
//       break;
//     case "6":
//       pokemon_min = 650;
//       pokemon_max = 721;
//       fetchPokemons();
//       break;
//     case "7":
//       pokemon_min = 722;
//       pokemon_max = 809;
//       fetchPokemons();
//       break;
//     case "8":
//       pokemon_min = 810;
//       pokemon_max = 901;
//       fetchPokemons();
//       break;
//     default:
//       console.log("No gen selected");
//   }
// }

const main_types = Object.keys(colors);

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);

  const color = colors[type];

  pokemonEl.style.background = color;

  // pokemonEl.style.background =
  //   "linear-gradient(to bottom, " + color + ", " + color2;

  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${poke_types} </span> </small>
    </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

// chooseGen();
fetchPokemons();
