import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='flex gap-3 py-2 p-3 justify-end '>
            <Link to="/" className='border p-2'>Product</Link>
            <Link to="/cart" className='border p-2'>Cart</Link>

        </div>
    )
}

export default Navbar