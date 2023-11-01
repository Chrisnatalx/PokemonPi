const createPokemonController = require('../controllers/createPokemonController');

const createPokemonHandler = async (req, res) => {
	try {
		const { name, image, life, attack, defence, speed, height, weight, types } =
			req.body;
		const response = await createPokemonController(
			name,
			image,
			life,
			attack,
			defence,
			speed,
			height,
			weight,
			types
		);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: 'Error al crear pokemon' });
	}
};
module.exports = createPokemonHandler;
