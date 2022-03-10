import React from "react";

const Step2 = ({ data, handeleChange }) => {

    const {
      degreeTitle,
      academicLevel,
      formaltOccupation,
      currentcurrentOccupation,
      victimArmedConflict,
      programataPrevoiousTimes,
      logProgramate,
      pcAccess
      } = data;
  return (
    <>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Máximo Nivel Académico Alcanzado</label>
          <select
            name="academicLevel"
            onChange={handeleChange}
            value={academicLevel}
            className="form-select"
          >
            <option value="cc">Selecciona tu Nivel Académico</option>
            <option value="Bachiller">Bachiller</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Grado">Grado</option>
            <option value="Universitario">Universitario</option>
            <option value="Profesional">Profesional</option>
            <option value="Especialista">Especialista</option>
            <option value="Maestría">Maestría</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Si tu respuesta anterior fue técnico, tecnólogo o grado
            universitario profesional cuéntanos ¿Qué título obtuviste?
          </label>
          <input
            type="text"
            className="form-control"
            name="degreeTitle"
            onChange={handeleChange}
            value={degreeTitle}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Actividad económica /ocupación actual
          </label>
          <select
            name="currentcurrentOccupation"
            onChange={handeleChange}
            value={currentcurrentOccupation}
            className="form-select"
          >
            <option value="cc">Selecciona tu Ocupación</option>
            <option value="Desempleado">Desempleado</option>
            <option value="Empleado">Empleado</option>
            <option value="Independiente">Independiente</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            Si la respuesta anterior es "desempleado", ¿hace cuánto tiempo te
            encuentras en dicha situación?
          </label>
          <input
            type="text"
            className="form-control"
            name="formaltOccupation"
            onChange={handeleChange}
            value={formaltOccupation}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Has tenido antes un empleo formal con contrato?
          </label>
          <select
            name="programataPrevoiousTimes"
            onChange={handeleChange}
            value={programataPrevoiousTimes}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Eres víctima del conflicto armado?
          </label>
          <select
            name="victimArmedConflict"
            onChange={handeleChange}
            value={victimArmedConflict}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">¿Tienes acceso a un computador?</label>
          <select
            name="pcAccess"
            onChange={handeleChange}
            value={pcAccess}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Cuántas veces has intentado ingresar a "Prográmate"?
          </label>
          <input
            type="number"
            className="form-control"
            name="logProgramate"
            onChange={handeleChange}
            value={logProgramate}
          />
        </div>
      </div>
    </>
  );
};

export default Step2;
