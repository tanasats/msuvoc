import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuAudioLines } from 'react-icons/lu'
import { PiFacebookLogoBold, PiInstagramLogoBold, PiXLogoBold, PiYoutubeLogoBold } from 'react-icons/pi'


type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener("scroll", handler);
    }, []);

    return (
        <div className={` ${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[10vh] z-[1000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
                {/* LOGO */}
                <Link href={"/"}>
                    <div className='flex items-center space-x-2'>
                        <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                            <LuAudioLines className='w-6 h-6 text-white' />
                        </div>
                        <h1 className='text-xl md:text-3xl text-white font-bold'>VOC</h1>
                    </div>
                </Link>
                {/* NavL inks */}
                <div className='hidden lg:flex items-center space-x-10 text-base'>
                    {navLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.url}>
                                <p className="relative text-white w-full block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">{link.label}</p>
                            </Link>
                        )
                    })}
                </div>

                <div className="hidden lg:flex items-center space-x-4 text-white text-2xl lg:text-3xl">
                    <Link href={'https://www.facebook.com/MahasarakhamUniversity.MSU'}><PiFacebookLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://x.com/MsuUniversity?fbclid=IwAR22V4FFD6KpC1R5pAOo7WwQq4zPNwkcSXaDCh4xc3vrTnLrDwjbwMRIWWE'}><PiXLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://www.instagram.com/mahasarakhamuniversity/?fbclid=IwAR0aS4Q4ajWC5LV_WLruOP2dhw7tvnbO4P1G9n8HvmnStxCO6Ts1I7G9iGE'}><PiInstagramLogoBold className='hover:text-yellow-300' /></Link>
                    <Link href={'https://www.youtube.com/c/msutubeThailand'}><PiYoutubeLogoBold className='hover:text-yellow-300' /></Link>
                    {/* <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                        Login
                    </button> */}
                </div>
                <HiBars3BottomRight
                    onClick={openNav}
                    className='w-11 h-11 text-white lg:hidden' />

            </div>
        </div>
    )
}

export default Nav
