require('dotenv').config();
const { URL } = process.env;
const axios = require('axios');
const { Pokemon, Type } = require('../db');
const getPokemonsController = async () => {
	const { data } = await axios.get(`${URL}?limit=120`);

	const pokemonsData = await Promise.all(
		data.results.map(async (pokemon) => {
			const { data: pokemonData } = await axios.get(pokemon.url);

			const pokemonMapped = {
				name: pokemonData.name,
				id: pokemonData.id,
				height: pokemonData.height,
				weight: pokemonData.weight,
				image: pokemonData.sprites.other?.dream_world?.front_default,
				hp: pokemonData.stats[0]['base_stat'],
				attack: pokemonData.stats[1]['base_stat'],
				defence: pokemonData.stats[2]['base_stat'],
				speed: pokemonData.stats[3]['base_stat'],
				types: pokemonData.types.map((type) => type.type.name).join(', '),
			};
			return pokemonMapped;
		})
	);
	const pokemonDb = await Pokemon.findAll({ include: [{ model: Type }] });
	const newPokemon = pokemonDb.map((pokemon) => {
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
	return pokemonsData.concat(newPokemon);
};

module.exports = getPokemonsController;
