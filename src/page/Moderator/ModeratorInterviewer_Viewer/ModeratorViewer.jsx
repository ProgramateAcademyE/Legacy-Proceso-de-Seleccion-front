import React from 'react'
import CreateViewer from '../../../components/createInterview_Viewer/CreateViewer';
import "./ModeratorInterviewer_Viewer.css";



const ModeratorViewer = () => {
  return (
    <>
    <div className="moderatorContainer_viewer">
        <div className="moderatorInterviewerContainer">
     {/* <h1 className="moderatorInterviewerTitle">MODERADOR - OBSERVADOR</h1> */}
     <CreateViewer/>
     </div>
     </div>
    </>
  )
}

export default ModeratorViewer