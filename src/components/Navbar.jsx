import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header absolute w-full px-10 py-5 z-1 flex justify-between items-center'>
        <NavLink to="/" className="w-15 h-15 rounded-lg flex justify-center items-center bg-white text-amber-500 text-2xl font-bold shadow-md">
            <p>SB</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar