require('dotenv').config();
const axios = require('axios');
const { URL } = process.env;
const { Pokemon } = require('../db');

const getPokemonsByNameController = async (name) => {
	const pokemonDb = await Pokemon.findOne({
		where: {
			name: name,
		},
	});

	if (pokemonDb) {
		return pokemonDb; // Devuelve el Pokémon encontrado en la base de datos.
	} else {
		// No se encontró en la base de datos, realiza la solicitud a la API.
		const response = await axios.get(`${URL}/${name}`);
		const pokemonapi = response.data;
		// Mapea los datos de la API
		const types = pokemonapi.types.map((type) => type.type.name);
		const pokemonApiMapped = {
			id: pokemonapi.id,
			name: pokemonapi.name,
			weight: pokemonapi.weight,
			height: pokemonapi.height,
			image: pokemonapi.sprites.other?.dream_world?.front_default,
			types: types,
			hp: pokemonapi.stats[0]['base_stat'],
			attack: pokemonapi.stats[1]['base_stat'],
			defence: pokemonapi.stats[2]['base_stat'],
			speed: pokemonapi.stats[3]['base_stat'],
		};
		return pokemonApiMapped;
	}
};

module.exports = getPokemonsByNameController;
