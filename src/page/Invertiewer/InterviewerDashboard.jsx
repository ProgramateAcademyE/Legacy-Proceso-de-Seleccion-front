import React, { useEffect, useState } from "react";
import InterviewerDashboardTable from "../../components/interviewer/InterviewerDashboardTable";
import SelectButton from "../../components/selectButton/SelectButton";
import "./InterviewerDashboard.css";

const InterviewerDashboard = () => {
  return (
    <>
      <div className="interviewerDashboardContainer">
        <h1 className="interviewerDashboardtTitle">
          <span className="interviewerSpan">Citas programadas</span>
        </h1>
        <h1 className="interviewerDashboardTitle2">
          Tienes programadas las siguientes reuniones:
        </h1>
        <InterviewerDashboardTable />
      </div>
    </>
  );
};

export default InterviewerDashboard;
