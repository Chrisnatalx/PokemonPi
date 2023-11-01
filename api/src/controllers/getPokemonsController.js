require('dotenv').config();
const { URL } = process.env;
const axios = require('axios');
const { Pokemon } = require('../db');
const getPokemonsController = async () => {
	const { data } = await axios.get(`${URL}?limit=100`);

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
	const pokemonsDb = await Pokemon.findAll();

	return pokemonsData.concat(pokemonsDb);
};

module.exports = getPokemonsController;
