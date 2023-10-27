const getPokemonByIdController = require('../controllers/getPokemonByIdController');

const getPokemonByIdHandler = async (req, res) => {
	try {
		const { id } = req.params;
		const source = isNaN(id) ? 'bdd' : 'api';
		const response = await getPokemonByIdController(id, source);
		res.status(200).json(response);
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

module.exports = getPokemonByIdHandler;
