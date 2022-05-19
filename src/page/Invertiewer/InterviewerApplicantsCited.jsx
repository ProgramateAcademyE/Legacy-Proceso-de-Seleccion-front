import React from 'react'
import InterviewerApplicantsCalificationBox from '../../components/interviewer/InterviewerApplicantsCalificationBox';
import InterviewerApplicantsTable from '../../components/interviewer/InterviewerApplicantsTable';
import "./InterviewerApplicant.css";

const InterviewerApplicantsCited = () => {
  return (
    <>
      <div className="interviewerApplicantContainer">
      <h1 className="interviewrApplicantTitle"><span className='interviewerSpan'>Aplicantes citados para el día de hoy</span></h1>
       <div className="">
       <InterviewerApplicantsTable/>

       <h1 className="interviewrApplicantTitle2"><span className='interviewerSpan'>Aspirante</span></h1>
       <InterviewerApplicantsCalificationBox />

       </div>
       </div>
    </>
  )
}

export default InterviewerApplicantsCited
