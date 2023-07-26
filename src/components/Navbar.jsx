import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <>
        <nav className='flex justify-between px-24 py-8 items-center border-b-2  text-[#001F3E]'>
            <Link to='/'>
                    <h1 className='font-extrabold text-3xl'>XELBOT</h1>
            </Link>
            
            <ul className='flex space-x-10 font-bold'>
                <Link to='/'>
                        <li className='cursor-pointer hover:underline'><a href=""></a>Home</li>
                </Link>
                
                <li className='cursor-pointer hover:underline'><a href=""></a>Services</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>About Us</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>Features</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>Contact Us</li>
            </ul>
        </nav>
        
        </>
    </div>
  )
}

export default Navbar