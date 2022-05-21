import React from 'react'
import "./ModeratorInterviewTable.css";
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
