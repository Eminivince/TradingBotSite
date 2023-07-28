import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg from '../assets/images/Heroimg.png'
import Balance from '../assets/images/Balance.png'
import Onboarding from '../assets/images/Onboarding.png'
import {BsFillCircleFill} from 'react-icons/bs'
import Undercloud from  '../assets/images/undercloud.png'
import Currency from '../assets/images/Currency.png'
import Ellipse from '../assets/images/Ellipse.png'
import {PiStarFourLight, PiStarFourFill} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import StraightMobile from '../assets/images/Onboardingstr.png'


const Homepage = () => {
  return (
    <div className='text-[#001F3E]'>
        <Navbar />
        <section className='hero--container md:flex md:px-24 px-6 md:space-x-14 justify-between md:mt-20 mt-10'>


            <div className='flex flex-col space-y-6 basis-3/5 mb-4'>
                <h1 className='font-extrabold md:text-6xl text-3xl text-center md:text-left'>Welcome to Xelbot; Your Simplified And Assured 1% Daily Profit Trading Platform</h1>
                <p className='md:text-3xl font-medium text-center md:text-left'>Effortless Ethereum-Based Arbitrage Trading Platform. Success Made Simple, Invest with ease and grow your profit.</p>
                <button type='button' className='bg-[#001F3E] md:w-44 md:p-[20px] p-[10px] text-white mt-7 self-center hover:brightness-150'>
                    
                    <Link to='/Signup'>
                             Get Started
                    </Link>
                    
                   </button>
            </div>
            <div className='basis-2/5 mb-4'>
                <img src={Heroimg} alt="tradingheroimage" className='border-black' />
            </div>
        </section>

        <section className='info--home'>
            <div className='bg-[#001F3E] text-white md:px-28 px-6 md:pt-8 pt-4 h-[1200px]'>
                <h1 className='md:text-6xl text-xl text-center md:text-left md:px-10'>Xelbot offer an automated trading robot with artificial intelligence, user friendly interface and lot of great features</h1>
                <div>
                    
                </div>
                
                <div className='md:flex flex flex-col space-y-10'>
                    <div>
                        <div className='bg-white md:w-[85%] text-[#001F3E] font-bold md:p-14 md:space-y-4 md:mt-14 mt-4 rounded-lg md:h-[300px] h-[200px] relative px-4 md:px-0'>
                            <h1 className='md:text-5xl text-3xl pt-3 md:pt-0 text-center'>Real-Time Update</h1>
                            <p className='text-xl text-center md:text-right mt-3 md:mt-0 mb-3 md:mb-0 md:pl-10'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute md:left-32 h-[600px] left-10 hidden md:block' />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white md:w-[85%] text-[#001F3E] font-bold md:p-14 md:space-y-4 md:mt-14 mt-4 rounded-lg md:h-[300px] h-[250px] relative px-4 md:px-0'>
                            <h1 className='md:text-5xl text-3xl pt-3 md:pt-0 text-center'>Real-Time Update</h1>
                            <p className='text-xl text-center md:text-right mt-3 md:mt-0 mb-3 md:mb-0 md:pl-10'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute md:left-32 md:h-[600px] h-[500px] left-[65px]' />
                        </div>
                    </div>
                    
                </div>

                
            </div>
        </section>

        <section className='on--boarding bg-white text-[#001F3E] md:mx-24 md:py-14 text-xl relative px-6 md:px-0'>
            <div className='md:flex justify-around flex md:flex-row flex-col-reverse items-center'>
                    <div className='w-[60%]'>
                <img src={Onboarding} alt="onboardingmobile" className='md:h-[800px] md:w-[550px] hidden md:block' />
                <img src={StraightMobile} alt="onboardingmobile" className='md:h-[800px] md:w-[500px] md:hidden mt-6' />
            </div>
            <div>
                <h1 className='md:text-5xl text-2xl text-center md:text-left font-extrabold md:mb-8 mb-4 mt-4 md:mt-4'>3 Quick Steps To Get Started With Xelbot</h1>
                <div className='flex space-x-5'>
                    <div className='designn flex flex-col justify-around md:text-5xl text-xl'>
                        <BsFillCircleFill />
                        <div className='md:h-20 border-2 w-fit self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        <div className='md:h-20 border-2 w-fit self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        
                    </div>
                    <div className='flex flex-col md:space-y-12 space-y-6'>
                        <div>
                            <h1 className='md:text-4xl text-2xl font-bold mb-3'>Create Account</h1>
                            <p className='text-base md:text-medium'>Simply open Xelbot on your brower app and proceed to create an account</p>
                        </div>
                        <div>
                            <h1 className='md:text-4xl text-2xl font-bold mb-3'>Deposit To Wallet</h1>
                            <p className='text-base md:text-medium'>Fund your Xelbot account with our easy made funding options either by card or transfer</p>
                        </div>
                        <div>
                            <h1 className='md:text-4xl text-2xl font-bold mb-3'>Select coin, buy and sell</h1>
                            <p className='text-base md:text-medium'>Select your preferred coin, make purchase, sit back and enjoy assure daily abitrage profit return</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <img src={Undercloud} alt='pagebreak' className=' absolute bottom-0 left-0' />

            
        </section>

        <section className='featuress bg-white md:px-24 px-6 md:flex items-center md:space-x-4 mt-8 md:mt-0  flex flex-col-reverse'>
            <div className='relative h-fit'>
                <img src={Ellipse} alt="ellipse" className='md:h-[900px]' />
                <img src={Currency} alt='currency' className='absolute md:top-56 top-0 md:left-16'/>
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mx-auto'>
                <div className='flex items-center md:mb-8 mb-4 space-x-5'>
                    <PiStarFourLight className='font-extrabold text-4xl' />
                    <h1 className='md:text-6xl text-2xl font-extrabold'>Features</h1>
                </div>
                <div className='flex flex-col space-y-3'>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-2xl' />
                        <h1 className='md:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
    </div>
  )
}

export default Homepage