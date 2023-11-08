import React from 'react'
import { Card } from '../card/Card'
import './Cards.css'
export const Cards = ({ pokemons }) => {
    return (
        <>
            <div className='container-allCards'>
                <div className='container-cards'>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Card
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                />)
                        })
                    }
                </div>
                <div className='cards-sidebar'>
                    <img src="pokemon.png" alt="" />
                </div>

            </div>


        </>


    )
}
