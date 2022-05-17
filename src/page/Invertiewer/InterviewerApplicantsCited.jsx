import React from 'react'
import InterviewerApplicantsTable from '../../components/interviewer/InterviewerApplicantsTable';
import "./Interviewer.css";

const InterviewerApplicantsCited = () => {
  return (
    <>
      <div className="interviewerDashboardContainer">
      {/*<h1 className="interviewrDashboardTitle">Aplicantes citados PARA HOY</h1>*/} 
       <div className="">
       <InterviewerApplicantsTable/>
       </div>
       </div>
    </>
  )
}

export default InterviewerApplicantsCited
