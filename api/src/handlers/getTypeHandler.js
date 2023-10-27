const getTypeController = require('../controllers/getTypeController');

const getTypeHandler = async (req, res) => {
	try {
		const response = await getTypeController();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = getTypeHandler;
