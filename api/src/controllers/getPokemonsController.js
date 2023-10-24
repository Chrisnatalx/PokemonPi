// require('dotenv').config();
// const { URL } = process.env;
const axios = require('axios');
const getPokemonsController = async () => {
	const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');

	const pokemonsData = await Promise.all(
		data.results.map(async (pokemon) => {
			const { data: pokemonData } = await axios.get(pokemon.url);
			const types = pokemonData.types.map((type) => type.type.name);
			const pokemonMapped = {
				name: pokemonData.name,
				id: pokemonData.id,
				height: pokemonData.height,
				weight: pokemonData.weight,
				image: pokemonData.sprites.other?.dream_world?.front_default,
				types: types,
			};
			return pokemonMapped;
		})
	);

	return pokemonsData;
};

module.exports = getPokemonsController;
