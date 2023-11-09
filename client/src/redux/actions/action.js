export const GETALLPOKEMONS = 'GETALLPOKEMONS';
export const GETPOKEMONBYID = 'GETPOKEMONBYID';
export const GETPOKEMONBYNAME = 'GETPOKEMONBYNAME';
export const GETPOKEMONTYPE = 'GETPOKEMONTYPE';
export const CREATEPOKEMON = 'CREATEPOKEMON';
export const ORDERBYID = 'ORDERBYID';
export const ORDERBYATTACK = 'ORDERBYATTACK';
export const ORDERBYNAME = 'ORDERBYNAME';
export const FILTERTYPE = 'ORDERBYNAMFILTERTYPEE';
export const RESET = 'RESET';
export const DELETEPOKEMON = 'DELETEPOKEMON';
export const UPDATEPOKEMON = 'UPDATEPOKEMON';
import axios from 'axios';

const url = `http://localhost:3001/pokemon`;
export const getAllPokemons = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(url);
			return dispatch({
				type: GETALLPOKEMONS,
				payload: data,
			});
		} catch (error) {
			alert(error.message);
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
			alert(error.message);
		}
	};
};

export const getPokemonByName = (name) => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${url}/name?name=${name}`);
			if (data) {
				dispatch({
					type: GETPOKEMONBYNAME,
					payload: data,
				});
			}
		} catch (error) {
			return alert(error.message);
		}
	};
};
export const getTypes = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios(`${url}/type`);
			return dispatch({
				type: GETPOKEMONTYPE,
				payload: data,
			});
		} catch (error) {
			return error;
		}
	};
};
export const createPokemon = (newPokemon) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(url, newPokemon);
			alert('Pokemon Created');
			return dispatch({
				type: CREATEPOKEMON,
				payload: response.data,
			});
		} catch (error) {
			alert(error.message);
		}
	};
};
export const deletePokemon = (id) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${url}/${id}`);
			alert('Pokemon Deleted');
			return dispatch({
				type: DELETEPOKEMON,
				payload: id,
			});
		} catch (error) {
			alert(error.message);
		}
	};
};
export const updatePokemon = (updatePokemon) => {
	return async (dispatch) => {
		try {
			await axios.put(`${url}`, updatePokemon);
			alert('Pokemon Update');
			return dispatch({
				type: UPDATEPOKEMON,
				payload: updatePokemon,
			});
		} catch (error) {
			alert(error.message);
		}
	};
};
export const orderById = (order) => {
	return {
		type: ORDERBYID,
		payload: order,
	};
};
export const orderByAttack = (order) => {
	return {
		type: ORDERBYATTACK,
		payload: order,
	};
};
export const orderByName = (order) => {
	return {
		type: ORDERBYNAME,
		payload: order,
	};
};
export const filterByType = (type) => {
	return {
		type: FILTERTYPE,
		payload: type,
	};
};

export const reset = () => {
	return {
		type: RESET,
	};
};
