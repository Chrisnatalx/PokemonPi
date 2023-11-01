import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
export const Card = ({ pokemon }) => {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(`/detail/${pokemon.id}`);
    }
    return (
        <div className='container-card'>
            <div className='container-card-header'>
                <h1>{pokemon.name}</h1>
            </div>
            <div className='container-cardBody'>
                <h1>Id: {pokemon.id}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <h2>{pokemon.types?.map(type => type)}</h2>
            </div>
            <div className='container-cardFooter'>
                <button onClick={navigateHandler}>Ver Mas</button>
            </div>
        </div>
    )
}
