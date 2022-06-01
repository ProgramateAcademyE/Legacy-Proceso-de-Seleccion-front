import React from "react";
import ViewerCalificationBox from "../../components/viewer/ViewerCalificationBox";
import ViewerTable from "../../components/viewer/ViewerTable";
import "./ViewerAssesment.css";

const ViewerAssesment = () => {
  const [currentAspirant, setCurrentAspirant] = React.useState();

  const handleCurrentAspirant = (newAspirant) => {
    console.log("function", newAspirant);
    setCurrentAspirant(newAspirant);
  };
  return (
    <>
      <div className="viewerAssesmentContainer">
        <h1 className="viewerAssesmentTitle">
          <span className="viewerSpan">OBSERVADOR ASSESMENT</span>
        </h1>

        <h4 className="viewerAssesmentTitle2">
          Lista de estudiantes agendados para hoy...
        </h4>

        <ViewerTable handleCurrentAspirant={handleCurrentAspirant} />

        <h1 className="viewerAssesmentTitle3">
          <span className="viewerSpan">OBSERVADOR CALIFICACIÓN</span>
        </h1>
        <ViewerCalificationBox currentAspirant={currentAspirant} />
      </div>
    </>
  );
};

export default ViewerAssesment;
