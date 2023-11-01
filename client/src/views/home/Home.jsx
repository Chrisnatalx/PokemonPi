import React from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllPokemons } from '../../redux/actions/action'
import { Cards } from '../../components/cards/Cards'
export const Home = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {

        dispatch(getAllPokemons())

    }, [dispatch])

    return (
        <>
            <div className='container-home'>
                <Cards pokemons={pokemons} />
            </div>

        </>
    )
}
