import React from 'react'
import InterviewerApplicantsCalificationBox from '../../components/interviewer/InterviewerApplicantsCalificationBox';
import InterviewerApplicantsTable from '../../components/interviewer/InterviewerApplicantsTable';
import "./InterviewerApplicant.css";

const InterviewerApplicantsCited = () => {
  return (
    <>
      <div className="interviewerApplicantContainer">
      <h1 className="interviewrApplicantTitle">Aplicantes citados para el día de hoy</h1>
       <div className="">
       <InterviewerApplicantsTable/>

       <h1 className="interviewrApplicantTitle2">Aspirante</h1>
       <InterviewerApplicantsCalificationBox />

       </div>
       </div>
    </>
  )
}

export default InterviewerApplicantsCited
