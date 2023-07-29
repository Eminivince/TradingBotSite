import React from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import {MdSpaceDashboard, MdAccountBalanceWallet } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import {FaMoneyCheck} from 'react-icons/fa'
import { AiFillCreditCard, AiFillQuestionCircle } from 'react-icons/ai'
import { RiLogoutBoxRLine} from 'react-icons/ri'
import Avatar from '../assets/images/Avatar.png'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className='bg-slate-300 h-[120vh]'>
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='md:px-24 md:grid md:grid-cols-8 md:gap-3 justify-between md:space-x-5 mt-6 flex px-2'>
            <div className='profile w-[100%] rounded-md md:flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer hidden'>
                <img src={Avatar} alt='ProfilePic' className='w-12 hover:animate-pulse duration-300'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold text-2xl'>Hi David,</p>
                    <p className='font-semibold text-gray-600 text-sm hover:underline'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce w-[49%] rounded-md md:col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-black text-white py-6 md:py-0'>
                <MdAccountBalanceWallet className='md:text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs'>Wallet balance</p>
                    <p className='md:text-2xl'>$5,200</p>
                    <p className='hidden md:block'>1% Monthly Growth</p>
                </div>
                <h1 className='md:text-4xl'>75%</h1>
            </div>
            <div className='balancce w-[49%] rounded-md md:col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-green-700 text-white py-6 md:py-0'>
                 <BsFillRocketTakeoffFill className='md:text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p className='text-xs'>Pending Trade</p>
                    <p className='md:text-2xl'>$3,600</p>
                    <p className='hidden md:block'>1% Monthly Growth</p>
                </div>
                <h1 className='md:text-4xl'>25%</h1>
            </div>
        </header>
        <main className='px-24 mt-6 grid grid-cols-8 space-x-6 justify-between'>
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
                    
                <Link to='/Withdraw'>
                    <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <AiFillCreditCard className='text-4xl text-blue-950'/>
                        <p>Withdraw</p>
                    </div>
                </Link>
                <Link to='/Trade'>
                    <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300'>
                    <MdSpaceDashboard className='text-4xl text-blue-950'/>
                        <p>Trade</p>
                    </div>
                </Link>
                
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
            <div className='graphnsection w-[100%] col-span-6  rounded-md shadow-xl flex flex-col space-y-4'>
                <div className='bg-white shadow-xl h-[65%] rounded-md p-2 flex flex-col justify-between items-center'>
                    <div className='mb-1 self-start'>
                        <div className='py-2 px-4 rounded-md text-white bg-blue-950'>
                            Total
                        </div>
                    </div>
                    <div className='mb-1 flex flex-col items-center'>
                        <p className='font-medium text-gray-400'>Total Balance</p>
                        <h1 className='font-bold text-2xl'>$<span>3,600.00</span></h1>
                    </div>

                    <div className=' w-full'>
                        <Chart />
                    </div>
                    
                </div>
                <div className='btm--info md:flex w-[100%] h-[35%] space-x-6 hidden'>
                    <div className='buy bg-white shadow-xl w-[100%] rounded-md h-[100%] flex flex-col items-center space-y-5 pt-4 font-semibold'>
                        <div className='flex space-x-4 w-fit'>
                            <button type='button' className='border border-blue-950 py-2 px-7'>Buy</button>
                            <button type='button '>Sell</button>
                        </div>
                        <div>
                            <h1>Select Coin</h1>
                        </div>
                    </div>
                    <div className='tx bg-white shadow-xl w-[100%] rounded-md h-[100%]'>TX</div>
                </div>
            </div>
        </main>
        
        
    </div>
  )
}

export default Dashboard