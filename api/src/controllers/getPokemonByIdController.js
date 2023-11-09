require('dotenv').config();
const axios = require('axios');
const { URL } = process.env;
const { Pokemon, Type } = require('../db');
const getPokemonByIdController = async (id, source) => {
	if (source === 'api') {
		const { data } = await axios.get(`${URL}/${id}`);

		const pokemon = {
			id: data.id,
			name: data.name,
			height: data.height,
			weight: data.weight,
			image: data.sprites.other?.dream_world?.front_default,
			types: data.types.map((type) => type.type.name),
			hp: data.stats[0]['base_stat'],
			attack: data.stats[1]['base_stat'],
			defence: data.stats[2]['base_stat'],
			speed: data.stats[3]['base_stat'],
		};
		return pokemon;
	} else {
		const pokemonDb = [
			await Pokemon.findByPk(id, { include: [{ model: Type }] }),
		];
		const newPokemon = pokemonDb.map((pokemon) => {
			return {
				id: pokemon.id,
				name: pokemon.name,
				image: pokemon.image,
				hp: pokemon.hp,
				attack: pokemon.attack,
				defence: pokemon.defence,
				height: pokemon.height,
				weight: pokemon.weight,
				speed: pokemon.speed,
				types: pokemon.Types.map((type) => type.name),
			};
		});
		return newPokemon[0];
	}
};

module.exports = getPokemonByIdController;
