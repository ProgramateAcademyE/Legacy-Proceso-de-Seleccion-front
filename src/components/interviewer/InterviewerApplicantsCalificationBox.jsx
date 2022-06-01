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

  //async function fetchCitation() {
  //  const { data } = await axios.get(
  //    "http://localhost:3005/entrevistadoresCalificacion"
  //    /* {
  //      headers: { Authorization: token },
  //    }*/
  //  );
  //  setUsers(data);
  //}

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
    //fetchCitation();
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
        name: "PLANIFICACIÓN Y ORGANIZACIÓN DEL TIEMPO",
        questions: [
          {
            mainQuestion:
              "Cuéntanos ¿Cuál es tu plan para organizar tu tiempo para la formación (6 meses de lunes a viernes de 9am a 6pm)?",
            subQuestions: [],
          },
          {
            mainQuestion:
              "Teniendo en cuenta que la formación requiere tu disponibilidad de tiempo completo, ¿Cómo manejarás la parte económica de tu hogar?",
            subQuestions: [],
          },
        ],
        qualificationOptions: [
          {
            value: 1,
            description:
              "No tiene claridad para organizar su tiempo/rutina/Economía de acuerdo con la disponibilidad que requiere la formación Ó tiene dudas sobre la disponibilidad total del tiempo para la formación.",
          },
          {
            value: 2,
            description:
              "Tiene claridad pero solamente en uno de los aspectos (Tiempo, rutina, economía) para estar disponible en la formación.",
          },
          {
            value: 3,
            description:
              "Tiene claridad pero solamente en dos de los aspectos (Tiempo/rutina/economía) para estar disponible en la formación o tiene disponibilidad parcial del tiempo para la formación.",
          },
          {
            value: 4,
            description:
              "Tiene claridad para organizar su tiempo en los 3 aspectos sin embargo no cuenta con un plan de acción para la formación.",
          },
          {
            value: 5,
            description:
              "Tiene los 3 aspectos claros y organizados (Tiempo/rutina/economía). Tiene un plan de acción para cada uno de ellos. Cuenta con la totalidad del tiempo de los 6 meses para la formación.",
          },
        ],
      },
      {
        name: "PERSEVERANCIA",
        questions: [
          {
            mainQuestion:
              "Imagínate que ya haces parte de prográmate y se te presenta alguna de estas situaciones ¿Cómo lo manejarías?.",
            subQuestions: [
              "Conseguir un trabajo",
              "Que se enferme un familiar",
              " Que no te ajustes a la metodología",
              "Tener otra oportunidad de beca",
              "Que no logres organizar tu tiempo",
              "Viaje fuera del país",
            ],
          },
          {
            mainQuestion:
              "Danos un ejemplo en el pasado de un proyecto retador/difícil de tu vida (personal, laboral o familiar) y cómo lo lograste superar a pesar de los obstáculos.",
            subQuestions: [],
          },
        ],
        qualificationOptions: [
          {
            value: 1,
            description:
              "No tiene claras las expectativas ni obstáculos/retos pasados, actuales o futuros, ni cómo superarlos",
          },
          {
            value: 2,
            description:
              "Tiene poca claridad y certeza para cumplir las metas que se propone. No se esfuerza para lograr sus objetivos, no finaliza lo que empieza, denota baja disciplina y constancia",
          },
          {
            value: 3,
            description:
              "Identifica algunos obstáculos/retos pasados, presentes y futuros sin total claridad de cómo los superó/superaría. Demuestra buen nivel de dedicación en sus proyectos",
          },
          {
            value: 4,
            description:
              "Demuestra dedicación e interés para cumplir un plan o una meta y logra identificar cuáles son obstáculos importantes en su vida.",
          },
          {
            value: 5,
            description:
              "Identifica los retos que ha superado,los que tendrá a futuro y cómo los superaría. Demuestra dedicación y disciplina para cumplir una meta o plan. Termina lo que se propone.",
          },
        ],
      },
      {
        name: "MOTIVACIÓN",
        questions: [
          {
            mainQuestion:
              "Teniendo en cuenta lo que te contamos de la escuela ¿Dinos 3 características que más te llaman la atención de la metodología de Prográmate? (Autodidacta, no magistral, trabajo en equipo, autocrítica, etc)",
            subQuestions: [],
          },
          {
            mainQuestion:
              "¿Por qué deberíamos entregarte a ti una de las 70 becas que tenemos?",
            subQuestions: [],
          },
        ],
        qualificationOptions: [
          {
            value: 1,
            description:
              "En desacuerdo total con la metodología, no necesita la beca porque no esta motivado a ingresar al Bootcamp",
          },
          {
            value: 2,
            description:
              "No tiene clara la metodología, solo desea infromación del Bootcamp, la beca no es de importancia",
          },
          {
            value: 3,
            description:
              "Le interesa la metodología, no se ha decidido a ingresar al Bootcamp",
          },
          {
            value: 4,
            description:
              "Esta de acuerdo con la metodología, no logro dejar claro si desea la beca para ingresar al Bootcamp",
          },
          {
            value: 5,
            description: "Totalmente Motivado a cursar el Bootcamp",
          },
        ],
      },
      {
        name: "TÉCNICA",
        questions: [
          {
            mainQuestion:
              "Cuéntanos, ¿Cómo desarrollaste los 4 puntos de la prueba técnica? ¿Necesitaste ayuda? ¿Usaste los recursos que te compartimos o buscaste adicionales y cuáles?",
            subQuestions: [],
          },
          {
            mainquestion:
              "Si no realizaste alguno de los ejercicios, cuéntanos cómo lo intentaste hacer y/o por qué crees que no lograste llegar a realizar el ejercicio",
            subQuestions: [],
          },
        ],
        qualificationOptions: [
          {
            value: 1,
            description:
              "Realiza 2 o menos puntos de la prueba, no logra sustentar el por qué no pudo realizar los ejercicios dados en la prueba. No investiga y/o utiliza los recursos dados para realizar la prueba, presenta una tolerancia baja a la frustración que se presentaron con los ejercicios.",
          },
          {
            value: 2,
            description:
              "Cumple con 3 puntos de la prueba: los puntos 1 y 2 cumplen con el resultado correcto, de los puntos 3 y 4, realiza uno solo con un resultado correcto, sustenta la lógica de cómo desarrolló el mismo y el porqué no pudo realizar el otro ejercicio, utiliza los recursos dados para realizar la prueba.",
          },
          {
            value: 3,
            description:
              "Cumple con 4 puntos de la prueba: los puntos 1 y 2 cumplen con el resultado correcto, de los puntos 3 y 4, realiza 1 solo con un resultado correcto y el otro con resultado incorrecto, sustenta la lógica de cómo desarrolló el mismo y el porqué no pudo realizar el otro ejercicio , utiliza los recursos dados para realizar la prueba.",
          },
          {
            value: 4,
            description:
              "Cumple con los 4 puntos de la prueba: los puntos 1 y 2 cumplen con el resultado correcto, los puntos 3 y 4 corren en replit y la respuesta de uno de los 2 puntos no es correcta de acuerdo al enunciado, sustenta la lógica de cómo desarrolló el mismo, investiga y aplica los recursos dados y/o encuentra recursos por sí mismo para solucionar el problema a resolver, entiende que al realizar el ejercicio salen errores y debe tener la capacidad de resolverlos tolerando el nivel de frustración que se presentó",
          },
          {
            value: 5,
            description:
              "Cumple con los 4 puntos de la prueba: los puntos 1 y 2 cumplen con el resultado correcto, los puntos 3 y 4 corren en replit con un resultado lógico y acertado , sustenta claramente la lógica de cómo desarrolló los mismos, investiga y aplica los recursos dados y/o encuentra recursos por sí mismo para solucionar el problema a resolver, entiende que al realizar el ejercicio salen errores y debe tener la capacidad de resolverlos tolerando el nivel de frustración que se pueda dar.",
          },
        ],
      },
    ],
  };

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
