import React, { useState, useEffect } from "react";
import "./ViewerCalification.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ViewerCalificationBoxCard from "./ViewerCalificationBoxCard";

const ViewerCalificationBox = (props) => {
  const [users, setUsers] = useState([]);

  const [questionary, setQuestionary] = useState();

  const questionaryId = "6286b5113c2f2c46dc9b7873";

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

  useEffect(() => {
    fetchQuestionary();
  }, []);

  return (
    <div className="viewerCalificationBoxContainer">
      {questionary?.groups?.map((item, index) => {
        return (
          <ViewerCalificationBoxCard
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
          <p className="">Aspirante 1</p>
          <form action="">
            <textarea
              className="InterviewerApplicanTextarea"
              id="w3review"
              name="w3review"
              rows="5"
            />
          </form>

          <p className="">Aspirante 2</p>
          <form action="">
            <textarea
              className="InterviewerApplicanTextarea"
              id="w3review"
              name="w3review"
              rows="5"
            />
          </form>

          <p className="">Aspirante 3</p>
          <form action="">
            <textarea
              className="InterviewerApplicanTextarea"
              id="w3review"
              name="w3review"
              rows="5"
            />
          </form>

          <p className="">Aspirante 4</p>
          <form action="">
            <textarea
              className="InterviewerApplicanTextarea"
              id="w3review"
              name="w3review"
              rows="5"
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

export default ViewerCalificationBox;
