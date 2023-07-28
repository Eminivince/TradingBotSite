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

const Trade = () => {
  return (
    <div className='bg-slate-300 pb-8'>
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
                    <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400 cursor-pointer duration-300'>
                    <MdSpaceDashboard className='text-4xl text-blue-950'/>
                    <p>Dashboard</p>
                </div>
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
            <div className='graphnsection rounded-md shadow-xl grid grid-cols-2 gap-3 w-[100%] col-span-6'>
                <div className='bg-white shadow-xl h-[100%] rounded-md p-2 flex flex-col justify-between items-center'>
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
                <div className='bg-white shadow-xl h-[100%] rounded-md p-2 flex flex-col justify-between items-center'>
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
                
            </div>
        </main>
    </div>
  )
}

export default Trade