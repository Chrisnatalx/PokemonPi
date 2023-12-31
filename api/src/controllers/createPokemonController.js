const { Pokemon, Type } = require('../db');

const createPokemonController = async (
	name,
	image,
	hp,
	attack,
	defence,
	speed,
	height,
	weight,
	types
) => {
	const newPokemon = await Pokemon.create({
		name,
		image,
		hp,
		attack,
		defence,
		speed,
		height,
		weight,
	});
	if (types && types.length >= 1) {
		const associatedTypes = await Type.findAll({
			where: {
				name: types,
			},
		});
		await newPokemon.addTypes(associatedTypes);
	}

	return newPokemon;
};
module.exports = createPokemonController;
