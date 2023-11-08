import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Logo } from '../logo/Logo'
export const Navbar = () => {
    return (
        <> <div className='container-navbar'>
            <div className='container-logo'>
                <NavLink to='/home'><Logo /></NavLink>

            </div>
            <div className='container-buttons'>

                <NavLink to='/home'><button>Home</button></NavLink>
                <NavLink to='/form'><button>CreatePokemon</button></NavLink>
            </div>
        </div>



        </>
    )
}
