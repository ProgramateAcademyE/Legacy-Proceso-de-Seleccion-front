import React from "react";

const Step1 = ({ data, handeleChange }) => {
  const {
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    documentType,
    documentNumber,
    documentPdf,
    dateOfBirth,
    age,
    sex,
    maritalStatus,
    email,
    phone1,
    phone2,
  } = data;

  //   const variable = auth.user.id

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
            <option value="CC">Cédula de extranjería</option>
            <option value="TI">Permiso Especial de Permanencia - PEP</option>
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
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Sexo (Según documento de identidad)</label>
          <select
            name="sex"
            onChange={handeleChange}
            value={sex}
            className="form-select"
          >
            <option value="cc">Selecciona tu Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
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
            <option value="Casado">Casado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="Separación en proceso judicial">Separación en proceso judicial</option>
            <option value="Union libre">Union libre</option>
            <option value="Viudo">Viudo</option>

          </select>
        </div>
      </div>
      <div className="row mt-4">
      <h2>Información de contacto</h2>
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
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Teléfono principal de contacto
          </label>
          <input
            type="number"
            className="form-control"
            name="phone1"
            onChange={handeleChange}
            value={phone1}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
            Teléfono alterno de contacto
          </label>
          <input
            type="number"
            className="form-control"
            name="phone2"
            onChange={handeleChange}
            value={phone2}
          />
        </div>
        <div className="row mt-4">
{/*           <div htmlFor="" className="col-12 col-md-6">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Step1;
