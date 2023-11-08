const { Pokemon, Type } = require('../db');
const updatePokemonController = async (
	id,
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
	await Pokemon.update(
		{
			name,
			image,
			hp,
			attack,
			defence,
			speed,
			height,
			weight,
			types,
		},
		{
			where: {
				id: id,
			},
		}
	);
};

module.exports = updatePokemonController;
