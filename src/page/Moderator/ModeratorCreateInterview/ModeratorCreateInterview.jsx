import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ModeratorCreateInterview.css";
import "../../../components/moderatorForm/ModeratorForm.css";
import ModeratorForm from "../../../components/moderatorForm/ModeratorForm";

const ModeratorCreateInterview = () => {
  return (
    <>
      <div className="moderatorContainerInterview">
        <div className="moderatorCreateInterviewContainer">
          <h1 className="moderatorCreateInterviewTitle">Crear Reunión </h1>

          <ModeratorForm />
        </div>
      </div>
    </>
  );
};

export default ModeratorCreateInterview;
