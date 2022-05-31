import React, { useState, useEffect } from "react";
import "./InterviewerApplicants.css";
import InterviewerApplicantsCalificationBoxCard from "./InterviewerApplicantCalificationBoxCard";
import axios from "axios";
import { useSelector } from "react-redux";

const InterviewerApplicantsCalificationBox = () => {
  const [users, setUsers] = useState([]);

  //const token = useSelector((state) => state.token);
  async function fetchCitation() {
    const { data } = await axios.get(
      "http://localhost:3005/entrevistadoresCalificacion"
      /* {
        headers: { Authorization: token },
      }*/
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  return (
    <div className="InterviewerApplicantsCalificationBoxContainer">
      {users?.map((item, index) => {
        return (
          <InterviewerApplicantsCalificationBoxCard
            title={item.title}
            question1={item.question1}
            question1a={item.question1a}
            question1b={item.question1b}
            question1c={item.question1c}
            question1d={item.question1d}
            question1e={item.question1e}
            question1f={item.question1f}
            question2={item.question2}
            calification5={item.calification5}
            calification4={item.calification4}
            calification3={item.calification3}
            calification2={item.calification2}
            calification1={item.calification1}
            key={index}
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
