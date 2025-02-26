import { SurveyboxType } from '@/app/types/Surveybox';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { LuHeart, LuSend, LuUser } from 'react-icons/lu';

type Props = {
  surveybox: SurveyboxType;
}

const SurveyboxItem = ({ surveybox }: Props) => {
  return (
    <div>
      <Link href={surveybox.link} >
        <div className='relative h-[300xp] w-full rounded-lg cursor-pointer group overflow-hidden'>
          {/* add to fav button */}
          <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-gray-500 flex items-center justify-center flex-col'>
            <FaHeart className='w-3 h-3' />
          </div>
          <div className='absolute inset-0 bg-black opacity-20 z-10'> </div>
          {/* image */}
          <Image
            src={`/pictures/${surveybox.picture}`}
            alt={surveybox.title}
            width={500}
            height={500}
            className='overflos-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
        </div>
      </Link>
      {/* Content */}
      <div className='text-'>
        <h1 className='mt-4 text-lg font-semibold text-blue-900 hover:text-black cursor-pointer transition-all duration-200'>
          {surveybox.title}</h1>
        <p className='text-sm text-gray-600 mt-2 font-normal mb-6'><span className='font-bold text-blue-900'>ประเด็น : </span>
          {surveybox.description}
        </p>
        <div className='flex justify-between items-center text-sm text-gray-600'>
          <div className='flex'>
            <LuHeart className='text-xl' />
            <span className="h-fit inline-flex items-center bg-slate-100 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-100 dark:text-green-600">
              {/* <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span> */}
              4.88
            </span>
          </div>
        </div>
        <div className='flex justify-between items-center text-sm text-gray-600'>
          <div className='flex'>
            <LuUser className='text-xl' />
            <span className="h-fit inline-flex items-center bg-slate-100 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-100 dark:text-green-600">
              {/* <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span> */}
              123
            </span>
          </div>
          <Link href={`http://localhost:3000/surveys/${surveybox.id}`} >
            <button className="md:px-4 md:py-2 px-8 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg">
              <LuSend className='inline me-1' />แบบประเมิน
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SurveyboxItem
