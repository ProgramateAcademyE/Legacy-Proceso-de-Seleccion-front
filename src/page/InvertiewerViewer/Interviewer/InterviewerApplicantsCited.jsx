import React from "react";
import InterviewerApplicantsCalificationBox from "../../../components/InterviewerViewerComponents/interviewer/InterviewerApplicantsCalificationBox";
import InterviewerApplicantsTable from "../../../components/InterviewerViewerComponents/interviewer/InterviewerApplicantsTable";
import "./InterviewerApplicant.css";
import ViewerCalificationBox from "../../../components/InterviewerViewerComponents/viewer/ViewerCalificationBox";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

const InterviewerApplicantsCited = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const meId = auth.user._id;
  const [currentAspirant, setCurrentAspirant] = React.useState();
  const [meet, setMeet] = React.useState();
  const [room, setRoom] = React.useState();
  const [role, setRole] = React.useState();

  const meetId = pathname.slice(10);
<<<<<<< HEAD

=======
>>>>>>> 2db0e0d013f05936f9d4dc94009cdae9f44556ee
  async function fetchCitation() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/get-meet-by-meetId/${meetId}`,
      {
        headers: { Authorization: token },
      }
    );
    setMeet(data.data[0]);
<<<<<<< HEAD

=======
>>>>>>> 2db0e0d013f05936f9d4dc94009cdae9f44556ee
    const searchInterviewer = data.data[0]?.roomsInterviewers?.map((r) =>
      r?.selectors?.findIndex((s) => s._id === meId)
    );
    const searchAssesment = data.data[0]?.roomsAssesments?.map((r) =>
      r?.selectors?.findIndex((s) => s._id === meId)
    );

    const role = searchInterviewer?.some((e) => e !== -1)
      ? "interviewer"
      : searchAssesment?.some((e) => e !== -1)
      ? "Observer"
      : null;

    setRole(role === "interviewer" ? 4 : 3);

    const room =
      role === "interviewer"
        ? data.data[0]?.roomsInterviewers[
            searchInterviewer?.findIndex((p) => p !== -1)
          ]
        : data.data[0]?.roomsAssesments[
            searchAssesment?.findIndex((p) => p !== -1)
          ];
    setRoom(room);
  }

  const handleCurrentAspirant = (newAspirant) => {
    setCurrentAspirant(newAspirant);
  };

  const handleGoBack = () => {
    history.replace(`/entrevistadordashboard`);
  };

  React.useEffect(() => {
    fetchCitation();
  }, []);

  return meet ? (
    <div className="interviewerApplicantContainer">
      <button className="buttonBackInterviewerViewer" onClick={handleGoBack}>
        Ver citas programadas
      </button>
      <h1 className="interviewrApplicantTitle">
        <span className="interviewerSpan">Aspirantes citados </span>
      </h1>
      <div className="">
        <h4 className="viewerAssesmentTitle2">
          Lista de estudiantes agendados para hoy...
        </h4>
        <InterviewerApplicantsTable
          handleCurrentAspirant={handleCurrentAspirant}
          meet={meet}
          room={room}
          role={role}
        />

        <h1 className="interviewrApplicantTitle2">
          <span className="interviewerSpan">Aspirante</span>
        </h1>
        {role === 4 ? (
          <InterviewerApplicantsCalificationBox
            meet={meet}
            room={room}
            currentAspirant={currentAspirant}
          />
        ) : (
          <ViewerCalificationBox room={room} meet={meet} />
        )}
      </div>
    </div>
  ) : (
    <div style={{ height: "100vh" }}></div>
  );
};

export default InterviewerApplicantsCited;
