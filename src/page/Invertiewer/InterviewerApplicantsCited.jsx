import React from 'react'
import InterviewerApplicantsCalificationBox from '../../components/interviewer/InterviewerApplicantsCalificationBox';
import InterviewerApplicantsTable from '../../components/interviewer/InterviewerApplicantsTable';
import "./InterviewerApplicant.css";

const InterviewerApplicantsCited = () => {
  return (
    <>
      <div className="interviewerApplicantContainer">
      <h1 className="interviewrApplicantTitle"><span className='interviewerSpan'>Aplicantes citados </span></h1>
       <div className="">

        <h4 className="viewerAssesmentTitle2">
          Lista de estudiantes agendados para hoy...
        </h4>
       <InterviewerApplicantsTable/>

       <h1 className="interviewrApplicantTitle2"><span className='interviewerSpan'>Aspirante</span></h1>
       <InterviewerApplicantsCalificationBox />

       </div>
       </div>
    </>
  )
}

export default InterviewerApplicantsCited
