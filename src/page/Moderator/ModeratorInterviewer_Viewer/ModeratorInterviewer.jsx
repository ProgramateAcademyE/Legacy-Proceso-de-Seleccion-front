import React from 'react'
import "./ModeratorInterviewer_Viewer.css";
import CreateInterviewer from '../../../components/createInterview_Viewer/CreateInterviewer.jsx';

const ModeratorInterviewer = () => {
  return (
    <>
    <div className="moderatorContainer">
        <div className="moderatorInterviewerContainer">
     {/* <h1 className="moderatorInterviewerTitle">MODERADOR - ENTREVISTADOR </h1> */}
     <CreateInterviewer/>
     </div>
     </div>
    </>
  )
}

export default ModeratorInterviewer