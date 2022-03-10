import React, { useState, useEffect } from "react";

const Step1 = ({ data, handeleChange }) => {
  const {
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    documentType,
    documentNumber,
    documentPdf,
    email,
    phone,
    nacionality,
    livesInColombia,
    migrant,
    address,
    locationInBogota,
    municipalityOfResidency,
    residencyDepartment
  } = data;

  //   const variable = auth.user.id

  const [countries, setCountries] = useState([]);

  const getCountry = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const request = await fetch(url);
    const countrie = await request.json();
    const countries = countrie.map((item) => item.name.common).sort();
    setCountries(countries);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Primer Nombre
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder=""
            onChange={handeleChange}
            value={firstName}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Segundo Nombre
          </label>
          <input
            type="text"
            name="secondName"
            className="form-control"
            placeholder=""
            onChange={handeleChange}
            value={secondName}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Primer Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="firstSurname"
            placeholder=""
            onChange={handeleChange}
            value={firstSurname}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Segundo Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="secondSurname"
            placeholder=""
            onChange={handeleChange}
            value={secondSurname}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Tipo de documento</label>
          <select
            name="documentType"
            onChange={handeleChange}
            value={documentType}
            className="form-select"
          >
            <option value="cc">Selecciona el tipo de documento</option>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Número de documento
          </label>
          <input
            type="number"
            className="form-control"
            name="documentNumber"
            onChange={handeleChange}
            value={documentNumber}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="formFile" className="form-label">
            Fotocopia de documento de identidad
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="documentPdf"
            onChange={handeleChange}
            value={documentPdf}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handeleChange}
            value={email}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Teléfono de contacto
          </label>
          <input
            type="number"
            className="form-control"
            name="phone"
            onChange={handeleChange}
            value={phone}
          />
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Nacionalidad</label>
          <select
            name="nacionality"
            onChange={handeleChange}
            value={nacionality}
            className="form-select"
          >
            <option value="select">Selecciona un pais</option>
            {countries.map((countrie) => (
              <option key={countrie} value={countrie}>
                {countrie}
              </option>
            ))}
          </select>
        </div>
        <div className="row mt-4">
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">¿Eres Migrante?</label>
            <select
              name="migrant"
              onChange={handeleChange}
              value={migrant}
              className="form-select"
            >
              <option value="select">Selecciona si o no</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">¿Vives en Colombia?</label>
            <select
              name="livesInColombia"
              onChange={handeleChange}
              value={livesInColombia}
              className="form-select"
            >
              <option value="select">Selecciona si o no</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">Departamento de residencia</label>
            <select
              name="residencyDepartment"
              onChange={handeleChange}
              value={residencyDepartment}
              className="form-select"
            >
              <option value="select">Selecciona tu Departamento</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
            </select>
          </div>
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">Municipio de Residencia</label>
            <select
              name="municipalityOfResidency"
              onChange={handeleChange}
              value={municipalityOfResidency}
              className="form-select"
            >
              <option value="cc">Selecciona tu Municipio</option>
              <option value="Bogota">Bogota</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Medellin">Medellin</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">
              Si resides en Bogotá, cual es tu localidad de residencia
            </label>
            <select
              name="locationInBogota"
              onChange={handeleChange}
              value={locationInBogota}
              className="form-select"
            >
              <option value="cc">Selecciona tu localidad</option>
              <option value="La Candelaria">La Candelaria</option>
              <option value="Ciudad Bolívar">Ciudad Bolívar</option>
              <option value="Sumapaz">Sumapaz</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="" className="form-label">
              Dirección permanente/recurrent e de residencia
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={handeleChange}
              value={address}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
