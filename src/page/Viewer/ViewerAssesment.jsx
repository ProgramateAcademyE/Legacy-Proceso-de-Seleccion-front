import React from "react";
import ViewerCalificationBox from "../../components/viewer/ViewerCalificationBox";
import ViewerTable from "../../components/viewer/ViewerTable";
import "./ViewerAssesment.css";

const ViewerAssesment = () => {
  return (
    <>
      <div className="viewerAssesmentContainer">
        <h1 className="viewerAssesmentTitle">OBSERVADOR ASSESMENT</h1>

        <h4 className="">
          Lista de estudiantes agendados para el 30 de marzo en la jornada de la
          mañana
        </h4>

        <ViewerTable />

        <h1 className="viewerAssesmentTitle2">OBSERVADOR ASSESMENT</h1>
        <ViewerCalificationBox />
      </div>
    </>
  );
};

export default ViewerAssesment;
