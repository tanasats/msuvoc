"use server"
const api_server = process.env.API_SERVER;


// GetSurveybox by pagging 
export const getSurveybox = async (page: number, limit: number, orderby: string) => {
  try {
    const res = await fetch(`${api_server}/surveybox?page=${page}&limit=${limit}&orderby=${orderby}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accesstoken}`,
      },
    });
    if (!res) return ({ message: "Failed to fetch Surveybox" });
    const data = await res.json();
    return data;
  } catch {
    return {error:true,message:"Error fetching data"}
  }
}

export const getSurveyboxById = async (id:number) => {
  try{
    const res = await fetch(`${api_server}/surveybox/${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accesstoken}`,
      }
    });
    if(!res) return ({message:"Failed to Fetch Surveybox"});
    const data = await res.json();
    return data;
  }catch{
    return {error:true, message:"Error fetching data"}
  }
}