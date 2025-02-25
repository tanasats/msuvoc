export type SurveyboxType =  {
  title: string;
  description: string;
  picture: string;
  link: string;
  tags: string;
  publish_status: string;

  id?: number;
  created_at?: string;
  modified_at?: string;
}

export type GetSurveyboxResponseType =  {
  surveybox: SurveyboxType[];
  totalPages: number;
  totalItems: number;
}
