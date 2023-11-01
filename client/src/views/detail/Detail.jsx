import React from 'react'
import './Detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPokemonById } from '../../redux/actions/action'
import { NavLink, useParams } from 'react-router-dom'
export const Detail = () => {

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.detail)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getPokemonById(id))

    }, [dispatch])

    return (
        <>
            <div className="containerr">
                <div className='container-cardDetail'>
                    <div className='container-cardDetailHeader'>

                        <h1>Nombre: {pokemon.name}</h1>
                    </div>
                    <div className="container-cardDetailBody">
                        <h1>Id: {pokemon.id}</h1>
                        <h2>Altura: {pokemon.height}</h2>
                        <h2>Peso: {pokemon.weight}</h2>
                        <h2>Hp: {pokemon.hp}</h2>
                        <h2>Ataque: {pokemon.attack}</h2>
                        <h2>Defensa: {pokemon.defence}</h2>
                        <h2>Velocidad: {pokemon.speed}</h2>
                        <h2>{pokemon.types?.map(type => type)}</h2>
                        <img src={pokemon.image} alt={pokemon.name} />

                    </div>

                    <div className="container-cardDetailFooter">
                        <NavLink to='/home'>
                            <button>Back</button></NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}
