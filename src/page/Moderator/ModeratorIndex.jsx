import React, { useEffect } from "react";
import "./ModeratorDashboard_ApplicantsCited/ModeratorDashboard_ApplicantsCited.css";
import { useSelector } from "react-redux";
import imgEducamas from "../../../src/images/educamas.png";

function ModeratorIndex() {
  const auth = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="moderatorIndex">
        <h1 className="moderatorIndexTitle">Hola {user.names}...</h1>
        <br /> <h2>Bienvenido a Prográmate</h2>
        <img
          className=""
          src="https://i.ibb.co/ZM3jGdB/logoeducamasimbolo.png"
          alt="logo"
          width="250px"
        />
        <img src={imgEducamas} />
        <h3 className="">Página Moderador</h3>
      </div>
    </>
  );
}

export default ModeratorIndex;
