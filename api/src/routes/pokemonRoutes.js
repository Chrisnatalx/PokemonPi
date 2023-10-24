const { Router } = require('express');
const getPokemonsHandler = require('../handlers/getPokemonsHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler);

module.exports = pokemonRouter;
