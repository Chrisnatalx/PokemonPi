const getPokemonsController = require('../controllers/getPokemonsController');

const getPokemonsHandler = async (req, res) => {
	try {
		const response = await getPokemonsController();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getPokemonsHandler;
