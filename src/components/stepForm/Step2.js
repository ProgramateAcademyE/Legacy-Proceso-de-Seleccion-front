import React from "react";
import { Form, Field, Formik } from "formik";

const Step2 = () => {

/*       const [countries, setCountries] = useState([]);
      const getCountry = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const request = await fetch(url);
      const countrie = await request.json();
      const countries = countrie.map((item) => item.name.common).sort();
      setCountries(countries);
    };
    
    useEffect(() => {
    getCountry();
    }, []); */
  
/*       const [departments, setDepartments] = useState([]);
      const getDepartment = async () => {
      const depUrl = 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json';
      const requestDep = await fetch(depUrl);
      const department = await requestDep.json();
      const departments = department.map((item) => item.departamento).sort();
      setDepartments(departments);
    };
    
    useEffect(() => {
      getDepartment();
    }, []); */

  return (
  <>
    <Formik
    initialValues={{
      nacionality: '',
      currentCountry: '',
      residencyDepartment: '',
      municipalityOfResidency: '',
      address: '',
      locationInBogota: '',
      stratum: '',
      areaType: '',
      billPdf: '',
      disability: '',
      familyIncome: '',
      householdMembers: '',
      numberOfChildren: '',
      vulnerablePopulation: '',
      pcAccess: '',
      internetAccess: '',
      internetCompany: '',
      mbCount: ''
    }}
    >
      <Form>
{/*       <div className="row mt-4">
      <div className="col-12 col-md-6">
          <label htmlFor="nacionality" className="form-label">País de nacimiento</label>
          <Field
            id="nacionality"
            name="nacionality"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona un país</option>
            {countries.map((countrie) => (
              <option key={countrie} value={countrie}>
                {countrie}
              </option>
            ))}
          </Field>
        </div> */}
{/*        <div className="col-12 col-md-6">
          <label htmlFor="currentCountry" className="form-label">País de residencia</label>
          <Field
            id="currentCountry"
            name="currentCountry"
            className="form-select"
            as="select"
          >
            <option value="select">Selecciona un país</option>
            {countries.map((countrie) => (
              <option key={countrie} value={countrie}>
                {countrie}
              </option>
            ))}
          </Field>
        </div>
      </div> */}
          <div className="row mt-4">
        <div className="col-12 col-md-6">
        <label htmlFor="nacionality" className="form-label">Indica tu país de nacimiento</label>
            <Field
              type="text"
              id="nacionality"
              name="nacionality"
              placeholder=""
              className="form-control"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="currentCountry" className="form-label">Indica tu país de residencia</label>
            <Field
              type="text"
              id="currentCountry"
              name="currentCountry"
              placeholder=""
              className="form-control"
            />
          </div> 
      </div>
    <div className="row mt-4">
        <div htmlFor="residencyDepartment" className="col-12 col-md-6">
        <label htmlFor="residencyDepartment" className="form-label">Si actualmente vives en Colombia, indica tu departamento de residencia</label>
            <Field
              type="text"
              id="residencyDepartment"
              name="residencyDepartment"
              placeholder=""
              className="form-control"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="municipalityOfResidency" className="form-label">Indica tu municipio de Residencia</label>
            <Field
              type="text"
              id="municipalityOfResidency"
              name="municipalityOfResidency"
              placeholder=""
              className="form-control"
            />
          </div> 
      </div>
      <div className="row mt-4">
          <div className="col-12 col-md-6">
            <label htmlFor="locationInBogota" className="form-label">
              Si resides en Bogotá, indica tu localidad de residencia
            </label>
            <Field
              id="documentType"
              name="documentType"
              className="form-select"
              as="select"
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
              </Field>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="address" className="form-label">
              Dirección actual de residencia
            </label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder=""
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-6">
          <label htmlFor="socialClass" className="form-label">Estrato socioeconómico</label>
          <Field
            id="socialClass"
            name="socialClass"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona tu Estrato</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Field>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="areaType" className="form-label">Tipo de área</label>
          <Field
            id="areaType"
            name="areaType"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona el tipo de área</option>
            <option value="Rural">Rural</option>
            <option value="Suburbana">Suburbana</option>
            <option value="Urbana">Urbana</option>
          </Field>
        </div>
        </div>
        <div className="row mt-4">
        <div className="col-12 col-md-6">
        <label htmlFor="billPdf" className="form-label">
          Fotocopia de recibo en PDF
        </label>
        <Field
          type="file"
          id="billPdf"
          name="billPdf"
          placeholder=""
          className="form-control"
        />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="householdMembers" className="form-label">
          ¿Cuantas personas viven en tu casa?
          </label>
          <Field
            id="householdMembers"
            name="householdMembers"
            placeholder=""
            className="form-control"
            as="select"
          >
            <option value="cc">Selecciona el número de personas</option>
            <option value="Vivo solo/a">Vivo solo/a</option>
            <option value="2 personas">2 personas</option>
            <option value="3 personas">3 personas</option>
            <option value="4 personas">4 personas</option>
            <option value="5 personas">5 personas</option>
            <option value="Más de 5 personas">Más de 5 personas</option>
          </Field>
        </div>
      </div>

<div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="numberOfChildren" className="form-label">
          ¿Tienes hijos?
          </label>
          <Field
            id="numberOfChildren"
            name="numberOfChildren"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona el número de hijos</option>
            <option value="No">No</option>
            <option value="Si, uno">Si, uno</option>
            <option value="Si, dos">Si, dos</option>
            <option value="Si, tres">Si, tres</option>
            <option value="Si, cuatro">Si, cuatro</option>
            <option value="Si, cinco o más">Si, cinco o más</option>
          </Field>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="familyIncome" className="form-label">
          ¿Cuál fue el ingreso total de tu grupo familiar el mes pasado?
          </label>
          <Field
            id="familyIncome"
            name="familyIncome"
            className="form-select"
            as="select"
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
          </Field>
        </div>
      </div>
{/*        <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="vulnerablePopulation" className="form-label">
          ¿Perteneces a alguna de las siguientes poblaciones?
          </label>
          <Field
            id="vulnerablePopulation"
            name="vulnerablePopulation"
            className="form-select"
            as="select"
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
          </Field>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="disability" className="form-label">
          ¿Tienes alguna de las siguientes discapacidades?
          </label>
          <Field
            id="disability"
            name="disability"
            className="form-select"
            as="select"
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
          </Field>
        </div>
      </div> */}
        <div className="row mt-4">
  <label htmlFor="vulnerablePopulation" className="form-label">
    Selecciona el/los tipos de población a los que perteneces
  </label>
  <div className="col-12 col-md-6">
  <label>
    <Field type="checkbox" name="Indígena" value="Indígena" />
    Indígena
  </label> <br/>
  <label>
    <Field type="checkbox" name="Raizal" value="Raizal" />
    Raizal
  </label> <br/>
  <label>
    <Field type="checkbox" name="Afrocolombiano" value="Afrocolombiano" />
    Afrocolombiano
  </label> <br/>
  <label>
    <Field type="checkbox" name="Palenquero" value="Palenquero" />
    Palenquero
  </label> <br/>
  <label>
    <Field type="checkbox" name="Gitano" value="Gitano" />
    Gitano
  </label> <br/>
  <label>
    <Field type="checkbox" name="Migrante" value="Migrante" />
    Migrante
  </label> <br/>
  <label>
    <Field type="checkbox" name="Desplazado por la violencia" value="Desplazado por la violencia" />
    Desplazado por la violencia
  </label> <br/>
  </div>
  <div className="col-12 col-md-6">
  <label>
    <Field type="checkbox" name="LGBTIQ+" value="LGBTIQ+" />
    LGBTIQ+
  </label> <br/>
  <label>
    <Field type="checkbox" name="Víctima del conflicto armado" value="Víctima del conflicto armado" />
    Víctima del conflicto armado
  </label> <br/>
  <label>
    <Field type="checkbox" name="Desmovilizado" value="Desmovilizado" />
    Desmovilizado
  </label> <br/>
  <label>
    <Field type="checkbox" name="Persona privadas de libertad o INPEC" value="Persona privadas de libertad o INPEC" />
    Persona privadas de libertad o INPEC
  </label> <br/>
  <label>
    <Field type="checkbox" name="Desplazado por fenómenos naturales" value="Desplazado por fenómenos naturales" />
    Desplazado por fenómenos naturales
  </label> <br/>
  <label>
    <Field type="checkbox" name="Adolescentes en conflicto con la ley penal" value="Adolescentes en conflicto con la ley penal" />
    Adolescentes en conflicto con la ley penal
  </label> <br/>
  </div>
  </div>
  <div className="row mt-4">
  <label htmlFor="disability" className="form-label">
    Selecciona el/los tipos de discapacidad que tengas
  </label>
  <div className="col-12 col-md-6">
  <label>
    <Field type="checkbox" name="Discapacidad física" value="Discapacidad física" />
    Discapacidad física
  </label> <br/>
  <label>
    <Field type="checkbox" name="Discapacidad auditiva" value="Discapacidad auditiva" />
    Discapacidad auditiva
  </label> <br/>
  <label>
    <Field type="checkbox" name="Discapacidad visual" value="Discapacidad visual" />
    Discapacidad visual
  </label> <br/>
  <label>
    <Field type="checkbox" name="Sordoceguera" value="Sordoceguera" />
    Sordoceguera
  </label> <br/>
  </div>
  <div className="col-12 col-md-6">
  <label>
    <Field type="checkbox" name="Discapacidad intelectual+" value="Discapacidad intelectual+" />
    Discapacidad intelectual
  </label> <br/>
  <label>
    <Field type="checkbox" name="Discapacidad psicosocial" value="Discapacidad psicosocial" />
    Discapacidad psicosocial
  </label> <br/>
  <label>
    <Field type="checkbox" name="Discapacidad múltiple" value="Discapacidad múltiple" />
    Discapacidad múltiple
  </label> <br/>
  <label>
    <Field type="checkbox" name="Ninguna" value="Ninguna" />
    Ninguna
  </label> <br/>
  </div>
  </div>
      <div className="row mt-4">
      <div className="col-12 col-md-6">
          <label htmlFor="pcAccess" className="form-label">¿Tienes acceso a un computador?</label>
          <Field
            id="pcAccess"
            name="pcAccess"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Field>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="internetAccess" className="form-label">¿Tienes acceso a internet a través de un plan de servicios de hogar?</label>
          <Field
            id="internetAccess"
            name="internetAccess"
            className="form-select"
            as="select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Field>
        </div>
        </div>
        <div className="row mt-4">
        <div className="col-12 col-md-6">
          <label htmlFor="internetCompany" className="form-label">
          Si tu respondiste sí, ¿con qué operador tienes el servicio de internet plan hogar?
          </label>
          <Field
            type="text"
            id="internetCompany"
            name="internetCompany"
            placeholder=""
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="mbCount" className="form-label">
          ¿De cuantas megas es tu plan hogar?
          </label>
          <Field
            type="text"
            id="mbCount"
            name="mbCount"
            placeholder=""
            className="form-control"
          />
        </div>
      </div>
      </Form>
    </Formik>
  </>
  );
};

export default Step2;
