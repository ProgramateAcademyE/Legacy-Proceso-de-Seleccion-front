import React from "react";
import "./ViewerCalification.css";

const ViewerCalificationBoxCard = (props) => {
  return (
    <div className="card">
      <h4 className="card-header">{props.title}</h4>
      <br />

      <h4 className="card-text">Calificación</h4>
      <p className="">
        <span className="interviewerCardSpan fivePoints"> 5 puntos:</span>{" "}
        {props.calification5}
      </p>
      <p className="">
        <span className="interviewerCardSpan fourPoints"> 4 puntos:</span>{" "}
        {props.calification4}
      </p>
      <p className="">
        <span className="interviewerCardSpan threePoints"> 3 puntos:</span>{" "}
        {props.calification3}
      </p>
      <p className="">
        <span className="interviewerCardSpan redPoints"> 2 puntos:</span>{" "}
        {props.calification2}
      </p>
      <p className="">
        {" "}
        <span className="interviewerCardSpan redPoints"> 1 punto:</span>{" "}
        {props.calification1}
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
  );
};

export default ViewerCalificationBoxCard;
