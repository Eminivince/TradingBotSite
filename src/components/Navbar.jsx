import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/Avatar.png'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prevState => !prevState);
}
  function toggleScroll() {
    setMenuOpen(false);
}



  return (
    <div>
        <>
        <nav className='flex justify-between md:px-24 px-6 ms:py-8 py-4 items-center border-b-2  text-[#001F3E]' onScroll={toggleScroll}>
            <Link to='/'>
                    <h1 className='font-extrabold md:text-3xl text-xl'>XELBOT</h1>
            </Link>
            
            <ul className='md:flex space-x-10 font-bold hidden'>
                <Link to='/'>
                        <li className='cursor-pointer hover:underline'><a href=""></a>Home</li>
                </Link>
                
                <Link to='/'>
                <li className='cursor-pointer hover:underline'><a href=""></a>Services</li>
                </Link>

                <Link to='/'>
                <li className='cursor-pointer hover:underline'><a href=""></a>About Us</li>
                </Link>

                <Link to='/'>
                <li className='cursor-pointer hover:underline'><a href=""></a>Features</li>
                </Link>

                <Link to='/'>
                <li className='cursor-pointer hover:underline'><a href=""></a>Contact Us</li>
                </Link>
            </ul>
            <div className='md:hidden relative text-right'>
              <div className='font-bold text-3xl' onClick={toggleMenu}>
                {menuOpen ? (<AiOutlineClose />) : (<AiOutlineMenu />)}
              </div>
              {menuOpen && (
                <div className='absolute top-12 h-screen opacity-90 w-screen p-6 bg-blue-950 text-white -right-6 text-2xl'>
              <ul className='md:hidden  font-bold'>
                <Link to='/'>
                        <li className='cursor-pointer hover:underline mb-3 active:underline'><a href=""></a>Home</li>
                </Link>
                
                <Link to='/'>
                <li className='cursor-pointer hover:underline mb-3 active:underline'><a href=""></a>Services</li>
                </Link>
                
                <Link to='/'>
                <li className='cursor-pointer hover:underline mb-3 active:underline'><a href=""></a>About Us</li>
                </Link>
                <Link to='/'>
                <li className='cursor-pointer hover:underline mb-3 active:underline'><a href=""></a>Features</li>
                </Link>

                <Link to='/'>
                <li className='cursor-pointer hover:underline active:underline'><a href=""></a>Contact Us</li>
                </Link>
            </ul>
              </div>
              )}
              
            </div>
          
        </nav>
        
        </>
    </div>
  )
}

export default Navbar