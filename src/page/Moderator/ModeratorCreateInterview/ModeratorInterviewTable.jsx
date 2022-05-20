import React from 'react'
import "./ModeratorTable.css";
import ModeratorInterviewerTable from '../../../components/moderatorInterviewTable/ModeratorInterviewerTable';

const ModeratorInterviewTable = () => {
  return (
      <>
    <div className="moderatorInterviewTableContainer">
    <div className="moderatorInterviewContainerTitle">
    <h1 className="moderatorInterviewTableTitle">Agenda de salas programadas </h1>
      <ModeratorInterviewerTable/>
    </div>
    </div>
    </>
  )
}

export default ModeratorInterviewTable
/* 
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


*/