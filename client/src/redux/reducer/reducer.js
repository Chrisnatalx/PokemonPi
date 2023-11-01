import { GETALLPOKEMONS, GETPOKEMONBYID } from '../actions/action';

let initialState = { allPokemons: [], pokemons: [], detail: [] };

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETALLPOKEMONS:
			return {
				...state,
				allPokemons: action.payload,
				pokemons: action.payload,
			};
		case GETPOKEMONBYID:
			return {
				...state,
				detail: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};
