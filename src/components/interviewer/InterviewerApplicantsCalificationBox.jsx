import React from "react";
import "./InterviewerApplicants.css";

const InterviewerApplicantsCalificationBox = () => {
  return (
    <div className="InterviewerApplicantsCalificationBoxContainer">
      <div className="card text-start|center|end">
        <div className="card-body">
          <h4 className="card-header">
            PLANIFICACIÓN Y ORGANIZACIÓN DEL TIEMPO
          </h4>
          <br />
          <h4 className="card-title">Preguntas</h4>
          <p className="">
            <span className="interviewerCardSpan"> 1. </span> Cuéntanos ¿Cuál es
            tu plan para organizar tu tiempo para la formación (6 meses de lunes
            a viernes de 9am a 6pm)?
          </p>
          <p className="">
            <span className="interviewerCardSpan"> 2. </span> Teniendo en cuenta
            que la formación requiere tu disponibilidad de tiempo completo,
            ¿Cómo manejarás la parte económica de tu hogar?
          </p>
          <br />
          <h4 className="card-text">Calificación</h4>
          <p className="">
            <span className="interviewerCardSpan fivePoints"> 5 puntos:</span>{" "}
            Tiene los 3 aspectos claros y organizados (Tiempo/rutina/economía).
            Tiene un plan de acción para cada uno de ellos. Cuenta con la
            totalidad del tiempo de los 6 meses para la formación.
          </p>
          <p className="">
            <span className="interviewerCardSpan fourPoints"> 4 puntos:</span>{" "}
            Tiene claridad para organizar su tiempo en los 3 aspectos sin
            embargo no cuenta con un plan de acción para la formación.
          </p>
          <p className="">
            <span className="interviewerCardSpan threePoints"> 3 puntos:</span>{" "}
            Tiene claridad pero solamente en dos de los aspectos
            (Tiempo/rutina/economía) para estar disponible en la formación o
            tiene disponibilidad parcial del tiempo para la formación.
          </p>
          <p className="">
            <span className="interviewerCardSpan redPoints"> 2 puntos:</span>{" "}
            Tiene claridad pero solamente en uno de los aspectos (Tiempo,
            rutina, economía)para estar disponible en la formación.
          </p>
          <p className="">
            {" "}
            <span className="interviewerCardSpan redPoints"> 1 punto:</span> No
            tiene claridad para organizar su tiempo/rutina/Economía de acuerdo
            con la disponibilidad que requiere la formación Ó tiene dudas sobre
            la disponibilidad total del tiempo para la formación.
          </p>
          <p className="card-footer">
            Nombre Aspirante
            <select className="interviewerSelect" name="" id="">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </p>
        </div>
      </div>

      <div className="card text-start|center|end">
        <div className="card-body">
          <h4 className="card-header">PERSEVERANCIA</h4>
          <br />
          <h4 className="card-title">Preguntas</h4>
          <p className="">
            <span className="interviewerCardSpan"> 3. </span> Imagínate que ya
            haces parte de programarte y se te presenta alguna de estas
            situaciones ¿Cómo lo manejarías?
            <br />
            <span className="interviewerCardSpan">a. </span> Conseguir un
            trabajo.
            <br /> <span className="interviewerCardSpan"> b. </span> Que se
            enferme un familiar.
            <br /> <span className="interviewerCardSpan"> c. </span> Que no te
            ajustes a la metodología.
            <br /> <span className="interviewerCardSpan"> d. </span> Tener otra
            oportunidad de beca. <br />
            <span className="interviewerCardSpan"> e. </span> Que no logre
            organizar tu tiempo. <br />
            <span className="interviewerCardSpan"> f. </span> Viaje fuera del
            país
          </p>
          <br />
          <p className="">
            <span className="interviewerCardSpan"> 4. </span> Danos un ejemplo
            en el pasado de un proyecto retador/difícil de tu vida (personal,
            laboral o familiar) y cómo lo lograste superar a pesar de los
            obstáculos.
          </p>
          <br />
          <h4 className="card-text">Calificación</h4>
          <p className="">
            <span className="interviewerCardSpan fivePoints"> 5 puntos:</span>{" "}
            Identifica los retos que ha superado,los que tendrá a futuro y cómo
            los superaría. Demuestra dedicación y disciplina para cumplir una
            meta o plan. Termina lo que se propone.
          </p>
          <p className="">
            <span className="interviewerCardSpan fourPoints"> 4 puntos:</span>
            Demuestra dedicación e interés para cumplir un plan o una meta y
            logra identificar cuáles son obstáculos importantes en su vida.
          </p>
          <p className="">
            <span className="interviewerCardSpan threePoints"> 3 puntos:</span>
            Identifica algunos obstáculos/retos pasados, presentes y futuros sin
            total claridad de cómo los superó/superaría. Demuestra buen nivel de
            dedicación en sus proyectos{" "}
          </p>
          <p className="">
            <span className="interviewerCardSpan redPoints"> 2 puntos:</span>
            Tiene poca claridad y certeza para cumplir las metas que se propone.
            No se esfuerza para lograr sus objetivos, no finaliza lo que
            empieza, denota baja disciplina y constancia
          </p>
          <p className="">
            <span className="interviewerCardSpan redPoints"> 1 punto:</span> No
            tiene claras las expectativas ni obstáculos/retos pasados, actuales
            o futuros, ni cómo superarlos.
          </p>
          <p className="card-footer">
            Nombre Aspirante
            <select className="interviewerSelect" name="" id="">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </p>
        </div>
      </div>

      <div className="card text-start|center|end">
        <div className="card-body">
          <h4 className="card-header">MOTIVACIÓN</h4>
          <br />
          <h4 className="card-title">Preguntas</h4>
          <p className="">
            <span className="interviewerCardSpan"> 1. </span>Teniendo en cuenta
            lo que te contamos de la escuela ¿Dinos 3 características que más te
            llaman la atención de la metodología de Prográmate? "Autodidacta, no
            magistral, trabajo en equipo, autocrítica, etc"
          </p>
          <p className="">
            <span className="interviewerCardSpan"> 2. </span>¿Por qué deberíamos
            entregarte a ti una de las 70 becas que tenemos?
          </p>
          <p className="">
            <span className="interviewerCardSpan"> TÉCNICA: </span> (Primero
            preguntas, después mostrar ejercicio)
          </p>
          <p className="">
            <span className="interviewerCardSpan"> 5. </span> Cuéntanos, ¿Cómo
            desarrollaste los 4 puntos de la prueba técnica? ¿Necesitaste ayuda?
            ¿Usaste los recursos que te compartimos o buscaste adicionales y
            cuáles?
          </p>
          <p className="">
            <span className="interviewerCardSpan"> 6. </span> Si no realizaste
            alguno de los ejercicios, cuéntanos cómo lo intentaste hacer y/o por
            qué crees que no lograste llegar a realizar el ejercicio Rúbrica
          </p>
          <br />
          <h4 className="card-text">Calificación</h4>
          <p className="">
            <span className="interviewerCardSpan fivePoints"> 5 puntos:</span>{" "}
            Cumple con los 4 puntos de la prueba: los puntos 1 y 2 cumplen con
            el resultado correcto, los puntos 3 y 4 corren en replit con un
            resultado lógico y acertado , sustenta claramente la lógica de cómo
            desarrolló los mismos, investiga y aplica los recursos dados y/o
            encuentra recursos por sí mismo para solucionar el problema a
            resolver, entiende que al realizar el ejercicio salen errores y debe
            tener la capacidad de resolverlos tolerando el nivel de frustración
            que se pueda dar.
          </p>
          <p className="">
            <span className="interviewerCardSpan fourPoints"> 4 puntos:</span>{" "}
            Cumple con los 4 puntos de la prueba: los puntos 1 y 2 cumplen con
            el resultado correcto, los puntos 3 y 4 corren en replit y la
            respuesta de uno de los 2 puntos no es correcta de acuerdo al
            enunciado, sustenta la lógica de cómo desarrolló el mismo, investiga
            y aplica los recursos dados y/o encuentra recursos por sí mismo para
            solucionar el problema a resolver, entiende que al realizar el
            ejercicio salen errores y debe tener la capacidad de resolverlos
            tolerando el nivel de frustración que se presentó.{" "}
          </p>
          <p className="">
            <span className="interviewerCardSpan threePoints"> 3 puntos:</span>{" "}
            Cumple con 4 puntos de la prueba: los puntos 1 y 2 cumplen con el
            resultado correcto, de los puntos 3 y 4, realiza 1 solo con un
            resultado correcto y el otro con resultado incorrecto, sustenta la
            lógica de cómo desarrolló el mismo y el porqué no pudo realizar el
            otro ejercicio , utiliza los recursos dados para realizar la prueba.{" "}
          </p>
          <p className="">
            <span className="interviewerCardSpan redPoints"> 2 puntos:</span>
            Cumple con 3 puntos de la prueba: los puntos 1 y 2 cumplen con el
            resultado correcto, de los puntos 3 y 4, realiza uno solo con un
            resultado correcto, sustenta la lógica de cómo desarrolló el mismo y
            el porqué no pudo realizar el otro ejercicio, utiliza los recursos
            dados para realizar la prueba.{" "}
          </p>
          <p className="">
            <span className="interviewerCardSpan redPoints"> 1 punto:</span>{" "}
            Realiza 2 o menos puntos de la prueba, no logra sustentar el por qué
            no pudo realizar los ejercicios dados en la prueba. No investiga y/o
            utiliza los recursos dados para realizar la prueba, presenta una
            tolerancia baja a la frustración que se presentaron con los
            ejercicios.{" "}
          </p>
          <p className="card-footer">
            Nombre Aspirante
            <select className="interviewerSelect" name="" id="">
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </p>
        </div>
      </div>

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
