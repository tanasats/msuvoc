"use client"
import { getSurveyboxById } from "@/app/actions/surveybox-action";
import { SurveyboxType } from "@/app/types/Surveybox";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuChevronsUp } from "react-icons/lu";

const SurveysPage = () => {
  const { id } = useParams();
  const [surveybox, setSurveybox] = useState<SurveyboxType>();
  const [showGotoTop, setShowGotoTop] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
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
    // goto top button -----
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGotoTop(true);
      } else {
        setShowGotoTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


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

      {showGotoTop && (
        <button
        className="rounded-full p-2 text-2xl bg-blue-950 text-white right-8 bottom-5 fixed items-center"
          onClick={scrollToTop}
          style={{
            
          }}
        >
          <LuChevronsUp/>
        </button>
      )}
    </div>
  )
}
export default SurveysPage