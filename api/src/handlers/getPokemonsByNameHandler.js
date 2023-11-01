const getPokemonsByNameController = require('../controllers/getPokemonsByNameController');
// const getPokemonsController = require('../controllers/getPokemonsController');

const getPokemonsByNameHandler = async (req, res) => {
	try {
		const { name } = req.query;
		const nameLower = name.toLowerCase();
		const response = await getPokemonsByNameController(nameLower);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getPokemonsByNameHandler;
