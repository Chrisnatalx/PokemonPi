require('dotenv').config();
const axios = require('axios');
const { Op } = require('sequelize');
const { URL } = process.env;
const { Pokemon, Type } = require('../db');

const getPokemonsByNameController = async (name) => {
	const pokemonDb = await Pokemon.findAll({
		where: { name: { [Op.iLike]: `%${name}%` } },
		include: [Type],
	});
	const newPokemons = pokemonDb.map((pokemon) => {
		return {
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.image,
			hp: pokemon.hp,
			attack: pokemon.attack,
			defense: pokemon.defense,
			height: pokemon.height,
			weight: pokemon.weight,
			types: pokemon.Types.map((type) => type.name).join(', '),
		};
	});

	if (newPokemons.length > 0) {
		return newPokemons;
	} else {
		// No se encontró en la base de datos, realiza la solicitud a la API.
		const response = await axios.get(`${URL}/${name}`);
		const pokemonApi = response.data;
		// Mapea los datos de la API
		const types = pokemonApi.types.map((type) => type.type.name);
		const pokemonApiMapped = {
			id: pokemonApi.id,
			name: pokemonApi.name,
			weight: pokemonApi.weight,
			height: pokemonApi.height,
			image: pokemonApi.sprites.other?.dream_world?.front_default,
			types: types,
			hp: pokemonApi.stats[0]['base_stat'],
			attack: pokemonApi.stats[1]['base_stat'],
			defence: pokemonApi.stats[2]['base_stat'],
			speed: pokemonApi.stats[3]['base_stat'],
		};
		return pokemonApiMapped; // Devuelve un arreglo con el Pokémon mapeado
	}
};

module.exports = getPokemonsByNameController;
