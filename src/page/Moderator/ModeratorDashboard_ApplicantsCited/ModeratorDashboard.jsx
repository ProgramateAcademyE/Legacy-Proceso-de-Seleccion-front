import React from 'react'
import "./ModeratorDashboard_ApplicantsCited.css";
import ModeratorInterviewerTable from '../../../components/moderatorInterviewTable/ModeratorInterviewerTable';

const ModeratorDashboard = () => {
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

export default ModeratorDashboard
