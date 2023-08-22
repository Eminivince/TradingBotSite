import React from 'react'
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
import { MobileNav } from '../components/MobileNav'

const Trade = () => {

 


  return (
    <div className='bg-slate-300 pb-8 relative h-[110vh]'>
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='md:px-24 md:grid md:grid-cols-8 md:gap-3 flex justify-between md:space-x-5 mt-6 w-[96vw] mx-auto'>
            <div className='profile w-[100%] rounded-md md:flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer hidden'>
                <img src={Avatar} alt='ProfilePic' className='w-12 hover:animate-pulse duration-300'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>Hi David,</p>
                    <p className='font-semibold text-gray-600 text-sm hover:underline'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center md:px-4 px-2 py-4 mr-1 shadow-xl bg-black text-white'>
                <MdAccountBalanceWallet className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs md:text-base'>Wallet balance</p>
                    <p className='md:text-2xl'>$5,200</p>
                    <p className='text-xs md:text-base'>1% Monthly Growth</p>
                </div>
                <h1 className='nd:text-4xl'>75%</h1>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center md:px-4 px-2 py-4 ml-1 shadow-xl bg-green-700 text-white'>
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
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <FaMoneyCheck className='text-4xl text-blue-950'/>
                    <p>Deposit</p>
                </div>
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
            <div className='rounded-md shadow-xl md:grid md:grid-cols-2 md:gap-3 md:w-[100%] w-[96vw] mx-auto col-span-6'>
                <div className='bg-white shadow-xl h-[100%] rounded-md p-2 flex flex-col space-y-4 items-center'>
                    <div className='mb-1 self-start'>
                        <div className='py-2 px-4 rounded-md text-white bg-blue-950'>
                            Select
                        </div>
                    </div>
                    <div className='flex  w-full justify-between space-x-2 md:space-x-0'>
                        <div className='py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md'>Differences</div>
                        <div className='py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md'>Buy From</div>
                        <div className='py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md'>Sell At</div>
                    </div>

                    <div className=' w-full flex justify-between py-2 border-2 items-center text-center font-medium border-t-blue-950 border-b-blue-950 px-4 hover:bg-slate-300 duration-200 rounded-md'>
                        <div className='flex items-center space-x-2'>
                                <div className='text-2xl'>
                                <MdSwapHorizontalCircle />
                                </div>
                            <div className='flex flex-col'>
                                <p>%81.29</p>
                                <h1>ETH<span>/BTC</span></h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className='font-bold'>Binance</p>
                            <h1 className='text-green-700'>2,980.00</h1>
                        </div>
                        <div>
                            <p className='font-bold'>Kucoin</p>
                            <h1 className='text-red-00'>2,850.00</h1>
                        </div>

                        
                    </div>
                    <div className=' w-full flex justify-between py-2 border-2 items-center text-center font-medium border-t-blue-950 border-b-blue-950 px-4 hover:bg-slate-300 duration-200 rounded-md'>
                        <div className='flex items-center space-x-2'>
                                <div className='text-2xl'>
                                <MdSwapHorizontalCircle />
                                </div>
                            <div className='flex flex-col'>
                                <p>%81.29</p>
                                <h1>ETH<span>/BTC</span></h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className='font-bold'>Binance</p>
                            <h1 className='text-green-700'>2,980.00</h1>
                        </div>
                        <div>
                            <p className='font-bold'>Kucoin</p>
                            <h1 className='text-red-00'>2,850.00</h1>
                        </div>

                        
                    </div>
                    <div className=' w-full flex justify-between py-2 border-2 items-center text-center font-medium border-t-blue-950 border-b-blue-950 px-4 hover:bg-slate-300 duration-200 rounded-md'>
                        <div className='flex items-center space-x-2'>
                                <div className='text-2xl'>
                                <MdSwapHorizontalCircle />
                                </div>
                            <div className='flex flex-col'>
                                <p>%81.29</p>
                                <h1>ETH<span>/BTC</span></h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className='font-bold'>Binance</p>
                            <h1 className='text-green-700'>2,980.00</h1>
                        </div>
                        <div>
                            <p className='font-bold'>Kucoin</p>
                            <h1 className='text-red-00'>2,850.00</h1>
                        </div>

                        
                    </div>
                    <div className=' w-full flex justify-between py-2 border-2 items-center text-center font-medium border-t-blue-950 border-b-blue-950 px-4 hover:bg-slate-300 duration-200 rounded-md'>
                        <div className='flex items-center space-x-2'>
                                <div className='text-2xl'>
                                <MdSwapHorizontalCircle />
                                </div>
                            <div className='flex flex-col'>
                                <p>%81.29</p>
                                <h1>ETH<span>/BTC</span></h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className='font-bold'>Binance</p>
                            <h1 className='text-green-700'>2,980.00</h1>
                        </div>
                        <div>
                            <p className='font-bold'>Kucoin</p>
                            <h1 className='text-red-00'>2,850.00</h1>
                        </div>

                        
                    </div>
                    <div className=' w-full flex justify-between py-2 border-2 items-center text-center font-medium border-t-blue-950 border-b-blue-950 px-4 hover:bg-slate-300 duration-200 rounded-md'>
                        <div className='flex items-center space-x-2'>
                                <div className='text-2xl'>
                                <MdSwapHorizontalCircle />
                                </div>
                            <div className='flex flex-col'>
                                <p>%81.29</p>
                                <h1>ETH<span>/BTC</span></h1>
                            </div>
                        </div>
                        
                        <div>
                            <p className='font-bold'>Binance</p>
                            <h1 className='text-green-700'>2,980.00</h1>
                        </div>
                        <div>
                            <p className='font-bold'>Kucoin</p>
                            <h1 className='text-red-00'>2,850.00</h1>
                        </div>

                        
                    </div>

                    
                      
                </div>
                <div className='bg-white shadow-xl h-[100%] rounded-md p-2 md:flex flex-col justify-between items-center hidden'>
                    <div className='mb-1 self-start'>
                        <div className='py-2 px-4 rounded-md text-white bg-blue-950'>
                            Confirm
                        </div>
                    </div>
                    <div className='mb-1 flex flex-col items-center'>
                        <p className='font-medium text-gray-400'>Total Balance</p>
                        <h1 className='font-bold text-2xl'>$<span>3,600.00</span></h1>
                    </div>

                    <div className=' w-fit py-2 px-12 rounded-md bg-blue-950 text-white '>
                        <button type='submit'>TRADE</button>
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

export default Trade