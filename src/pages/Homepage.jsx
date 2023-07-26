import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hand from '../assets/images/Iphonehand.png'
import Balance from '../assets/images/Balance.png'
import Onboarding from '../assets/images/Onboarding.png'
import {BsFillCircleFill} from 'react-icons/bs'
import Undercloud from  '../assets/images/undercloud.png'
import Currency from '../assets/images/Currency.png'
import Ellipse from '../assets/images/Ellipse.png'
import {PiStarFourLight, PiStarFourFill} from 'react-icons/pi'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='text-[#001F3E]'>
        <Navbar />
        <section className='hero--container flex px-24 space-x-14 justify-between mt-20'>


            <div className='flex flex-col space-y-6 basis-3/5'>
                <h1 className='font-extrabold text-6xl'>Welcome to Xelbot - <br />Your Simplified And Assured 1% Daily Profit Trading Platform</h1>
                <p className='text-3xl font-medium'>Effortless Ethereum-Based Arbitrage Trading Platform. Success Made Simple, Invest with ease and grow your profit.</p>
                <button type='button' className='bg-[#001F3E] w-44 p-[20px] text-white mt-7 self-center hover:brightness-150'>
                    
                    <Link to='/Signup'>
                             Get Started
                    </Link>
                    
                   </button>
            </div>
            <div className='basis-2/5'>
                <img src={Hand} alt="tradingheroimage" />
            </div>
        </section>

        <section className='info--home'>
            <div className='bg-[#001F3E] text-white px-28 pt-8 h-[1200px]'>
                <h1 className='text-6xl px-10'>Xelbot offer an automated trading robot with artificial intelligence, user friendly interface and lot of great features</h1>
                <div>
                    
                </div>
                
                <div className='flex'>
                    <div>
                        <div className='bg-white w-[85%] text-[#001F3E] font-bold p-14 space-y-4 mt-14 rounded-lg h-[300px] relative'>
                            <h1 className='text-5xl text-center'>Real-Time Update</h1>
                            <p className='text-xl pl-10'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute left-32 h-[600px]' />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white w-[85%] text-[#001F3E] font-bold p-14 space-y-4 mt-14 rounded-lg h-[300px] relative'>
                            <h1 className='text-5xl text-center'>Real-Time Update</h1>
                            <p className='text-xl pl-10'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute left-32 h-[600px]' />
                        </div>
                    </div>
                    
                </div>

                
            </div>
        </section>

        <section className='on--boarding bg-white text-[#001F3E] mx-24 py-14 text-xl relative'>
            <div className='flex justify-around'>
                    <div className='w-[60%]'>
                <img src={Onboarding} alt="onboardingmobile" className='h-[800px] w-[550px]' />
            </div>
            <div>
                <h1 className='text-5xl font-extrabold mb-8'>3 Quick Steps To Get Started With Xelbot</h1>
                <div className='flex space-x-5'>
                    <div className='designn flex flex-col justify-around text-5xl'>
                        <BsFillCircleFill />
                        <div className='h-24 border-2 w-fit self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        <div className='h-20 border-2 w-fit self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        
                    </div>
                    <div className='flex flex-col space-y-12'>
                        <div>
                            <h1 className='text-4xl font-bold mb-3'>Create Account</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum.</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold mb-3'>Create Account</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum.</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold mb-3'>Create Account</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, harum.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <img src={Undercloud} alt='pagebreak' className='absolute bottom-0' />

            
        </section>

        <section className='featuress bg-white px-24 flex items-center space-x-4'>
            <div className='relative h-fit'>
                <img src={Ellipse} alt="ellipse" className='h-[900px]' />
                <img src={Currency} alt='currency' className='absolute top-56 left-16'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center mb-8 space-x-5'>
                    <PiStarFourLight className='font-extrabold text-4xl' />
                    <h1 className='text-6xl font-extrabold'>Features</h1>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
    </div>
  )
}

export default Homepage