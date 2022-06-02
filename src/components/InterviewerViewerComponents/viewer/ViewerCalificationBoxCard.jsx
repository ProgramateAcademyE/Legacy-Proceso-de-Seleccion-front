import React from "react";
import "./ViewerCalification.css";

const ViewerCalificationBoxCard = (props) => {
  const { aspirants } = props;
  return (
    <div className="card">
      <h4 className="card-header">{props.title}</h4>
      <br />

      <h4 className="card-text">Calificación</h4>
      {props.calification
        .sort((a, b) => b.value - a.value)
        .map((c) => (
          <p className="viewerCardParagraph">
            <span
              className={`interviewerCardSpan ${
                c.value === 5
                  ? "fivePoints"
                  : c.value === 4
                  ? "fourPoints"
                  : c.value === 3
                  ? "threePoints"
                  : "redPoints"
              }`}
            >
              {`${c.value} puntos: `}
            </span>
            {c.description}
          </p>
        ))}

      {aspirants.map((a) => (
        <p className="card-footer">
          {a.names}
          <select className="interviewerSelect" name="" id="">
            <option value="">Selecciona un valor</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </p>
      ))}
    </div>
  );
};

export default ViewerCalificationBoxCard;
