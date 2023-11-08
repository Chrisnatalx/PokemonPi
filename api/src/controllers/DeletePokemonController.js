const { Pokemon } = require('../db');
const deletePokemonController = async (id) => {
	await Pokemon.destroy({
		where: { id },
	});

	return { message: 'Pokemon deleted successfully' }; // Devuelve una respuesta
};
module.exports = deletePokemonController;
