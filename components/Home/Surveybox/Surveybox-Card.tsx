import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';

type Props = {
  surveybox: {
    id: number | undefined;
    title: string;
    description: string;
    picture: string;
    link: string;
    tags: string;
    publish_status: string;
    created_at: string;
    modified_at: string;
  }
}

const SurveyboxCard = ({ surveybox }: Props) => {
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
        <h1 className='mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200'>
          {surveybox.title}</h1>
        <p className='text-sm text-gray-600 mt-2 font-normal mb-6'>{surveybox.description}</p>
        <div className='flex justify-end items-center text-sm'>
          <button className="md:px-4 md:py-2 px-8 py-2 text-black bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg">
            <LuSend className='inline me-1' />แบบประเมิน
          </button>
        </div>
      </div>



    </div>
  )
}

export default SurveyboxCard
