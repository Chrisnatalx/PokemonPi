const createPokemonHandler = async (req, res) => {
	try {
		const {} = req.body;
	} catch (error) {
		res.status(500).json({ error: 'Error al crear pokemon' });
	}
};
module.exports = createPokemonHandler;
