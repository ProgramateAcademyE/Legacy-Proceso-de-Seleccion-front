import React, { useState, useEffect } from "react";

const Step2 = ({ data, handeleChange }) => {

    const {
      nacionality,
      currentCountry,
      residencyDepartment,
      municipalityOfResidency,
      address,
      locationInBogota,
      stratum,
      areaType,
      disability,
      familyIncome,
      householdMembers,
      numberOfChildren,
      vulnerablePopulation,
      pcAccess,
      internetAccess,
      internetCompany
      } = data;

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
    
    const [departments, setDepartments] = useState([]);
      const getDepartment = async () => {
      const depUrl = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json';
      const requestDep = await fetch(depUrl);
      const department = await requestDep.json();
      const departments = department.map((item) => item.departamento).sort();
      setDepartments(departments);
    };
    
    useEffect(() => {
      getDepartment();
    }, []);
    
  return (
  <>
    <div className="row mt-4">
      <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">País de nacimiento</label>
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
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">País de residencia</label>
          <select
            name="currentCountry"
            onChange={handeleChange}
            value={currentCountry}
            className="form-select"
          >
            <option value="select">Selecciona un país</option>
            {countries.map((countrie) => (
              <option key={countrie} value={countrie}>
                {countrie}
              </option>
            ))}
          </select>
        </div>
      </div>
    <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">Si actualmente vives en Colombia, selecciona departamento de residencia</label>
            <select
              name="residencyDepartment"
              onChange={handeleChange}
              value={residencyDepartment}
              className="form-select"
            >
              <option value="select">Selecciona tu departamento</option>
              {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
            </select>
          </div>
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">Municipio de Residencia</label>
            <input
              type="text"
              className="form-control"
              name="municipalityOfResidency"
              onChange={handeleChange}
              value={municipalityOfResidency}
            />
          </div>
      </div>
      <div className="row mt-4">
          <div htmlFor="" className="col-12 col-md-6">
            <label className="form-label">
              Si resides en Bogotá, indica tu localidad de residencia
            </label>
            <select
              name="locationInBogota"
              onChange={handeleChange}
              value={locationInBogota}
              className="form-select"
            >
              <option value="cc">Selecciona tu localidad</option>
              <option value="Usaquén">Usaquén</option>
              <option value="Chapinero">Chapinero</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="San Cristóbal">San Cristóbal</option>
              <option value="Usme">Usme</option>
              <option value="Tunjuelito">Tunjuelito</option>
              <option value="Bosa">Bosa</option>
              <option value="Kennedy">Kennedy</option>
              <option value="Fontibón">Fontibón</option>
              <option value="Engativá">Engativá</option>
              <option value="Suba">Suba</option>
              <option value="Barrios Unidos">Barrios Unidos</option>
              <option value="Teusaquillo">Teusaquillo</option>
              <option value="Los Mártires">Los Mártires</option>
              <option value="Antonio Nariño">Antonio Nariño</option>
              <option value="Puente Aranda">Puente Aranda</option>
              <option value="Candelaria">Candelaria</option>
              <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
              <option value="Ciudad Bolívar">Ciudad Bolívar</option>
              <option value="Sumapaz">Sumapaz</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="" className="form-label">
              Dirección actual de residencia
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
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Tipo de área</label>
          <select
            name="areaType"
            onChange={handeleChange}
            value={areaType}
            className="form-select"
          >
            <option value="cc">Selecciona el tipo de área</option>
            <option value="Rural">Rural</option>
            <option value="Suburbana">Suburbana</option>
            <option value="Urbana">Urbana</option>
          </select>
        </div>
        </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Cuantas personas viven en tu casa?
          </label>
          <select
            name="householdMembers"
            onChange={handeleChange}
            value={householdMembers}
            className="form-select"
          >
            <option value="cc">Selecciona el número de personas</option>
            <option value="Vivo solo/a">Vivo solo/a</option>
            <option value="2 personas">2 personas</option>
            <option value="3 personas">3 personas</option>
            <option value="4 personas">4 personas</option>
            <option value="5 personas">5 personas</option>
            <option value="Más de 5 personas">Más de 5 personas</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Tienes hijos?
          </label>
          <select
            name="numberOfChildren"
            onChange={handeleChange}
            value={numberOfChildren}
            className="form-select"
          >
            <option value="cc">Selecciona el número de hijos</option>
            <option value="No">No</option>
            <option value="Si, uno">Si, uno</option>
            <option value="Si, dos">Si, dos</option>
            <option value="Si, tres">Si, tres</option>
            <option value="Si, cuatro">Si, cuatro</option>
            <option value="Si, cinco o más">Si, cinco o más</option>
          </select>
        </div>
        </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Cuál fue el ingreso total de tu grupo familiar el mes pasado?
          </label>
          <select
            name="familyIncome"
            onChange={handeleChange}
            value={familyIncome}
            className="form-select"
          >
            <option value="cc">Selecciona el rango de ingreso</option>
            <option value="Menos de un salario mínimo">Menos de un salario mínimo</option>
            <option value="Un salario mínimo">Un salario mínimo</option>
            <option value="Más de 1 hasta 2 salarios mínimos">Más de 1 hasta 2 salarios mínimos </option>
            <option value="Más de 2 hasta 3 salarios mínimos">Más de 2 hasta 3 salarios mínimos</option>
            <option value="Más de 3 hasta 5 salarios mínimos">Más de 3 hasta 4 salarios mínimos</option>
            <option value="Más de 5 hasta 6 salarios mínimos">Más de 4 hasta 5 salarios mínimos</option>
            <option value="Más de 5 hasta 6 salarios mínimos">Más de 5 hasta 6 salarios mínimos</option>
            <option value="Más de 5 hasta 6 salarios mínimos">Más de 6 hasta 7 salarios mínimos</option>
            <option value="Más de 6 salarios mínimos">Más de 7 salarios mínimos</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Perteneces a alguna de las siguientes poblaciones?
          </label>
          <select
            name="vulnerablePopulation"
            onChange={handeleChange}
            value={vulnerablePopulation}
            className="form-select"
          >
            <option value="cc">Selecciona el tipo de población</option>
            <option value="Indígena">Indígena</option>
            <option value="Afrocolombiano">Afrocolombiano</option>
            <option value="Raizal">Raizal</option>
            <option value="Palenquero">Palenquero</option>
            <option value="Gitano">Gitano</option>
            <option value="Migrante">Migrante</option>
            <option value="Desplazado por la violencia">Desplazado por la violencia</option>
            <option value="Víctima del conflicto armado">Víctima del conflicto armado</option>
            <option value="Desmovilizado">Desmovilizado</option>
            <option value="Desplazado por fenómenos naturales">Desplazado por fenómenos naturales</option>
            <option value="Persona privadas de libertad o INPEC">Persona privadas de libertad o INPEC</option>
            <option value="Adolescentes en conflicto con la ley penal">Adolescentes en conflicto con la ley penal</option>
            <option value="LGBTIQ+">LGBTIQ+</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Tienes alguna de las siguientes discapacidades?
          </label>
          <select
            name="disability"
            onChange={handeleChange}
            value={disability}
            className="form-select"
          >
            <option value="cc">Selecciona el tipo de discapacidad</option>
            <option value="Discapacidad física">Discapacidad física</option>
            <option value="Discapacidad auditiva">Discapacidad auditiva</option>
            <option value="Discapacidad visual">Discapacidad visual</option>
            <option value="Sordoceguera">Sordoceguera</option>
            <option value="Discapacidad intelectual">Discapacidad intelectual</option>
            <option value="Discapacidad psicosocial">Discapacidad psicosocial</option>
            <option value="Discapacidad múltiple">Discapacidad múltiple</option>
            <option value="Ninguna">Ninguna</option>
            <option value="Otra">Otra</option>
          </select>
        </div>
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
        </div>
        <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">¿Tienes acceso a internet a través de un plan de servicios de hogar?</label>
          <select
            name="internetAccess"
            onChange={handeleChange}
            value={internetAccess}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="" className="form-label">
          Si tu respondiste sí, ¿con qué operador tienes el servicio de internet plan hogar?
          </label>
          <input
            type="internetCompany"
            className="form-control"
            name="internetCompany"
            onChange={handeleChange}
            value={internetCompany}
          />
        </div>
      </div>
  </>
  );
};

export default Step2;
