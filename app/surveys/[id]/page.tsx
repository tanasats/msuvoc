"use client"
import { getSurveyboxById } from "@/app/actions/surveybox-action";
import { SurveyboxType } from "@/app/types/Surveybox";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SurveysPage = () => {
  const { id } = useParams();
  const [surveybox, setSurveybox] = useState<SurveyboxType>();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    //console.log("id=", id);
    if (!id) return;
    const fetchUser = async () => {
      try {
        const response = await getSurveyboxById(Number(id));
        if (response.error) {
          throw new Error('Failed to fetch Surveybox');
        }
        console.log(response.link);
        setSurveybox(response);
      } catch {
        //setError(err);
      } finally {
        //setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  //const surveybox = SurveyboxData.find((item) => item.id == id)

  return (
    <div className='mx-auto'>
      <div className='bg-blue-950 h-[10vh]'></div>

      <iframe
        src={surveybox?.link}
        width="100%"
        height="6000px"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}>
        Loading...
      </iframe>
            {surveybox?.link}
    </div>
  )
}
export default SurveysPage