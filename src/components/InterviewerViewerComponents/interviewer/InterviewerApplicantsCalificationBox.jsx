import React, { useState, useEffect } from "react";
import "./InterviewerApplicants.css";
import InterviewerApplicantsCalificationBoxCard from "./InterviewerApplicantCalificationBoxCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { PowerInputSharp } from "@material-ui/icons";

const InterviewerApplicantsCalificationBox = (props) => {
  const [users, setUsers] = useState([]);
  const [questionary, setQuestionary] = useState();

  const questionaryId = "62855ad10a60a551a4aa7431";

  const token = useSelector((state) => state.token);

  async function fetchQuestionary() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/get-questionary/${questionaryId}`,
      {
        headers: { Authorization: token },
      }
    );
    setQuestionary(data.data[0]);
  }

  console.log("Questio..: ", questionary);

  useEffect(() => {
    fetchQuestionary();
  }, []);

  return (
    <div className="InterviewerApplicantsCalificationBoxContainer">
      {questionary?.groups?.map((item, index) => {
        return (
          <InterviewerApplicantsCalificationBoxCard
            title={item.name}
            questions={item.questions}
            calification={item.qualificationOptions}
            key={index}
            currentAspirant={props.currentAspirant}
          />
        );
      })}

      <div className="card text-start|center|end">
        <div className="card-body">
          <h4 className="card-header">OBSERVACIONES GENERALES</h4>
          <form action="">
            <textarea
              className="InterviewerApplicanTextarea"
              id="w3review"
              name="w3review"
              rows="10"
            />
          </form>

          <p className="">
            <button className="InteviewerApplicantSubmit">
              Enviar Evaluación
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewerApplicantsCalificationBox;
