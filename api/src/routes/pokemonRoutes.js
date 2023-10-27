const { Router } = require('express');
const getPokemonsHandler = require('../handlers/getPokemonsHandler');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler');
const getTypeHandler = require('../handlers/getTypeHandler');
const createPokemonHandler = require('../handlers/createPokemonHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler);
pokemonRouter.get('/type', getTypeHandler);
pokemonRouter.get('/:id', getPokemonByIdHandler);
pokemonRouter.post('/', createPokemonHandler);

module.exports = pokemonRouter;
