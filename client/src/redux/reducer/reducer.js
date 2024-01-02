import {
	GETALLPOKEMONS,
	GETPOKEMONBYID,
	GETPOKEMONBYNAME,
	GETPOKEMONTYPE,
	CREATEPOKEMON,
	ORDERBYID,
	ORDERBYNAME,
	ORDERBYATTACK,
	FILTERTYPE,
	RESET,
	DELETEPOKEMON,
	UPDATEPOKEMON,
	GETWATERANDFIGHTING,
} from '../actions/action';

let initialState = { allPokemons: [], pokemons: [], detail: [], types: [] };

export const rootReducer = (state = initialState, action) => {
	let sorted;
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
		case GETPOKEMONBYNAME:
			if (action.payload.hasOwnProperty('name')) {
				return {
					...state,
					allPokemons: [action.payload],
				};
			} else {
				return {
					...state,
					allPokemons: [...action.payload],
				};
			}
		case GETPOKEMONTYPE:
			return {
				...state,
				types: action.payload,
			};
		case CREATEPOKEMON:
			return {
				...state,
				allPokemons: [...state.allPokemons, action.payload],
				pokemons: [...state.pokemons, action.payload],
			};
		case DELETEPOKEMON:
			const deletedPokemonId = action.payload;
			return {
				...state,
				allPokemons: state.allPokemons.filter(
					(pokemon) => pokemon.id !== deletedPokemonId
				),
				pokemons: state.pokemons.filter(
					(pokemon) => pokemon.id !== deletedPokemonId
				),
			};
		case UPDATEPOKEMON:
			const updatedPokemonId = action.payload.id;
			const updatedPokemons = state.allPokemons.map((pokemon) => {
				if (pokemon.id === updatedPokemonId) {
					return {
						...pokemon,

						name: action.payload.name,
						image: action.payload.image,
						hp: action.payload.hp,
						attack: action.payload.attack,
						defence: action.payload.defence,
						speed: action.payload.speed,
						height: action.payload.hegith,
						weight: action.payload.wegith,
						types: action.payload.types,
					};
				}
				return pokemon;
			});

			return {
				...state,
				allPokemons: updatedPokemons,
				pokemons: updatedPokemons,
			};

		case ORDERBYID:
			const orderPokemon = [...state.allPokemons];
			if (action.payload === 'API') {
				return {
					...state,
					allPokemons: state.pokemons,
				};
			}

			const filteredPokemons = orderPokemon.filter((pokemon) => {
				return typeof pokemon.id !== 'number';
			});
			return {
				...state,
				allPokemons: filteredPokemons,
			};
		case ORDERBYNAME:
			let orderAllPokemons = [...state.allPokemons];
			if (action.payload === 'Ascendent') {
				sorted = orderAllPokemons.sort((a, b) =>
					a.name.toLowerCase().localeCompare(b.name)
				);
			} else {
				sorted = orderAllPokemons.sort((a, b) =>
					b.name.toLowerCase().localeCompare(a.name)
				);
			}

			return {
				...state,
				allPokemons: [...sorted],
			};
		case ORDERBYATTACK:
			if (action.payload === 'MaxAttack') {
				sorted = state.allPokemons.slice().sort((a, b) => b.attack - a.attack);
			} else {
				sorted = state.allPokemons.slice().sort((a, b) => a.attack - b.attack);
			}
			return {
				...state,
				allPokemons: [...sorted],
			};
		case FILTERTYPE:
			sorted = state.allPokemons.filter((pokemon) =>
				pokemon.types.includes(action.payload)
			);
			return {
				...state,
				allPokemons: [...sorted],
			};
		case RESET: {
			return {
				...state,
				allPokemons: state.pokemons,
			};
		}
		case GETWATERANDFIGHTING:
			const sorted = state.allPokemons.filter(
				(pokemon) =>
					pokemon.types.includes('water') && pokemon.types.includes('fighting')
			);
			return {
				...state,
				allPokemons: [...sorted],
			};
		default:
			return state;
	}
};
