const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const URL = "https://pokeapi.co/api/v2/pokemon/";
const TOTAL_POKEMON = 151;

// Se piden los 151 una sola vez y se guardan en orden de ID; los filtros
// trabajan sobre esta lista en memoria en lugar de volver a llamar a la API.
const pokemonCargados = Promise.all(
    Array.from({ length: TOTAL_POKEMON }, (_, i) =>
        fetch(URL + (i + 1)).then((response) => response.json())
    )
);

pokemonCargados
    .then((lista) => lista.forEach(mostrarPokemon))
    .catch(() => {
        listaPokemon.innerHTML = "<p>No se pudo cargar la Pokédex. Probá recargar la página.</p>";
    });

// PokeAPI devuelve altura en decímetros y peso en hectogramos.
function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join("");

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId; 
    }
   

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height / 10}M</p>
                <p class="stat">${poke.weight / 10}KG</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    pokemonCargados.then((lista) => {
        listaPokemon.innerHTML = "";
        lista
            .filter((data) => botonId === "ver-todos" || data.types.some((type) => type.type.name === botonId))
            .forEach(mostrarPokemon);
    });
}))