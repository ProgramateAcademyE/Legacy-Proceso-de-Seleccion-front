import React from 'react'
import "./ModeratorInterviewer_Viewer.css";
import CreateInterviewer from '../../../components/createInterview_Viewer/CreateInterviewer.jsx';
import ModalCreateNewInterviewer from '../../../components/modals/ModalCreateNewInterviewer';
import SelectButton from '../../../components/selectButton/SelectButton';

const ModeratorInterviewer = () => {
  return (
    <>
    <div className="moderatorContainer_interviewer">
        <div className="moderatorInterviewerContainer">
     <h1 className="moderatorInterviewerTitle">TABLA DE ENTREVISTADORES </h1> 
     <SelectButton/>
     <ModalCreateNewInterviewer/>
     
     <CreateInterviewer/>
     
     
     </div>
     
     

    
     </div>
    </>
  )
}

export default ModeratorInterviewer