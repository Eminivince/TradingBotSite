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

const Withdraw = () => {
    const [isTypeOpen, setIsTypeOpen] = useState(true)
    const [isCoinOpen, setIsCoinOpen] = useState(true)
    const [isNetworkOpen, setIsNetworkOpen] = useState(true)

 


  return (
    <div className='bg-slate-300'>
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='px-24 grid grid-cols-8 gap-3 justify-between space-x-5 mt-6'>
            <div className='profile w-[100%] rounded-md flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer'>
                <img src={Avatar} alt='ProfilePic' className='w-12 hover:animate-pulse duration-300'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>Hi David,</p>
                    <p className='font-semibold text-gray-600 text-sm hover:underline'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-black text-white'>
                <MdAccountBalanceWallet className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p>Wallet balance</p>
                    <p className='text-2xl'>$5,200</p>
                    <p>1% Monthly Growth</p>
                </div>
                <h1 className='text-4xl'>75%</h1>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-green-700 text-white'>
                 <BsFillRocketTakeoffFill className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p>Pending Trade</p>
                    <p className='text-2xl'>$3,600</p>
                    <p>1% Monthly Growth</p>
                </div>
                <h1 className='text-4xl'>25%</h1>
            </div>
        </header>
        <main className='px-24 mt-6 grid grid-cols-8 space-x-6 justify-between'>
            <div className='sidebarr bg-white rounded-md w-[98%] col-span-2 shadow-xl'>
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
            <div className='graphnsection rounded-md w-[100%] col-span-6'>
                <h1 className='bg-white w-full p-4 rounded-md font-bold text-xl text-center text-gray-600 mb-4 shadow-xl'>Withdraw</h1>
                <div className='bg-white shadow-xl p-10 rounded-md'>
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
                            <button type='submit' className='self-center mt-7 bg-green-700 text-white shadow-xl py-4 px-10 flex items-center rounded-md font-bold'>Withdraw</button>
                        </div>
                </div>
                
                
                
            </div>
        </main>
        <div className='mt-8'>
                <Footer />
        </div>
    </div>
  )
}

export default Withdraw