import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/Avatar.png'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import { MdOutlineSupportAgent } from 'react-icons/md'
import {GiPadlock} from 'react-icons/gi'
import {CiLogout} from 'react-icons/ci'

const Usernav = () => {
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

                <Link to='/ContactUs'>
                <li className='cursor-pointer hover:underline'><a href=""></a>Contact Us</li>
                </Link>
            </ul>
            <div className='md:hidden relative text-center'>
              <div className='font-bold text-3xl' onClick={toggleMenu}>
                {menuOpen ? (<AiOutlineClose />) : (<AiOutlineMenu />)}
              </div>
              {menuOpen && (
                <div className='absolute top-12 h-screen w-screen p-6 bg-blue-950 text-white -right-6 text-2xl'>
              <div className='bg-white text-black p-4 rounded-md'>
                <h1 className='font-semibold'>Hi {"David"}</h1>
                <p className='text-xs'>{"ayomidedavid@gmail.com"}</p>
              </div>
              <div className='flex  space-x-4 items-center text-black bg-white p-3 mt-4 rounded-md'>
                <div className='text-4xl'>
                <BiUserCircle />
                </div>
                <p>Account Settings</p>
              </div>
              <Link to='/ContactUs'>
              <div className='flex  space-x-4 items-center text-black bg-white p-3 mt-4 rounded-md'>
                <div className='text-4xl'>
                <MdOutlineSupportAgent />
                </div>
                <p>Support</p>
              </div>
              </Link>
              <div className='flex  space-x-4 items-center text-black bg-white p-3 mt-4 rounded-md'>
                <div className='text-4xl'>
                <GiPadlock />
                </div>
                <p>Login and Security</p>
              </div>
              <div className='flex  space-x-4 items-center text-black bg-white p-3 mt-4 rounded-md'>
                <div className='text-4xl'>
                <CiLogout />
                </div>
                <p>Logout</p>
              </div>
              </div>
              )}
              
            </div>
          
        </nav>
        
        </>
    </div>
  )
}

export default Usernav