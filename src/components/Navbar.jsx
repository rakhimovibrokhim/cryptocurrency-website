import React from 'react'
import { Link } from 'react-router-dom'
import { FaCoins } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className="navbar">
                <FaCoins className='icon' />
                <h1>Crypto <span className="purple">Tracker</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
