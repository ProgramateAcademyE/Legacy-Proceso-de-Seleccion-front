import React from "react";
import ViewerCalificationBox from "../../components/viewer/ViewerCalificationBox";
import ViewerTable from "../../components/viewer/ViewerTable";
import "./ViewerAssesment.css";

const ViewerAssesment = () => {
  return (
    <>
      <div className="viewerAssesmentContainer">
        <h1 className="viewerAssesmentTitle"><span className="viewerSpan">OBSERVADOR ASSESMENT</span></h1>

        <h4 className="">
          Lista de estudiantes agendados para hoy...
        </h4>

        <ViewerTable />

        <h1 className="viewerAssesmentTitle2"><span className="viewerSpan">OBSERVADOR CALIFICACIÓN</span></h1>
        <ViewerCalificationBox />
      </div>
    </>
  );
};

export default ViewerAssesment;
