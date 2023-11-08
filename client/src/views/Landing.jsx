import React from 'react'
import './Landing.css'
import { NavLink } from 'react-router-dom'
export const Landing = () => {

    return (
        <div className='container'>
            <h1>Bienvenidos a mi Proyecto de Pokemon</h1>
            <NavLink to='/home'> <button>Ingresar!!</button></NavLink>
        </div>
    )
}
