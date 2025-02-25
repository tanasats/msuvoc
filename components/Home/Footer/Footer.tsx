import Link from 'next/link'
import React from 'react'
import { LuMail } from 'react-icons/lu'

const Footer = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                <p className='text-center md:text-left'>
                    Copyright (c) 2025 Mahasarakham University.
                </p>
                <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                    <span>Developer Tanasat Suding</span>
                    <Link href={"mailto:tanasat.s@msu.ac.th"} className=''><LuMail /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
