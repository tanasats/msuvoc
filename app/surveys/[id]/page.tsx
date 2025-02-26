import { SurveyboxData } from "@/data/data"

const SurveysPage = async ({params,}: {params: Promise<{ id: number }>}) => {
  const id = (await params).id
  const xxx = SurveyboxData.find((item)=>item.id==id)
  return(

    <div className='mx-auto'>
            <div className='bg-blue-950 h-[10vh]'></div>
            <iframe
                src={xxx?.link}
                width="100%"
                height="3000px"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}>
                Loading...
            </iframe>
        </div>

  )
}
export default SurveysPage