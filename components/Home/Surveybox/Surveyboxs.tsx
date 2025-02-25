import SectionHeading from '@/components/Helper/SectionHeading'
import { SurveyboxData } from '@/data/data'
import React from 'react'
import SurveyboxCard from './Surveybox-Card'
import Image from 'next/image'
//import { Surveybox } from '@/app/types/Surveybox'

// interface surveybox {
//   title: string;
//   description: string;
//   picture: string;
//   link: string;
//   tags: string;
//   publish_status: string;

//   id?: number|undefined;
//   created_at?: string;
//   modified_at?: string;
// }


const Surveyboxs = () => {
  return (
    <div className='pt-20 pb-20'>
      {/* Section Heading */}
      <SectionHeading
        heading='ประเมินความพึงพอใจ'
        subheading='นิสิต มมส ประเมินความพึงพอใจต่อสิ่งสนับสนุนการเรียนรู้ และ โครงสร้างพื้นฐาน' />

      <div className='w-[80%] mx-auto'>
                  {/* image */}
                  <Image
                    src={`/pictures/voc_overview.jpg`}
                    alt={`voc step`}
                    width={500}
                    height={500}
                    className='overflos-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
      </div>

      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start mt-16'>
        {/* Surveybox Card */}
        {SurveyboxData.map((data) => {
          return (
            <div key={data.id}>
              <SurveyboxCard surveybox={data}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Surveyboxs
