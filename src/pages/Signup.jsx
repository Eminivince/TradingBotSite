import React from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import Google from '../assets/images/google.png'
import Apple from '../assets/images/apple-logo.png'
import { Link } from 'react-router-dom'
import Heroimg from '../assets/images/Heroimg.png'
import Footer from '../components/Footer'

const Signup = () => {
  return (
    <div className=' min-h-screen pb-8'>
        <Navbar />
        <section className='flex flex-col md:flex-row clear-left text-[#001F3E] md:text-xl md:font-medium md:px-16 px-6 md:space-x-14 md:items-center '>
        <div className=' md:ml-8 signup mt-8 basis-1/2'>
            <h1 className='font-extrabold md:text-5xl text-4xl text-center mb-2'>Create New Account</h1>
            <form className='flex flex-col mb-3'>
                <label htmlFor="fullname" className='mb-1 mt-2 '>Full Name</label>
                <input type='text' id='fullname' placeholder='Enter Your Full Name' className='border border-[#001F3E] p-4 rounded-md'/>
                <label htmlFor="email" className='mb-1 mt-2 '>Email</label>
                <input type='text' id='email' placeholder='Enter Your Email Address' className='border border-[#001F3E]  p-4 rounded-md'/>
                <label htmlFor="password" className='mb-1 mt-2 '>Password</label>
                <input type='password' id='password' placeholder='Enter Your Password' className='border border-[#001F3E] p-4 rounded-md mb-2'/>
                <div className='mb-3 mt-3 flex space-x-3 items-center'>
                    <input type="checkbox" />
                    <p className='text-xs'>I agree with the <span className='text-purple-800'>Terms of Service</span> and <span className='text-purple-800 '>Privacy Policy</span></p>
                </div>
                <button type='submit' className='bg-[#001F3E] p-4 rounded-md text-white hover:brightness-150 duration-300'>Sign Up</button>
            </form>
            <h1 className='text-right mb-8 text-gray-500'>Already have an account? 
            <Link to='/Login'>
                <span className='text-[#001F3E] cursor-pointer'> Log in</span>
            </Link>
            </h1>
            {/* <div className='flex w-full justify-between items-center'>
                <div className='h-[1px] w-[40%] bg-gray-500'></div>
                <p className='text-2xl w-[10%]'>OR</p>
                <div className='h-[1px] w-[40%] bg-gray-500'></div>
            </div> */}
            
        </div>
        <img src={Heroimg} alt="hand" className='basis-1/2 h-[500px] hidden md:block' />
        
        </section>
       
       
        {/* <section className='flex md:justify-between justify-around space-x-5 md:w-[49%] md:pl-24 px-6 md:px-0 mt-8 md:mb-12'>
            <div className='flex  items-center md:space-x-4 space-x-2 md:text-lg font-medium border border-[#001F3E] p-4 rounded-md cursor-pointer hover:bg-slate-200 duration-200 md:w-[100%]'>
                <img src={Google} alt="google" className='md:w-6 w-6' />
                <p className='flex'><span className='hidden md:block pr-1'>Sign up with</span> Google</p>
            </div>
            <div className='flex  items-center md:space-x-4 space-x-2 md:text-lg font-medium border border-[#001F3E] p-4 rounded-md cursor-pointer hover:bg-slate-200 duration-200 md:w-[100%]'>
                <img src={Apple} alt="Apple" className='md:w-6 w-4' />
                <p className='flex'><span className='hidden md:block pr-1'>Sign up with</span> Apple ID</p>
            </div>
            
        </section> */}
        
    </div>
  )
}

export default Signup