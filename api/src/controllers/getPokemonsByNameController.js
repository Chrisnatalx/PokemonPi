require('dotenv').config();
const axios = require('axios');
const { URL } = process.env;
const { Pokemon } = require('../db');
const { Op } = require('sequelize');
const getPokemonsByNameController = async (name) => {
	const response = await axios.get(`${URL}/${name}`);
	const pokemon = response.data;
	if (pokemon) {
		const types = pokemon.types.map((type) => type.type.name);
		// const stats = pokemon.stats.map((stat) => {
		// 	return {
		// 		[stat.stat.name]: stat.base_stat,
		// 	};
		// });
		const pokemonApiMapped = {
			id: pokemon.id,
			name: pokemon.name,
			weight: pokemon.weight,
			height: pokemon.height,
			image: pokemon.sprites.other?.dream_world?.front_default,
			types: types,
			// stats: stats,
		};
		const pokemonDb = await Pokemon.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			},
		});
		const pokemonDbMapped = pokemonDb.map((pokemon) => {
			return {
				id: pokemon.id,
				name: pokemon.name,
				weight: pokemon.weight,
				height: pokemon.height,
				image: pokemon.image,
				types: pokemon.types,
				life: life,
				attack: attacl,
				defence: defence,
				speed: speed,
			};
		});
		const allPokemons = [pokemonApiMapped, ...pokemonDbMapped];
		return allPokemons;
	}
};

module.exports = getPokemonsByNameController;
