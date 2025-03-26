"use client"
import { SurveyboxType } from '@/app/types/Surveybox';
import Link from 'next/link';

import { FaHeart } from 'react-icons/fa';
import { LuHeart, LuSend, LuUser } from 'react-icons/lu';

type Props = {
  surveybox: SurveyboxType;
}

const SurveyboxItem = ({ surveybox }: Props) => {
  const image_host_url = "https://voc.msu.ac.th/api/voc/image";

  return (
    <div>
      <Link href={`/surveys/${surveybox.id}`} >
        <div className='relative h-[300xp] w-full rounded-lg cursor-pointer group overflow-hidden'>
          {/* add to fav button */}
          <div className='absolute top-4 right-4 z-20 w-8 h-8 hover:text-red-600 bg-white rounded-full text-gray-500 flex items-center justify-center flex-col'>
            <FaHeart className='w-4 h-4' />
          </div>
          <div className='absolute inset-0 bg-black opacity-20 z-10'> </div>
          {/* image */}
          {/* <Image 
            src={`/pictures/${surveybox.picture}`}
            //src={"localhost:4000/image/msu_evbus.jpg"}
            alt={surveybox.title}
            width={500}
            height={500}
            className='overflos-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' /> */}
          <img src={`${image_host_url}/${surveybox.picture}`} className='overflos-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' alt=""/>
        </div>
      </Link>
      {/* Content */}
      <div className='text-'>
        <h1 className='mt-4 text-lg font-semibold text-blue-900 transition-all duration-200'>
          {surveybox.title}
          </h1>
        <p className='indent-6 text-sm text-gray-600 mt-2 font-normal mb-6'>
          {surveybox.description}
        </p>

        <div className='hidden  justify-between items-center text-sm text-gray-600'>
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
            {surveybox.responsed > 0 &&
            <div className='flex'>
            <LuUser className='text-xl' />
            <span className="h-fit inline-flex items-center bg-slate-100 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-100 dark:text-green-600">
              {/* <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span> */}
              {surveybox.responsed}
            </span>
            </div> }
          </div>
          <Link href={`/surveys/${surveybox.id}`} >
            <button className="md:px-4 md:py-2 px-8 py-2 text-gray-600 hover:text-white bg-gray-100 hover:bg-green-600 transition-all duration-200 rounded-lg">
              <LuSend className='inline me-1' />แบบประเมิน
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SurveyboxItem
