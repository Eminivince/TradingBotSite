import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/Avatar.png'

const Navbar = () => {
  return (
    <div>
        <>
        <nav className='flex justify-between md:px-24 px-6 ms:py-8 py-4 items-center border-b-2  text-[#001F3E]'>
            <Link to='/'>
                    <h1 className='font-extrabold md:text-3xl text-xl'>XELBOT</h1>
            </Link>
            
            <ul className='md:flex space-x-10 font-bold hidden'>
                <Link to='/'>
                        <li className='cursor-pointer hover:underline'><a href=""></a>Home</li>
                </Link>
                
                <li className='cursor-pointer hover:underline'><a href=""></a>Services</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>About Us</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>Features</li>
                <li className='cursor-pointer hover:underline'><a href=""></a>Contact Us</li>
            </ul>
            <div className='md:hidden block'>
              <img src={Avatar} alt="avatar" />
            </div>
          
        </nav>
        
        </>
    </div>
  )
}

export default Navbar