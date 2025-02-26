import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { PiFacebookLogoBold, PiInstagramLogoBold, PiXLogoBold, PiYoutubeLogoBold } from 'react-icons/pi'

type Props = {
    showNav:boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}: Props) => {
    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]";
    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
            {/* navLinks */}
            <div className={`text-white ${navOpen}  fixed justify-center flex flex-col h-full transform transition-all duratio-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                {navLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} onClick={closeNav}>
                            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
                        </Link>
                    )
                })}
                <div className="absolute top-[0.7rem] left-[1.4rem] flex items-center space-x-4 text-white text-2xl lg:text-3xl">
                    <Link href={'https://www.facebook.com/MahasarakhamUniversity.MSU'}><PiFacebookLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://x.com/MsuUniversity?fbclid=IwAR22V4FFD6KpC1R5pAOo7WwQq4zPNwkcSXaDCh4xc3vrTnLrDwjbwMRIWWE'}><PiXLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://www.instagram.com/mahasarakhamuniversity/?fbclid=IwAR0aS4Q4ajWC5LV_WLruOP2dhw7tvnbO4P1G9n8HvmnStxCO6Ts1I7G9iGE'}><PiInstagramLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://www.youtube.com/c/msutubeThailand'}><PiYoutubeLogoBold className='hover:text-yellow-300' /></Link>
                    {/* <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                        Login
                    </button> */}
                </div>

                {/* close button */}
                <CgClose 
                onClick={closeNav}
                className='absolute top-[0.7rem] right-[1.4rem] sm-w-8 sm:h-8 w-6 h-6'/>                
            </div>

        </div>



    )
}

export default MobileNav
