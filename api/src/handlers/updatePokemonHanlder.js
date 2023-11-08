const updatePokemonController = require('../controllers/updatePokemonController');

const updatePokemonHanlder = async (req, res) => {
	const { id, name, image, hp, attack, defence, speed, height, weight, types } =
		req.body;
	try {
		const response = await updatePokemonController(
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
		);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = updatePokemonHanlder;
