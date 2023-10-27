require('dotenv').config();
const axios = require('axios');
const { URL } = process.env;
const { Pokemon } = require('../db');
const getPokemonByIdController = async (id, source) => {
	if (source === 'api') {
		const { data } = await axios.get(`${URL}/${id}`);
		const pokemonData = data;
		console.log(pokemonData);
		const types = pokemonData.types.map((type) => type.type.name);
		const pokemon = {
			id: data.id,
			name: data.name,
			height: data.height,
			weight: data.weight,
			image: data.sprites.other?.dream_world?.front_default,
			types: types,
			hp: data.stats[0]['base_stat'],
			attack: data.stats[1]['base_stat'],
			defence: data.stats[2]['base_stat'],
			speed: data.stats[3]['base_stat'],
		};
		return pokemon;
	} else {
		return await Pokemon.findByPk(id);
	}
};

module.exports = getPokemonByIdController;
