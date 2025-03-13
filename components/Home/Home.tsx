'use client'
import { useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import { getSurveybox } from '@/app/actions/surveybox-action'
import { SurveyboxType } from '@/app/types/Surveybox'
import Surveybox from './Surveybox/Surveybox'

const Home = () => {
  const [surveyboxdata,setSurveyboxdata] = useState<SurveyboxType[]>([]);

  useEffect(() => {
    fetchSurveybox();
  }, [])

  const fetchSurveybox = async () => {
    //console.log("run fetchSurveybox()")
    const res = await getSurveybox(1,20,"id");
    //console.log("getSurveybox() response=",res);
    setSurveyboxdata(res.items);
  }

  return (
    <div className='overflow-hidden'>
      <div id="top-section"></div>
      <Hero />
      {/* <Image src="http://localhost:4000/image/msu_evbus.jpg" alt=""/> */}
      {/* <Surveybox datas={surveyboxData}/> */}
      <div id="survey-section"></div>
      <Surveybox datas={surveyboxdata} />
      <Footer />
    </div>
  )
}
export default Home
