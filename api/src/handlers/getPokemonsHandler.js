const getPokemonsController = require('../controllers/getPokemonsController');

const getPokemonsHandler = async (req, res) => {
	try {
		const response = await getPokemonsController();
		if (response.length > 0) {
			return res.status(200).json(response);
		} else return res.status(500).json({ error: `Error en el servidor` });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getPokemonsHandler;
