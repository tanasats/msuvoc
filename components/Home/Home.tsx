'use client'
import { useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Surveybox from './Surveybox/Surveybox'
import { getSurveybox } from '@/app/actions/surveybox-action'
import { SurveyboxData } from '@/data/data'
import { SurveyboxType } from '@/app/types/Surveybox'

const Home = () => {
  const [surveyboxData,setSurveyboxData] = useState<SurveyboxType[]>([]);
  
  useEffect(() => {
    getSurveybox(1,10,"id").then(
      ([res]) =>{
        console.log("res",res.items);
        setSurveyboxData(res.items);
      })
      .then(()=>{ console.log("Survey :"+SurveyboxData)})
  }, [])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Surveybox datas={surveyboxData}/>
      <Footer />
    </div>
  )
}
export default Home
