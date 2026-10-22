🌐 **English** · [Español](README.es.md)

# Pokédex

[![CI](https://github.com/Mrcipo/pokemonApp/actions/workflows/ci.yml/badge.svg)](https://github.com/Mrcipo/pokemonApp/actions/workflows/ci.yml)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A practice project for consuming a public API with plain HTML, CSS and JavaScript (no frameworks). It
loads the 151 first-generation Pokémon from [PokeAPI](https://pokeapi.co/) and shows them as cards with
number, official artwork, types, height and weight, with buttons to filter by type.

All 151 Pokémon are fetched once in parallel, kept in ID order and filtered in memory.

## Running it

Open `index.html` in a browser (or serve the folder with any static server, e.g. VS Code Live Preview).
No build step or dependencies.

## License

Code released under the [MIT License](LICENSE). Pokémon data and images come from PokeAPI; Pokémon and
its names are trademarks of Nintendo, Game Freak and The Pokémon Company.
