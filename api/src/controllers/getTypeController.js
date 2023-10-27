require('dotenv').config();
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type';
const { Type } = require('../db');

const getTypeController = async () => {
	const { data } = await axios(`${URL}`);
	const types = data.results.map((type) => {
		return type.name;
	});

	types.map(async (type) => {
		await Type.findOrCreate({
			where: { name: type },
		});
	});

	return types;
};
module.exports = getTypeController;
