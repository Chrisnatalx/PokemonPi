export const GETALLPOKEMONS = 'GETALLPOKEMONS';
export const GETPOKEMONBYID = 'GETPOKEMONBYID';
import axios from 'axios';

const url = `http://localhost:3001/pokemon`;
export const getAllPokemons = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(url);
			if (data) {
				return dispatch({
					type: GETALLPOKEMONS,
					payload: data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getPokemonById = (id) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${url}/${id}`);
			if (data) {
				return dispatch({
					type: GETPOKEMONBYID,
					payload: data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};
