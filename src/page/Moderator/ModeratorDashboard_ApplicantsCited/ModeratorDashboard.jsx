import React from "react";

//import "./ModeratorDashboard_ApplicantsCited.css";
import "./ModeratorDashboard.css";
import ModeratorInterviewerTable from "../../../components/moderatorInterviewTable/ModeratorInterviewerTable";

const ModeratorDashboard = () => {
  return (
    <>
      <div className="moderatorInterviewDasboard">
        <div className="moderatorInterviewDasboardTitle">
          <h1 className="moderatorInterviewDasboardTableTitle">
            Agenda programada
          </h1>
          <ModeratorInterviewerTable />
        </div>
      </div>
    </>
  );
};

export default ModeratorDashboard;
