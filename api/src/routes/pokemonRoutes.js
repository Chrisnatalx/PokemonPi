const { Router } = require('express');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler');
const getTypeHandler = require('../handlers/getTypeHandler');
const createPokemonHandler = require('../handlers/createPokemonHandler');
const getPokemonsByNameHandler = require('../handlers/getPokemonsByNameHandler');
const getPokemonsHandler = require('../handlers/getPokemonHandler');
const deletePokemonHanlder = require('../handlers/deletePokemonHanlder');
const updatePokemonHanlder = require('../handlers/updatePokemonHanlder');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler);
pokemonRouter.get('/name', getPokemonsByNameHandler);
pokemonRouter.get('/type', getTypeHandler);
pokemonRouter.get('/:id', getPokemonByIdHandler);
pokemonRouter.post('/', createPokemonHandler);
pokemonRouter.delete('/:id', deletePokemonHanlder);
pokemonRouter.put('/', updatePokemonHanlder);

module.exports = pokemonRouter;
