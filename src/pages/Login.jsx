import React from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import Google from '../assets/images/google.png'
import Apple from '../assets/images/apple-logo.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
        <Navbar />
        <section className='flex relative clear-left text-[#001F3E] text-xl font-medium'>
        <div className=' ml-8 signup w-[50%] px-24 mt-8'>
            <h1 className='font-extrabold text-6xl mb-2'>Create New Account</h1>
            <form className='flex flex-col mb-3'>
                <label htmlFor="fullname" className='mb-1 mt-2 '>Email</label>
                <input type='text' id='fullname' placeholder='Enter Your Full Name' className='border border-[#001F3E]  p-4 rounded-md'/>
                <label htmlFor="fullname" className='mb-1 mt-2 '>Password</label>
                <input type='password' id='fullname' placeholder='Enter Your Password' className='border border-[#001F3E] p-4 rounded-md mb-2'/>
                <div className='mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
                
                <button type='submit' className='bg-[#001F3E] p-4 rounded-md text-white hover:brightness-150 duration-300 mb-3'>
                    <Link to='/Dashboard'>
                    Login
                </Link></button>
            </form>
            <div className='relative'>
                <hr/>
                <p className='text-4xl'>OR</p>
            </div>
            
        </div>
        <img src={Hand} alt="hand" className='h-[700px] absolute -top-32 right-28' />
        
        </section>
       
       
        <section className='flex justify-between w-[46%] pl-32 mt-8 mb-12'>
            <div className='flex  items-center space-x-6 text-lg font-medium border border-[#001F3E] p-4 rounded-md cursor-pointer hover:bg-slate-200 duration-200'>
                <img src={Google} alt="google" className='w-10' />
                <p>Login with Google</p>
            </div>
            <div className='flex  items-center space-x-6 text-lg font-medium border border-[#001F3E] p-4 rounded-md cursor-pointer hover:bg-slate-200 duration-200'>
                <img src={Apple} alt="Apple" className='w-10' />
                <p>Login with Apple ID</p>
            </div>
            
        </section>
        <Footer />
        
        
    </div>
  )
}

export default Login