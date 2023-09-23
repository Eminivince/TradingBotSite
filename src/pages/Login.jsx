import React from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import Google from '../assets/images/google.png'
import Apple from '../assets/images/apple-logo.png'
import { Link } from 'react-router-dom'
import Heroimg from '../assets/images/Heroimg.png'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className=' min-h-screen pb-8'>
        <Navbar />
        <section className='flex flex-col md:flex-row clear-left text-[#001F3E] md:text-xl md:font-medium md:px-16 px-6 md:space-x-14 md:items-center'>
        <div className=' md:ml-8 signup mt-8 basis-1/2'>
            <h1 className='font-extrabold md:text-5xl text-4xl text-center mb-2'>Login to your Account</h1>
            <form className='flex flex-col mb-3'>
                <label htmlFor="fullname" className='mb-1 mt-2 '>Email</label>
                <input type='text' id='fullname' placeholder='Enter Your Email Address' className='border border-[#001F3E]  p-4 rounded-md'/>
                <label htmlFor="fullname" className='mb-1 mt-2 '>Password</label>
                <input type='password' id='fullname' placeholder='Enter Your Password' className='border border-[#001F3E] p-4 rounded-md mb-2'/>
                <div className='mb-3 mt-3 flex space-x-3 items-center'>
                    <input type="checkbox" />
                    <p className='text-xs'>Keep me logged in</p>
                </div>

                
                <Link to='/Dashboard'>
                    <div className='bg-[#001F3E] p-4 rounded-md text-white hover:brightness-150 duration-300 text-center text-2xl'>Login</div>
                        
                </Link>

                
                
                
            </form>
            <h1 className='text-right mb-8 text-gray-500'>Don't have an account? 
            <Link to='/Signup'>
                <span className='text-[#001F3E] cursor-pointer'> Sign Up</span>
            </Link>
            </h1>
            
            
        </div>
        <img src={Heroimg} alt="hand" className='basis-1/2 h-[500px] hidden md:block' />
        
        </section>
       
       
        
        
    </div>
  )
}

export default Login