import React from 'react'
import "./ModeratorInterviewer_Viewer.css";
import CreateInterviewer from '../../../components/createInterview_Viewer/CreateInterviewer.jsx';
import ModalCreateNewInterviewer from '../../../components/modals/ModalCreateNewInterviewer';

const ModeratorInterviewer = () => {
  return (
    <>
    <div className="moderatorContainer_interviewer">
        <div className="moderatorInterviewerContainer">
     {/* <h1 className="moderatorInterviewerTitle">MODERADOR - ENTREVISTADOR </h1> */}
     <ModalCreateNewInterviewer/>
     <CreateInterviewer/>
     
     
     </div>
     
     

    
     </div>
    </>
  )
}

export default ModeratorInterviewer