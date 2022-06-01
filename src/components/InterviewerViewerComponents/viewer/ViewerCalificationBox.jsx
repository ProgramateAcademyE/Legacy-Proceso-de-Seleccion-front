import React, { useState, useEffect } from "react";
import "./ViewerCalification.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ViewerCalificationBoxCard from "./ViewerCalificationBoxCard";

const ViewerCalificationBox = (props) => {
  const [users, setUsers] = useState([]);

  const [questionary, setQuestionary] = useState();

  const questionaryId = "62855ad10a60a551a4aa7431";

  const token = useSelector((state) => state.token);
  async function fetchCitation() {
    const { data } = await axios.get(
      "http://localhost:3005/observadoresCalificacion"
      /* {
        headers: { Authorization: token },
      }*/
    );
    setUsers(data);
  }

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
    fetchCitation();
    fetchQuestionary();
  }, []);

  const helper = {
    _id: {
      $oid: "62855ad10a60a551a4aa7431",
    },
    name: "Programate Academy",
    description:
      "Estas preguntas estan diseñadas la convocatoria programate Academy",
    selectorType: 4,
    groups: [
      {
        name: "FLEXIBILIDAD Y APERTURA",

        qualificationOptions: [
          {
            value: 1,
            description:
              "No está en apertura, no respeta ni tiene en cuenta la diversidad o la opinión de los demás, impone a los demás su opinión.",
          },
          {
            value: 2,
            description:
              "No se adapta del todo a la idea propuesta por el grupo. Trata de ser asertivo pero le cuesta adaptarse a la situación.",
          },
          {
            value: 3,
            description:
              "Tiene en cuenta y respeta la opinión de los demás. Trata de ser asertivo pero no se adapta del todo a la idea propuesta por el grupo.",
          },
          {
            value: 4,
            description:
              "Tiene claro su punto de vista, logra llegar a un acuerdo. Está en apertura, tiene en cuenta la diversidad y opinión de los demás, se adapta a la situación.",
          },
          {
            value: 5,
            description:
              "Logra llegar a un acuerdo teniendo en cuenta su punto de vista y el de los demás, aunque no esté de acuerdo manteniendo en mente la construcción en común.",
          },
        ],
      },
      {
        name: "COMUNICACIÓN ASERTIVA",
        qualificationOptions: [
          {
            value: 1,
            description:
              "No tiene en cuenta la opinión de los demás, no respeta e impone su palabra. En ningún momento muestra interés por participar en la actividad grupal.",
          },
          {
            value: 2,
            description:
              "Escucha a los demás, se le dificulta aportar su opinión y respetar la de otros. Pocas veces se involucra en la actividad grupal.",
          },
          {
            value: 3,
            description:
              "Da a conocer sus ideas. Escucha a los demás sin profundizar o pregunta a los demás su opinión.",
          },
          {
            value: 4,
            description:
              "Se comunica de forma clara, respeta y acepta la opinión de los demás. Ocasionalmente pregunta a los demás sobre sus perspectivas.",
          },
          {
            value: 5,
            description:
              "Tiene ideas comprensibles para todo el equipo explicándolas de forma amable,     respetuosa, clara y acepta retroalimentaciones de sus compañeros.",
          },
        ],
      },
      {
        name: "LIDERAZGO",
        qualificationOptions: [
          {
            value: 1,
            description:
              "No aporta significativamente a la construcción grupal de ideas. No participa en el desarrollo de la actividad ni muestra gran interés en participar. No escucha ni se comunica asertivamente con sus compañeros.",
          },
          {
            value: 2,
            description:
              "Participa y apoya las ideas de los demás sin aportar significativamente.",
          },
          {
            value: 3,
            description:
              "Participa escuchando a los demás y aportando desde su opinión pero no toma la iniciativa para liderar la actividad.",
          },
          {
            value: 4,
            description:
              "Moviliza a sus compañeros teniendo en cuenta y respetando sus ideas, influye para llevar acabo el objetivo en común. Escucha activamente durante toda la actividad.",
          },
          {
            value: 5,
            description:
              "Está pendiente de que todos participen. Está atento a la lluvia de ideas. Une ideas de los otros para formar una idea en común. Ve pros y contras de las ideas de los otros y lo comunica de forma amable. Mantiene una comunicación y escucha activa durante toda la actividad. Moviliza al equipo para lograr el objetivo en común.",
          },
        ],
      },
      {
        name: "ORIENTACIÓN AL LOGRO E INVESTIGACIÓN",

        qualificationOptions: [
          {
            value: 1,
            description:
              "No identifica ni investiga su parte en la Landing Page. Es poco propositivo y no llega al resultado final. Solo se basa en sus propias experiencias.",
          },
          {
            value: 2,
            description:
              "No aporta significativamente a la investigación y entregable de la Landing Page. La mayor parte de sus aportes están basadas en experiencias propias o investigaciones superficiales.",
          },
          {
            value: 3,
            description:
              "No aporta significativamente a la investigación y entregable de la Landing Page. La mayor parte de sus aportes están basadas en experiencias propias o investigaciones superficiales.",
          },
          {
            value: 4,
            description:
              "Demuestra aportes satisfactorios a la Landing Page, con buena información en el tiempo estipulado.",
          },
          {
            value: 5,
            description:
              "Capacidad de investigar y aportar significativamente a la Landing Page con información de calidad en el tiempo estipulado para la investigación individual.",
          },
        ],
      },
    ],
  };

  return (
    <div className="viewerCalificationBoxContainer">
      {helper?.groups?.map((item, index) => {
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
