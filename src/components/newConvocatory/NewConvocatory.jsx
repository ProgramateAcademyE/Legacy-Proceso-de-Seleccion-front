import React from "react";
import "./NewConvocatory.scss";
import { Link } from "react-router-dom";

const NewConvocatory = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="containerFirstView">
          <div className="containerP">
            <p>
              No hay convocatorias <br></br>
              ¿Deseas crear una nueva convocatoria?
            </p>
          </div>
          <div className="containerButton">
            <Link to="/nuevacohorte">
             <button type="submit" class="btn btn-success">
                Crear
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewConvocatory;
