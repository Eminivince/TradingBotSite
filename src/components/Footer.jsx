import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import { BsTelegram, BsDiscord, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#001F3E] md:h-14 text-white'>
        <div className='md:px-24 px-6 flex justify-between items-center md:pt-6 pt-3 md:pb-0 pb-3'>
            <p className='text-xs'>Xelbot 2023. All rights reserved.</p>
            
            <div className='flex md:space-x-8 space-x-3'>
                <AiOutlineTwitter />
                <BsDiscord />
                <BsLinkedin />
                <BsTelegram />

            </div>
            
        </div>

    </div>
  )
}

export default Footer