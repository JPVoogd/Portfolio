const poke_container = document.getElementById("poke-container");
const pokemon_count = 151;
const colors = {
  //   fire: "#FDDFDF",
  //   grass: "#DEFDE0",
  //   electric: "#FCF7DE",
  //   water: "#DEF3FD",
  //   ground: "#f4e7da",
  //   rock: "#d5d5d4",
  //   fairy: "#fceaff",
  //   poison: "#98d7a5",
  //   bug: "#f8d5a3",
  //   dragon: "#97b3e6",
  //   psychic: "#eaeda1",
  //   flying: "#F5F5F5",
  //   fighting: "#E6E0D4",
  //   normal: "#F5F5F5",

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

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

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

fetchPokemons();

console.log(pokemon_count);
