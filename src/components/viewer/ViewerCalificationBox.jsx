import React, { useState, useEffect } from "react";
import "./ViewerCalification.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ViewerCalificationBoxCard from "./ViewerCalificationBoxCard";

const ViewerCalificationBox = () => {
  const [users, setUsers] = useState([]);

  //const token = useSelector((state) => state.token);
  async function fetchCitation() {
    const { data } = await axios.get(
      "http://localhost:3005/observadoresCalificacion"
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
    <div className="viewerCalificationBoxContainer">
      {users?.map((item, index) => {
        return (
          <ViewerCalificationBoxCard
            title={item.title}
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
