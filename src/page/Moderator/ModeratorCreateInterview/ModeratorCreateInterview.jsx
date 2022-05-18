import React from 'react'
//import "./ModeratorCreateInterview.css";
import "../../../components/moderatorForm/ModeratorForm.css"
import ModeratorForm from '../../../components/moderatorForm/ModeratorForm'
const ModeratorCreateInterview = () => {
  return (
    <>
    <div className="moderatorContainer1">
        <div className="moderatorCreateInterviewContainer"> 
     <h1 className="moderatorCreateInterviewTitle">MODERADOR - CREAR ENTREVISTA y ASSESMENT </h1>
      <ModeratorForm />

     </div>
     </div>
    </>
  )
}

export default ModeratorCreateInterview
