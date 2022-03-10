import React from "react";

const Step3 = ({ data, handeleChange }) => {

    const {
        stratum,
        dateOfBirth,
        age,
        birthdayOnFormation,
        sex,
        maritalStatus,
        soloLearnProfile,
        dreams,
        motivation,
      } = data;
  return (
    <>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Estrato socioeconómico</label>
          <select
            name="stratum"
            onChange={handeleChange}
            value={stratum}
            className="form-select"
          >
            <option value="cc">Selecciona tu Estrato</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            onChange={handeleChange}
            value={dateOfBirth}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Edad actual
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            onChange={handeleChange}
            value={age}
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Si cumple 18 años durante la formación, ingrese la fecha de
            cumpleaños
          </label>
          <input
            type="date"
            className="form-control"
            name="birthdayOnFormation"
            onChange={handeleChange}
            value={birthdayOnFormation}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">sexo</label>
          <select
            name="sex"
            onChange={handeleChange}
            value={sex}
            className="form-select"
          >
            <option value="cc">Selecciona tu Sexo</option>
            <option value="masculino">masculino</option>
            <option value="femenino">femenino</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Estado Civil</label>
          <select
            name="maritalStatus"
            onChange={handeleChange}
            value={maritalStatus}
            className="form-select"
          >
            <option value="cc">Selecciona tu Estado Civil</option>
            <option value="Soltero">Soltero</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Union libre">Union libre</option>
            <option value="Casado">Casado</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Número del perfil de Sololearn</label>
          <input
            type="number"
            className="form-control"
            name="soloLearnProfile"
            onChange={handeleChange}
            value={soloLearnProfile}
          />
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Cuáles son tus principales sueños en la vida y cómo la formación te
            aportará a cumplirlos?
          </label>
          <textarea
            type="text"
            className="form-control"
            name="dreams"
            onChange={handeleChange}
            value={dreams}
          ></textarea>
        </div>
      </div>

      <div className="row mt-4">

        <div htmlFor="" className="col-12 col-md-12">
          <label className="form-label">
            Cuéntanos en el siguiente espacio en un párrafo de motivación ¿qué
            es prográmate para ti? ¿Qué es lo que más te interesa de la
            metodología? ¿Por qué quieres ser parte de Prográmate?
          </label>
          <textarea
            type="text"
            className="form-control"
            name="motivation"
            onChange={handeleChange}
            value={motivation}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Step3;
