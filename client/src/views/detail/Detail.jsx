import React, { useState } from 'react'
import './Detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPokemonById, deletePokemon } from '../../redux/actions/action'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
export const Detail = () => {

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.detail)
    const [isNumber, setIsNumber] = useState(false)
    const { id } = useParams()

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(`/update/${pokemon.id}`);
    }
    const deletePokemonSubmit = (id) => {
        dispatch(deletePokemon(id))
    }
    useEffect(() => {
        if (!isNaN(id)) {
            setIsNumber(true)
        } else {
            setIsNumber(false)
        }
        dispatch(getPokemonById(id))
    }, [dispatch, id]);
    return (
        <>
            {isNumber ?

                <div className="containerr">
                    <div className='container-cardDetail'>
                        <div className='container-cardDetailHeader'>
                            <h1>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h1>
                        </div>
                        <div className="container-cardDetailBody">
                            <h1>Id: {pokemon.id}</h1>
                            <h2>Height: {pokemon.height}</h2>
                            <h2>Weight: {pokemon.weight}</h2>
                            <h2>Hp: {pokemon.hp}</h2>
                            <h2>Attack: {pokemon.attack}</h2>
                            <h2>Defense: {pokemon.defence}</h2>
                            <h2>Speed: {pokemon.speed}</h2>
                            <h2>Types: {pokemon.types?.join(', ')}</h2>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </div>
                        <div className="container-cardDetailFooter">
                            <NavLink to='/home'>
                                <button>Back</button></NavLink>
                        </div>
                    </div>
                </div>


                :
                <div className="containerr">
                    <div className='container-cardDetail'>
                        <div className='container-cardDetailHeader'>
                            <h1>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h1>
                        </div>
                        <div className="container-cardDetailBody">
                            <h1>Id: {pokemon.id}</h1>
                            <h2>Height: {pokemon.height}</h2>
                            <h2>Weight: {pokemon.weight}</h2>
                            <h2>Hp: {pokemon.hp}</h2>
                            <h2>Attack: {pokemon.attack}</h2>
                            <h2>Defense: {pokemon.defence}</h2>
                            <h2>Speed: {pokemon.speed}</h2>
                            <h2>Types: {pokemon.types?.join(', ')}</h2>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </div>
                        <div className="container-cardDetailFooter">
                            <NavLink to='/home'>
                                <button>Back</button>
                            </NavLink>

                            <button onClick={navigateHandler}>Update</button>

                            <NavLink to='/home'><button onClick={() => deletePokemonSubmit(pokemon.id)}>Delete</button></NavLink>

                        </div>
                    </div>
                </div>
            }



        </>
    )
}
