import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { filterByType, getAllPokemons, getPokemonByName, getTypes, orderByAttack, orderById, orderByName, reset, } from '../../redux/actions/action'
import { Cards } from '../../components/cards/Cards'
import { Pagination } from '../../components/pagination/Pagination'
import './Home.css'

const pokemonPerPage = 12
export const Home = () => {

    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.allPokemons)
    const pokemonTypes = useSelector(state => state.types)

    const totalPokemons = pokemons?.length
    const totalPage = Math.ceil(totalPokemons / pokemonPerPage)
    const [currentPage, setCurrentPage] = useState(0)
    const [inputValue, setInputValue] = useState('')


    const startPokes = currentPage * pokemonPerPage
    const endPokes = startPokes + pokemonPerPage
    const pokemonShow = pokemons?.slice(startPokes, endPokes)
    const nextHandler = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    }


    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handlerSubmit = () => {
        dispatch(getPokemonByName(inputValue))
    }
    const handlerReset = () => {
        setInputValue('')
        dispatch(reset())
    }
    const sortHandler = (e) => {
        dispatch(orderById(e.target.value));
    }
    const sortByName = (e) => {
        dispatch(orderByName(e.target.value));
    }
    const sortByType = (e) => {
        dispatch(filterByType(e.target.value))
    }
    const sortByAttack = (e) => {
        dispatch(orderByAttack(e.target.value))
    }
    useEffect(() => {

        dispatch(getAllPokemons())
        dispatch(getTypes())

    }, [dispatch,])
    return (


        <>
            <div>
                <div className='inputHome'>
                    <input type="text" onChange={handlerInputChange} value={inputValue} placeholder='Buscar Pokemon...' />
                    <button onClick={handlerSubmit}>Search</button>
                    <button onClick={handlerReset}>Reset</button>

                    <select onChange={sortHandler}>
                        {["API", "DATABASE"].map((order) => (
                            <option key={order} value={order}>
                                {order}
                            </option>
                        ))}
                    </select>

                    <select onChange={sortByName}>
                        {["Ascendent", "Descendent"].map((order) => (
                            <option key={order} value={order}>
                                {order}
                            </option>
                        ))}
                    </select>
                    <select onChange={sortByAttack}>
                        {["MaxAttack", "MinAttack"].map((order) => (
                            <option key={order} value={order}>
                                {order}
                            </option>
                        ))}
                    </select>
                    <select onChange={sortByType}>
                        {pokemonTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='container-home'>

                    <div className='container-homeCards'>
                        <Cards pokemons={pokemonShow} />
                    </div>
                    <div className='pagination-container'>
                        <Pagination nextHandler={nextHandler} prevHandler={prevHandler} currentPage={currentPage} />
                    </div>
                </div>
            </div>


        </>

    )
}
