import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import {MdSpaceDashboard, MdAccountBalanceWallet, MdSwapHorizontalCircle } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import {FaMoneyCheck} from 'react-icons/fa'
import { AiFillCreditCard, AiFillQuestionCircle } from 'react-icons/ai'
import { RiLogoutBoxRLine} from 'react-icons/ri'
import Avatar from '../assets/images/Avatar.png'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {SlArrowUp, SlArrowDown} from 'react-icons/sl'
import Attention from '../assets/images/attantion.png'
import { MobileNav } from '../components/MobileNav'


const Deposit = () => {
    const [isTypeOpen, setIsTypeOpen] = useState(true)
    const [isCoinOpen, setIsCoinOpen] = useState(true)
    const [isNetworkOpen, setIsNetworkOpen] = useState(true)


    

 


  return (
    <div className='bg-slate-300 w-[100vw] h-[105vh] relative'>
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='md:px-24 md:grid md:grid-cols-8 md:gap-3 flex justify-between md:space-x-2 mt-6 mx-auto w-[96vw]'>
            <div className='profile w-[100%] rounded-md md:flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer hidden'>
                <img src={Avatar} alt='ProfilePic' className='w-12 hover:animate-pulse duration-300'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>Hi David,</p>
                    <p className='font-semibold text-gray-600 text-sm hover:underline'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce py-4 w-[100%] rounded-md md:col-span-3 flex justify-between font-bold items-center md:px-4 px-2 shadow-xl bg-black text-white mr-1'>
                <MdAccountBalanceWallet className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs md:text-base'>Wallet balance</p>
                    <p className='md:text-2xl'>$5,200</p>
                    <p className='text-xs md:text-base'>1% Monthly Growth</p>
                </div>
                <h1 className='md:text-4xl'>75%</h1>
            </div>
            <div className='balancce w-[100%] rounded-md md:col-span-3 flex justify-between font-bold items-center md:px-4 px-2 shadow-xl bg-green-700 text-white ml-1'>
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
                <h1 className='bg-white md:w-full p-4 w-[96vw] mx-auto  rounded-md font-bold text-xl text-center text-gray-600 mb-4 shadow-xl'>Deposit</h1>
                <div className='bg-white shadow-xl md:p-10 rounded-md w-[96vw] mx-auto p-4'>
                    <div className='flex w-full justify-between space-x-20'>
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
                        <div className='w-full '>
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
                </div>
                <div className='flex md:space-x-14 space-x-4 mt-6 bg-white md:p-10 p-4 items-center mx-auto  rounded-md shadow-xl font-medium w-[96vw]'>
                    <img src={Attention} alt="warning" className='md:w-32 w-20' />
                    <div className='flex flex-col space-y-2 w-[65vw]'>
                        <p>Send only USDT to this address. Ensure the network is <span className='text-blue-900'>Binance Smart Chain (BEP20).</span></p>
                        <p className='text-gray-600'>Minimun Deposit <span className='text-black font-bold'><br />100 USDT</span></p>
                        <p className='text-gray-600'>Expected arrival & Unlock <span className='text-black font-bold'><br />15 Network Confirmations</span></p>
                        <p className='pt-3 text-green-500 flex-wrap'>0x4cc5B1fFeD90C5f3bAe33178...</p>
                    </div>
                </div>


                
                
            </div>
        </main>
        <div className='mt-8 absolute bottom-0 w-full'>
            <MobileNav />
        
        </div>
    </div>
  )
}

export default Deposit