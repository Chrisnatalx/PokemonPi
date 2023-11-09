const deletePokemonController = require('../controllers/DeletePokemonController');

const deletePokemonHanlder = async (req, res) => {
	try {
		const { id } = req.params; // Obtén el ID del parámetro de la URL
		const response = await deletePokemonController(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = deletePokemonHanlder;
