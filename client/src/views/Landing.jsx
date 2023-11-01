import React from 'react'
import './Landing.css'
import { NavLink } from 'react-router-dom'
export const Landing = () => {

    return (
        <div className='container'>
            <p>Bienvenidos a mi Proyecto de Pokemon</p>
            <NavLink to='/home'> <button>Ingresar!!</button></NavLink>
        </div>
    )
}
