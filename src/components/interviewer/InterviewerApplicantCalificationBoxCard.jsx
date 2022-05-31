import React from "react";
import "./InterviewerApplicants.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InterviewerApplicantsCalificationBoxCard = (props) => {
  return (
    <div className="card">
      <h4 className="card-header">{props.title}</h4>
      <br />
      <h4 className="card-title">Preguntas</h4>
      <p className="">
        <span className="interviewerCardSpan"> 1. </span> {props.question1}
      </p>
      <br />
      <p className="">
        <span className="interviewerCardSpan"> a. </span> {props.question1a}
      </p>
      <br />
      <br />
      <p className="">
        <span className="interviewerCardSpan"> b. </span> {props.question1b}
      </p>
      <br />
      <br />
      <p className="">
        <span className="interviewerCardSpan"> c. </span> {props.question1c}
      </p>
      <br />
      <br />
      <p className="">
        <span className="interviewerCardSpan"> d. </span> {props.question1d}
      </p>
      <br />
      <br />
      <p className="">
        <span className="interviewerCardSpan"> e. </span> {props.question1e}
      </p>
      <br />
      <br />
      <p className="">
        <span className="interviewerCardSpan"> f. </span> {props.question1f}
      </p>
      <br />
      <p className="">
        <span className="interviewerCardSpan"> 2. </span> {props.question2}
      </p>

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
    </div>
  );
};

export default InterviewerApplicantsCalificationBoxCard;
