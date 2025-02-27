import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Home/Footer/Footer'

const AboutPage = () => {
    return (
        <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>
            <div className='h-[2rem]'></div>
            <SectionHeading
                heading='MSU VOC Platform'
                subheading='คือ กรอบการทำงานสำหรับรับฟังเสียงนิสิต มมส เพื่อใช้เป็นข้อมูลนำไปสู่การปรับปรุงพัฒนาสิ่งสนับสนุนการเรียนรู้ และโครงสร้างพื้นฐาน '
            />
            <div className='max-w-[640] mx-auto p-5'>
                <Image src={`/pictures/VoC.png`} width={1500} height={1500} alt="VoC Platform" />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage