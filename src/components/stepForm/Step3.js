import React from "react";

const Step3 = ({ data, handeleChange }) => {

    const {
        degreeTitle,
        academicLevel,
        studiesPdf,
        cvPdf,
        unemployementTime,
        currentcurrentOccupation,
        contractWorker,
        householder,
        firstLanguage,
        secondLanguage,
        languageLevel,
        soloLearnProfile,
        dreams,
        motivation,
      } = data;
  return (
    <>
      <div className="row mt-4">
      <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">Máximo Nivel Académico Alcanzado</label> <br/>
          <select
            name="academicLevel"
            onChange={handeleChange}
            value={academicLevel}
            className="form-select"
          >
            <option value="cc">Selecciona tu Nivel Académico</option>
            <option value="Bachillerato inconcluso">Bachillerato inconcluso</option>
            <option value="Bachiller">Bachiller o equivalente</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Pregrado">Pregrado</option>
            <option value="Especialización">Especialización</option>
            <option value="Maestría">Maestría</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          Si tu respuesta anterior fue de técnico en adelante, cuéntanos ¿Qué título obtuviste?
          </label> <br/>
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
      <div className="col-12 col-md-6">
        <label htmlFor="formFile" className="form-label">
        Certificado de estudio en PDF
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="studiesPdf"
          onChange={handeleChange}
          value={studiesPdf}
        />
        </div>
        <div className="col-12 col-md-6">
        <label htmlFor="formFile" className="form-label">
        Hoja de vida en PDF
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          name="cvPdf"
          onChange={handeleChange}
          value={cvPdf}
        />
        </div>
      </div>
      <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          ¿Cuál de las siguientes categorías describe mejor tu situación laboral?
          </label> <br/>
          <select
            name="currentcurrentOccupation"
            onChange={handeleChange}
            value={currentcurrentOccupation}
            className="form-select"
          >
            <option value="cc">Selecciona tu Ocupación</option>
            <option value="Independiente">Independiente</option>
            <option value="Empleado1">Empleado/a, trabajo entre 1 y 39 horas a la semana</option>
            <option value="Empleado40">Empleado/a, trabajo 40 horas a la semana o más</option>
            <option value="DesempleadoB">Desempleado, busco trabajo</option>
            <option value="DesempleadoN">Desempleado, NO busco trabajo</option>
            <option value="Jubilado">Jubilado/a</option>
            <option value="NoPorDiscapacidad">Discapacitado/a, no puedo trabajar</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          Si la respuesta anterior es "desempleado", ¿Desde hace cuánto tiempo?
          </label> <br/>
          <select
            name="unemployementTime"
            onChange={handeleChange}
            value={unemployementTime}
            className="form-select"
          >
            <option value="cc">Selecciona un tiempo</option>
            <option value="Desempleado1">1 a 2 meses</option>
            <option value="Desempleado3">3 a 4 meses</option>
            <option value="Desempleado5">5 a 6 meses</option>
            <option value="Desempleado7">7 a 11 meses</option>
            <option value="DesempleadoUnAño">Un año</option>
            <option value="DesempleadoDosAños">Dos años</option>
            <option value="DesempleadoMásDos">Más de dos años</option>
            <option value="NoPrimerEmpleo">No he tenido mi primer empleo</option>
          </select>
        </div>
        </div>
        <div className="row mt-4">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
          Si respondiste que cuentas con empleo ¿Personas en tu familia dependen económicamente de tu trabajo?
          </label> <br/>
          <select
            name="householder"
            onChange={handeleChange}
            value={householder}
            className="form-select"
          >
            <option value="cc">Selecciona Si o No</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Has tenido antes un empleo formal con contrato?
          </label> <br/>
          <select
            name="contractWorker"
            onChange={handeleChange}
            value={contractWorker}
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
          <label className="form-label">
            ¿Cuál es tu idioma nativo?
          </label>
          <select
            name="firstLanguage"
            onChange={handeleChange}
            value={firstLanguage}
            className="form-select"
          >
            <option value="cc">Selecciona un idioma</option>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Francés">Francés</option>
            <option value="Ruso">Ruso</option>
            <option value="Alemán">Alemán</option>
            <option value="Portugués">Portugués</option>
            <option value="Catalán">Catalán</option>
            <option value="Japonés">Japonés</option>
            <option value="Coreano">Coreano</option>
            <option value="Italiano">Italiano</option>
            <option value="Árabe">Árabe</option>
            <option value="Hindi">Hindi</option>
            <option value="Mandarín">Mandarín</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Hablas otro idioma?
          </label>
          <select
            name="secondLanguage"
            onChange={handeleChange}
            value={secondLanguage}
            className="form-select"
          >
            <option value="cc">Selecciona un idioma</option>
            <option value="No">No, sólo mi idioma nativo</option>
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Francés">Francés</option>
            <option value="Ruso">Ruso</option>
            <option value="Alemán">Alemán</option>
            <option value="Portugués">Portugués</option>
            <option value="Catalán">Catalán</option>
            <option value="Japonés">Japonés</option>
            <option value="Coreano">Coreano</option>
            <option value="Italiano">Italiano</option>
            <option value="Árabe">Árabe</option>
            <option value="Hindi">Hindi</option>
            <option value="Mandarín">Mandarín</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        </div>
        <div className="row mt-12">
        <div htmlFor="" className="col-12 col-md-6">
          <label className="form-label">
            ¿Qué nivel tienes en este idioma?
          </label>
          <select
            name="languageLevel"
            onChange={handeleChange}
            value={languageLevel}
            className="form-select"
          >
            <option value="cc">Selecciona un nivel</option>
            <option value="Bajo">Bajo</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Intermedio-Alto">Intermedio-Alto</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
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
      </div>
      <div className="row mt-4">
      <div htmlFor="" className="col-12 col-md-12">
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
          </label> <br/>
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
