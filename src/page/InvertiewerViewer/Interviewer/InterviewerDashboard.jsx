import React from "react";
import InterviewerDashboardTable from "../../../components/InterviewerViewerComponents/interviewer/InterviewerDashboardTable";
import "./InterviewerDashboard.css";

const InterviewerDashboard = (props) => {
  const { handleCurrentMeet } = props;
  return (
    <>
      <div className="interviewerDashboardContainer">
        <h1 className="interviewerDashboardtTitle">
          <span className="interviewerSpan">Citas programadas</span>
        </h1>
        <h1 className="interviewerDashboardTitle2">
          Tienes programadas las siguientes reuniones:
        </h1>
        <InterviewerDashboardTable handleCurrentMeet={handleCurrentMeet} />
      </div>
    </>
  );
};

export default InterviewerDashboard;
