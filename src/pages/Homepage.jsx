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
import Procedure from '../assets/images/Procedure.png'
import Robot from '../assets/images/AiRobot.png'
import Features from '../assets/images/Features.jpg'


const Homepage = () => {
  return (
    <div className='text-[#001F3E]'>
        <Navbar />
        <section className='hero--container md:flex md:px-24 px-6 md:space-x-14 justify-between md:mt-20 mt-10'>


            <div className='flex flex-col space-y-6 basis-3/5 mb-4 items-center'>
                <h1 className='font-extrabold md:text-6xl text-3xl text-center md:text-left'>Welcome to Xelbot; Your Simplified And Assured 1% Daily Profit Trading Platform</h1>
                <p className='md:text-3xl font-medium text-center md:text-left'>Effortless Ethereum-Based Arbitrage Trading Platform. Success Made Simple, Invest with ease and grow your profit.</p>
                
                <div className='md:self-start'>
                    <Link to='/Signup'>
                    <button type='button' className='bg-[#001F3E] md:w-44 md:p-[20px] py-[14px] px-[30px] text-white mt-7 hover:brightness-150  rounded-md'>
                    
                             Get Started
                    
                   </button>

                    </Link>
                </div>

                
                
            </div>
            <div className='basis-2/5 mb-10 mt-10'>
                <img src={Heroimg} alt="tradingheroimage" className='border-black' />
            </div>
        </section>

        <section className='info--home'>
            <div className='bg-[#001F3E] text-white md:px-28 px-6 md:pt-8 pt-4 md:h-[1200px] h-[1060px]'>
                <h1 className='md:text-5xl text-xl text-center md:px-10'>Xelbot offer an automated trading robot with artificial intelligence, user friendly interface and lot of great features</h1>
                <div>
                    
                </div>
                
                <div className='md:flex flex flex-col md:flex-row space-y-10 md:space-y-0'>
                    <div>
                        <div className='bg-white md:w-[85%] text-[#001F3E] font-bold md:p-14 md:space-y-4 md:mt-14 mt-4 rounded-lg md:h-[300px] h-[200px] relative px-4 md:px-6'>
                            <h1 className='md:text-5xl text-2xl pt-3 md:pt-0 text-center'>Real-Time Update</h1>
                            <p className='text-lg text-center md:text-center mt-3 md:mt-0 mb-3 md:mb-0'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute md:left-20 h-[600px] left-10 hidden md:block' />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white md:w-[85%] text-[#001F3E] font-bold md:p-14 md:space-y-4 md:mt-14 mt-4 rounded-lg md:h-[300px] h-[250px] relative px-4 md:px-6'>
                            <h1 className='md:text-5xl text-2xl pt-3 md:pt-0 text-center'>Real-Time Update</h1>
                            <p className='text-lg text-center md:text-center mt-3 md:mt-0 mb-3 md:mb-0'>Xelbot analyses market and automatically provides real time market update on various crypto currency</p>
                            
                            <img src={Balance} alt="Balance" className='absolute md:left-20 md:h-[600px] h-[500px] left-[70px]' />
                        </div>
                    </div>
                    
                </div>

                
            </div>
        </section>

        <section className='on--boarding bg-white text-[#001F3E] md:py-8 text-xl relative px-6 md:px-0'>
            <div className='md:flex justify-around md:space-x-10 flex md:flex-row flex-col-reverse items-center md:mx-20 md:pb-40'>
            <div className='md:w-[60%] mb-16 md:mb-0'>
                <img src={Robot} alt="onboardingmobile" className=' md:w-[550px]' />
            </div>
            <div>
                <h1 className='md:text-4xl md:pl-12 text-2xl text-center md:text-left font-extrabold md:mb-8 mb-4 mt-4 md:mt-4'>3 Quick Steps To Get Started With Xelbot</h1>
                <div className='flex space-x-5'>
                    <div className='designn hidden md:flex flex-col md:justify-around md:text-3xl text-xl'>
                        <BsFillCircleFill/>
                        <div className='md:h-20 border-2 md:w-fit md:self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        <div className='md:h-20 border-2 md:w-fit md:self-center border-[#001F3E] '/>
                        <BsFillCircleFill />
                        
                    </div>
                    <div className='flex flex-col md:space-y-12 space-y-3'>
                        <div>
                            <h1 className='md:text-3xl text-2xl font-bold md:mb-3 mb-1'>Create Account</h1>
                            <p className='text-base md:text-medium'>Simply open Xelbot on your brower app and proceed to create an account</p>
                        </div>
                        <div>
                            <h1 className='md:text-3xl text-2xl font-bold md:mb-3 mb-1'>Deposit To Wallet</h1>
                            <p className='text-base md:text-medium'>Fund your Xelbot account with our easy made funding options either by card or transfer</p>
                        </div>
                        <div>
                            <h1 className='md:text-3xl text-2xl font-bold md:mb-3 mb-1'>Select coin, buy and sell</h1>
                            <p className='text-base md:text-medium'>Select your preferred coin, make purchase, sit back and enjoy assure daily abitrage profit return</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <img src={Undercloud} alt='pagebreak' className='md:h-40 w-screen absolute bottom-0 left-0 ' />

            
        </section>

        <section className='featuress bg-white md:px-24 px-6 md:flex items-center md:space-x-4 md:mt-0 md:flex-row flex-col-reverse flex'>
            <div className='md:w-[50%] mt-6 md:mt-0'>
                <img src={Features} alt='currency' className=''/>
            </div>
            <div className='flex flex-col mt-10 md:mt-0 mx-auto md:w-[50%]'>
                <div className='flex items-center md:mb-8 mb-4 space-x-5 self-center md:self-start'>
                    <PiStarFourLight className='font-extrabold text-4xl hidden md:block' />
                    <h1 className='md:text-4xl text-2xl font-extrabold'>Features</h1>
                </div>
                <div className='flex flex-col md:space-y-3 space-y-2'>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-xl' />
                        <h1 className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-xl' />
                        <h1 className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-xl' />
                        <h1 className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-xl' />
                        <h1 className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                    <div className='flex items-center space-x-8'>
                        <PiStarFourFill className='font-extrabold text-xl' />
                        <h1 className='md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum!</h1>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
    </div>
  )
}

export default Homepage