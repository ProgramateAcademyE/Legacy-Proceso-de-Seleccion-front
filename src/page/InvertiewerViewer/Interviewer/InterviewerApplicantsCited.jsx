import React from "react";
import InterviewerApplicantsCalificationBox from "../../../components/InterviewerViewerComponents/interviewer/InterviewerApplicantsCalificationBox";
import InterviewerApplicantsTable from "../../../components/InterviewerViewerComponents/interviewer/InterviewerApplicantsTable";
import "./InterviewerApplicant.css";

const InterviewerApplicantsCited = () => {
  const [currentAspirant, setCurrentAspirant] = React.useState();

  const handleCurrentAspirant = (newAspirant) => {
    console.log("function", newAspirant);
    setCurrentAspirant(newAspirant);
  };

  return (
    <>
      <div className="interviewerApplicantContainer">
        <h1 className="interviewrApplicantTitle">
          <span className="interviewerSpan">Aspirantes citados </span>
        </h1>
        <div className="">
          <h4 className="viewerAssesmentTitle2">
            Lista de estudiantes agendados para hoy...
          </h4>
          <InterviewerApplicantsTable
            handleCurrentAspirant={handleCurrentAspirant}
          />

          <h1 className="interviewrApplicantTitle2">
            <span className="interviewerSpan">Aspirante</span>
          </h1>
          <InterviewerApplicantsCalificationBox
            currentAspirant={currentAspirant}
          />
        </div>
      </div>
    </>
  );
};

export default InterviewerApplicantsCited;
