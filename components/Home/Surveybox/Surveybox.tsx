import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Image from 'next/image'
import SurveyboxItem from './Surveybox-item'
import { SurveyboxType } from '@/app/types/Surveybox'
//import { SurveyboxData } from '@/data/data'

type Props = {
  datas:SurveyboxType[];
}

const Surveybox = ({datas}:Props) => {
  return (
    <div className='pt-20 pb-20'>
      {/* Section Heading */}
      <SectionHeading
        heading='ประเมินความพึงพอใจ'
        subheading='นิสิต มมส ประเมินความพึงพอใจต่อสิ่งสนับสนุนการเรียนรู้ และ โครงสร้างพื้นฐาน' />

      <div className='w-[80%] mx-auto'>
        {/* image */}
        <Image
          src={`/pictures/voc_overview2.png`}
          alt={`voc overview`}
          width={1920}
          height={1080}
          className='overflos-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
      </div>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start mt-16'>
        {/* Surveybox Card */}
        {datas.map((data:SurveyboxType) => {
          return (
            <div key={data.id}>
              <SurveyboxItem surveybox={data} />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Surveybox