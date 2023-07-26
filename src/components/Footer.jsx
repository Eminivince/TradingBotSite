import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import { BsTelegram, BsDiscord, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#001F3E] h-20 text-white'>
        <div className='px-24 flex justify-between items-center pt-6'>
            <p>Xelbot 2023. All rights reserved.</p>
            
            <div className='flex space-x-8'>
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