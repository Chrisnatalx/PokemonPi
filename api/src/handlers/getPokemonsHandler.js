const getPokemonsByNameController = require('../controllers/getPokemonsByNameController');
const getPokemonsController = require('../controllers/getPokemonsController');

const getPokemonsHandler = async (req, res) => {
	try {
		const { name } = req.query;

		if (!name) {
			const response = await getPokemonsController();
			if (response.length > 0) {
				return res.status(200).json(response);
			} else return res.status(500).json({ error: `Error en el servidor` });
		} else {
			const name = name.toLowerCase();
			const response = await getPokemonsByNameController(name);
			response.length > 0
				? res.status(200).json(response)
				: res
						.status(404)
						.json({ error: `No se encontro pokemon con ese nombre` });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getPokemonsHandler;
