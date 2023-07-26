import React from 'react'
import Navbar from '../components/Navbar'
import Hand from '../assets/images/Iphonehand.png'
import {MdSpaceDashboard, MdAccountBalanceWallet } from 'react-icons/md'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import {FaMoneyCheck} from 'react-icons/fa'
import { AiFillCreditCard } from 'react-icons/ai'

const Dashboard = () => {
  return (
    <div className='bg-slate-300'>
        <div className='bg-white'>
                <Navbar />
        </div>
        
        <header className='px-24 grid grid-cols-8 gap-3 justify-between space-x-5 mt-6'>
            <div className='profile w-[100%] rounded-md flex items-center col-span-2 shadow-xl space-x-6 bg-white '>
                <img src={Hand} alt='ProfilePic' className='w-16'/>
                <div className='flex flex-col items-center'>
                    <p className='font-bold'>Hi David,</p>
                    <p className='font-semibold'>ayomidedavid@gmail.com </p>
                </div>
            </div>
            <div className='balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-black text-white'>
                <MdAccountBalanceWallet className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p>Wallet balance</p>
                    <p>$5,200</p>
                    <p>1% Monthly Growth</p>
                </div>
                <h1 className='text-4xl'>75%</h1>
            </div>
            <div className='balancce border w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-green-700 text-white'>
                 <BsFillRocketTakeoffFill className='text-3xl'/>
                <div className='flex flex-col items-center'>
                    <p>Pending Trade</p>
                    <p>$3,600</p>
                    <p>1% Monthly Growth</p>
                </div>
                <h1 className='text-4xl'>25%</h1>
            </div>
        </header>
        <main className='px-24 mt-6 grid grid-cols-8 space-x-6 justify-between'>
            <div className='sidebarr bg-white rounded-md w-[98%] col-span-2'>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <MdSpaceDashboard className='text-4xl'/>
                    <p>Dashboard</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <FaMoneyCheck className='text-4xl'/>
                    <p>Deposit</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <AiFillCreditCard className='text-4xl'/>
                    <p>Withdrawal</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <MdSpaceDashboard className='text-4xl'/>
                    <p>Dashboard</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <MdSpaceDashboard className='text-4xl'/>
                    <p>Dashboard</p>
                </div>
                <div className='flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400'>
                    <BsFillRocketTakeoffFill className='text-4xl'/>
                    <p>Earn</p>
                </div>
            </div>
            <div className='graphnsection w-[100%] col-span-6 bg-lime-400 rounded-md'>
                jjjjjjj
            </div>
        </main>
    </div>
  )
}

export default Dashboard