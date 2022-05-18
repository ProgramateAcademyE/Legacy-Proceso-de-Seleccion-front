import React from 'react'
//import "./ModeratorCreateInterview.css";
import "../../../components/moderatorInterviewTable/ModeratorInterviewerTable.css"
import ModeratorInterviewerTable from '../../../components/moderatorInterviewTable/ModeratorInterviewerTable';

const ModeratorInterviewTable = () => {
  return (
      <>
    <div className="moderatorInterviewTableContainer">
    <div className="">
    <h1 className="moderatorInterviewTableTitle">MODERADOR - TABLA VISTA-ASSESMENT</h1>
      <ModeratorInterviewerTable/>
    </div>
    </div>
    </>
  )
}

export default ModeratorInterviewTable
