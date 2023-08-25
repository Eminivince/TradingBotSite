import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import {MdSpaceDashboard, MdAccountBalanceWallet, MdSwapHorizontalCircle } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import {FaMoneyCheck} from 'react-icons/fa'
import { AiFillCheckCircle, AiFillCreditCard, AiFillQuestionCircle } from 'react-icons/ai'
import { RiLogoutBoxRLine} from 'react-icons/ri'
import Avatar from '../assets/images/Avatar.png'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {SlArrowUp, SlArrowDown} from 'react-icons/sl'
import Attention from '../assets/images/attantion.png'
import { MobileNav } from '../components/MobileNav'

const Withdraw = () => {
    const [isTypeOpen, setIsTypeOpen] = useState(true)
    const [isCoinOpen, setIsCoinOpen] = useState(true)
    const [isNetworkOpen, setIsNetworkOpen] = useState(true)
    const [haswithdrawn, setHasWithdrawn] = useState(true)

    const toggleHasWithdrawn = () => setHasWithdrawn(prevHasWithdrawn => !prevHasWithdrawn)

 


  return (
    <div className='bg-slate-300 min-h-[110vh] absolute w-[100vw] md:h-[150vh]'>
        
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='md:px-24 md:grid md:grid-cols-8 md:gap-3 flex justify-between md:space-x-5 mt-6 w-[96vw] md:w-full mx-auto'>
            <div className='profile w-[100%] rounded-md md:flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer hidden'>
                <img src={Avatar} alt='ProfilePic' className='w-12 hover:animate-pulse duration-300'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>Hi David,</p>
                    <p className='font-semibold text-gray-600 text-sm hover:underline'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center md:px-4 px-2 shadow-xl mr-1 bg-black text-white'>
                <MdAccountBalanceWallet className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs md:text-base'>Wallet balance</p>
                    <p className='md:text-2xl'>$5,200</p>
                    <p className='text-xs md:text-base'>1% Monthly Growth</p>
                </div>
                <h1 className='md:text-4xl'>75%</h1>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold py-4 items-center md:px-4 px-2 shadow-xl ml-1 bg-green-700 text-white'>
                 <BsFillRocketTakeoffFill className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs md:text-base'>Pending Trade</p>
                    <p className='md:text-2xl'>$3,600</p>
                    <p className='text-xs md:text-base'>1% Monthly Growth</p>
                </div>
                <h1 className='md:text-4xl'>25%</h1>
            </div>
        </header>
        <main className='md:px-24 mt-6 md:grid md:grid-cols-8 md:space-x-6 justify-between'>
            <div className='sidebarr bg-white rounded-md w-[98%] col-span-2 shadow-xl hidden md:block'>
                <div className='mb-14'>
                    <Link to='/Dashboard'>
                            <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400 cursor-pointer duration-300'>
                            <MdSpaceDashboard className='text-4xl text-blue-950'/>
                            <p>Dashboard</p>
                            </div>
                    </Link>
                <Link to='/Deposit'>
                            <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                            <FaMoneyCheck className='text-4xl text-blue-950'/>
                            <p>Deposit</p>
                            </div>
                    </Link>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <AiFillCreditCard className='text-4xl text-blue-950'/>
                    <p>Withdrawal</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <MdSpaceDashboard className='text-4xl text-blue-950'/>
                    <p>Trade</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400'>
                    <MdSpaceDashboard className='text-4xl text-blue-950'/>
                    <p>Transactions</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <BsFillRocketTakeoffFill className='text-4xl text-blue-950'/>
                    <p>Earn</p>
                </div>
                </div>
                <div className='supportt'>
                    <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <AiFillQuestionCircle className='text-4xl text-blue-950'/>
                    <p>Support</p>
                    </div>
                    <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <RiLogoutBoxRLine className='text-4xl text-blue-950'/>
                    <p>Logout</p>
                    </div>
                </div>
                
            </div>
            <div className='rounded-md w-[100%] md:col-span-6'>
                <h1 className='bg-white md:w-full p-4 rounded-md font-bold text-xl text-center text-gray-600 mb-4 shadow-xl w-[96vw] mx-auto'>Withdraw</h1>
                { haswithdrawn &&
                <div className='bg-white shadow-xl md:p-10 p-4 mx-auto rounded-md w-[96vw] md:w-full'>
                    <div className='flex w-full justify-between md:space-x-20 space-x-5'>
                        <div className='w-full'>
                            <h1 className='font-bold text-lg mb-1'>Select Type</h1>
                            <div>
                                <button onClick={() => setIsTypeOpen((prev) => !prev)} className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold'>Crypto
                                {isTypeOpen ? (
                                    <SlArrowDown />
                                ) : (
                                    <SlArrowUp />
                                    
                                )}</button>
                                {/* {isOpen && (
                                    <div className=''>
                                        
                                        <p>Fiat</p>
                                    </div>
                                )} */}
                                
                            </div>
                        </div>
                        <div className='w-full'>
                            <h1 className='font-bold text-lg mb-1'>Select Coin</h1>
                            <div>
                                <button onClick={() => setIsCoinOpen((prev) => !prev)} className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold'>USDT
                                {isCoinOpen ? (
                                    <SlArrowDown />
                                ) : (
                                    <SlArrowUp />
                                    
                                )}</button>
                                {/* {isOpen && (
                                    <div className=''>
                                        
                                        <p>Fiat</p>
                                    </div>
                                )} */}
                                
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-6'>
                            <h1 className='font-bold text-lg mb-1'>Select Network</h1>
                            <div>
                                <button onClick={() => setIsNetworkOpen((prev) => !prev)} className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold'>Binance Smart Chain (BSC)
                                {isNetworkOpen ? (
                                    <SlArrowDown />
                                ) : (
                                    <SlArrowUp />
                                    
                                )}</button>
                                {/* {isOpen && (
                                    <div className=''>
                                        
                                        <p>Fiat</p>
                                    </div>
                                )} */}
                                
                            </div>
                        </div>
                    <div className='w-full mt-6'>
                            <h1 className='font-bold text-lg mb-1'>Wallet Address</h1>
                            <div>
                                <input className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold' placeholder='Paste Your Wallet Address here'/>
                                
                            </div>
                        </div>

                        
                        <div className='flex flex-col'>
                            <div><div className='flex space-x-20'>
                            <div className='w-full mt-6'>
                            <h1 className='font-bold text-lg mb-1'>Amount</h1>
                            <div>
                                <input className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold' placeholder='Enter Amount' type='text'/>
                                
                            </div>
                        </div>
                        <div className='w-full mt-6'>
                            <h1 className='font-bold text-lg mb-1'>Password</h1>
                            <div>
                                <input className='bg-slate-300 shadow-xl p-4 flex items-center w-full rounded-md justify-between font-bold' placeholder='Enter Your Password' type='password'/>
                                
                            </div>
                        </div>
                        </div>
                        
</div>
                            <button type='submit' className='self-center mt-7 bg-green-700 text-white shadow-xl py-4 px-10 flex items-center rounded-md font-bold' onClick={toggleHasWithdrawn}>Withdraw</button>
                        </div>
                </div>
                }
                {haswithdrawn ? (<div></div>) : 
        (<div className='w-[96vw] md:w-full bg-white mx-auto pt-10 pb-6 px-6 mt-4 rounded-lg flex flex-col justify-center text-center md:relative md:top-0'>
            <div className='text-8xl text-green-800 mx-auto mb-5'>
            <AiFillCheckCircle />
            </div>
            <h1 className='text-4xl font-bold mb-3'>Withdrawal Request Submitted</h1>
            <p className='mb-5'>Your withdrawal request is being processed and should be expected to arrive within 30 minutes</p>
            <button type='button' className='bg-slate-800 rounded-lg text-white py-2' onClick={toggleHasWithdrawn}>Back</button>
            
        </div>)}
                
                
                
            </div>
        </main>
        <div className='mt-8 absolute bottom-0 w-full'>
                <MobileNav />
        </div>

        {/* Withdraw Modal */}
        
    </div>
  )
}

export default Withdraw