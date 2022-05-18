import React from 'react'
import InterviewerApplicantsTable from '../../components/interviewer/InterviewerApplicantsTable';
import "./Interviewer.css";

const InterviewerApplicantsCited = () => {
  return (
    <>
      <div className="interviewerDashboardContainer">
      <h1 className="interviewrDashboardTitle">Aplicantes citados para el día de hoy</h1>
       <div className="">
       <InterviewerApplicantsTable/>
       </div>
       </div>
    </>
  )
}

export default InterviewerApplicantsCited
