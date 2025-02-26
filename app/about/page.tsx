import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>
            <div className='h-[2rem]'></div>
            <SectionHeading
                heading='MSU VOC Platform'
                subheading='คือ กรอบการทำงานสำหรับรับฟังเสียงนิสิต มมส เพื่อใช้เป็นข้อมูลนำไปสู่การปรับปรุงพัฒนาสิ่งสนับสนุนการเรียนรู้ และโครงสร้างพื้นฐาน '
            />
            <div className='w-[80%] mx-auto'>
                <Image src={`/pictures/VoC.png`} width={1500} height={1500} alt="VoC Platform" />
            </div>
        </div>
    )
}

export default AboutPage