import React from 'react'
import CreateViewer from '../../../components/createInterview_Viewer/CreateViewer';
import ModalCreateNewViewer from '../../../components/modals/ModalCreateNewViewer';
import "./ModeratorInterviewer_Viewer.css";
import SelectButton from '../../../components/selectButton/SelectButton';


const ModeratorViewer = () => {
  return (
    <>
    <div className="moderatorContainer_viewer">
        <div className="moderatorInterviewerContainer">
     <h1 className="moderatorInterviewerTitle">TABLA DE OBSERVADORES</h1> 
     
     <SelectButton/>
     <ModalCreateNewViewer/>
     <CreateViewer/>
     
     
     </div>
     </div>
    </>
  )
}

export default ModeratorViewer