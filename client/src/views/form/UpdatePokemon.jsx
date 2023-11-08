import React, { useState } from 'react'
import './Form.css'
import { validar } from '../../helpers/validar'
import { useDispatch, useSelector } from 'react-redux'
import { updatePokemon } from '../../redux/actions/action'
import { NavLink, useParams } from 'react-router-dom'
export const UpdatePokemon = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const { id } = useParams()
    const [inputValue, setInputValue] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defence: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    })
    const [error, seterror] = useState({
        name: 'The name must be between 4 and 25 letters',
        image: 'You must complete this field',
        hp: 'Hp must be greater than 0',
        attack: 'Attack must be greater than 0',
        defence: 'Defence must be greater than 0',
        speed: 'You must complete this field',
        height: 'Hegith must be greater than 0',
        weight: 'Weight must be greater than 0',
        types: 'Select at least one type'
    })
    const inputHandler = (e) => {
        if (e.target.name === 'types') return setInputValue({
            ...inputValue,
            types: [...inputValue.types, e.target.value]
        })
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
        seterror(validar({
            ...inputValue,
            [e.target.name]: e.target.value,
        }))
    }
    const disabledHandler = () => {
        return Object.values(error).some(Boolean);
    }
    const updatePokemonExistent = (e) => {
        e.preventDefault();
        const pokemonUpdated = {
            id: id,
            name: inputValue.name,
            image: inputValue.image,
            hp: inputValue.hp,
            attack: inputValue.attack,
            defence: inputValue.defence,
            speed: inputValue.speed,
            height: inputValue.height,
            weight: inputValue.weight,
            types: inputValue.types
        }
        dispatch(updatePokemon(pokemonUpdated))
    }
    return (
        <>
            <div >
                <form action="" className='container-form' onSubmit={updatePokemonExistent}>
                    <label htmlFor="">Name:
                        <input type="text" onChange={inputHandler} name='name' value={inputValue.name} />

                    </label>
                    {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
                    <label htmlFor="">Image:
                        <input type="text" onChange={inputHandler} name='image' value={inputValue.image} />
                    </label>
                    {error.image && <span style={{ color: 'red' }}>{error.image}</span>}

                    <label htmlFor="">Hp:
                        <input type="text" onChange={inputHandler} name='hp' value={inputValue.hp} />
                    </label>

                    {error.hp && <span style={{ color: 'red' }}>{error.hp}</span>}
                    <label htmlFor="">Attack:
                        <input type="text" onChange={inputHandler} name='attack' value={inputValue.attack} />
                    </label>
                    {error.attack && <span style={{ color: 'red' }}>{error.attack}</span>}

                    <label htmlFor="">Defence:
                        <input type="text" onChange={inputHandler} name='defence' value={inputValue.defence} />
                    </label>
                    {error.defence && <span style={{ color: 'red' }}>{error.defence}</span>}

                    <label htmlFor="">Speed:
                        <input type="text" onChange={inputHandler} name='speed' value={inputValue.speed} />
                    </label>

                    {error.speed && <span style={{ color: 'red' }}>{error.speed}</span>}
                    <label htmlFor="">Height:
                        <input type="text" onChange={inputHandler} name='height' value={inputValue.height} />
                    </label>

                    {error.height && <span style={{ color: 'red' }}>{error.height}</span>}
                    <label htmlFor="">Weight:
                        <input type="text" onChange={inputHandler} name='weight' value={inputValue.weight} />
                    </label>

                    {error.weight && <span style={{ color: 'red' }}>{error.weight}</span>}

                    <select name="types" multiple onChange={inputHandler}>{
                        types.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))
                    }</select>

                    {error.types && <span style={{ color: 'red' }}>{error.types}</span>}


                    <button type='submit' disabled={disabledHandler()}>Update Pokemon</button>

                </form>

            </div>

        </>
    )
}

