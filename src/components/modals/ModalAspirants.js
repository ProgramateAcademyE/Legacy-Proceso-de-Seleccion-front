import React from "react";
import modalcss from "./Modal.module.css";

const ModalAspirants = (Data) => {
    let
        {   firstName,
            secondName,
            firstSurname,
            secondSurname,
            documentType,
            documentNumber,
            documentPdf,
            age,
            sex,
            nacionality,
            residencyDepartment,
            municipalityOfResidency,
            locationInBogota,
            Stratum,
            dateOfBirth,
            phone1,
            phone2,
            email,


            maritalStatus,
            currentCountry,
            address,
            areaType,

            billPdf,
            disability,
            pcAccess,
            familyIncome,
            householdMembers,
            numberOfChildren,
            internetCompany,
            mbCount,
            internetAccess,
            vulnerablePopulation,
            degreeTitle,
            academicLevel,
            studiesPdf,
            cvPdf,
            unemployementTime,
            currentOccupation,
            contractWorker,
            householder,
            firstLanguage,
            secondLanguage,
            languageLevel,
            soloLearnProfile } = Data



    return (
        <div>

            <a href="#aspirante">
                <i className="far fa-eye"> </i>
            </a>

            <div id="aspirante" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" className="close">
                        X
                    </a>
                    <h2>Datos del estudiante</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                {" Primer nombre:" + firstName}
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>
                                {"Segundo nombre:" + secondName}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                {" Primer Apellido:" + firstSurname}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Segundo Apellido:" + secondSurname}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Tipo de Docuemnto:" + documentType}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Numero de documento:" + documentNumber}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Pdf de el Documento:" + documentPdf}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Edad:" + age }
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Sexo:" + sex}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Nacionalidad:" + nacionality}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Departamento de residencia:" + residencyDepartment}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Municipio de residencia:" + municipalityOfResidency}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Locacion en bogota:" + locationInBogota}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Estrato:" + Stratum}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Telefono 1:" + phone1}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p> {"Pais de Nacimiento:" + Paisdenacimiento}

                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Pais de residencia:" + Paisderesidencia}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Departamento:" + Departamento}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Municipio:" + Municipio}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Direccion" + Direccion}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Localidad:" + Localidad}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Estrato" + Estrato}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Tipo De Area:" + Tipodearea}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Pdf de recibo:" + PDFderecibo}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Discapacidad:" + Discapacidad}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Ingresos Familiarias:" + Ingresosfamiliares}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Numero de integrantes de el hogar:" + Numerodeintegrantesdelhogar}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Hijos:" + Hijos}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Poblacion:" + Poblacion}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Acceso a PC:" + Accesoapc}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Acceso a Internet:" + Accesoainternet}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Compañia de internet:" + Compañiadeinternet}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Megas:" + Megas}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Maximo Estudio alcanzado:" + Maximoestudioalcanzado}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>
                            {"Titulo:" + Título}
                        </p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Certificado De Acta:" + PDFdelcertificadooacta}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Titulo:" + Título}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Situacion Laboral:" + Situacionlaboral}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Tiempo de desempleo:" + Tiempodedesempleo}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Personas dependientes Economicamentes:" + Personasdependeneconómicamente}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Ha tenido Empleo:" + Hatenidoempleoformal}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Idioma Nativo:" + Idiomanativo}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Otro Idioma:" + Otroidioma}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                {"Niveldeidioma:" + Niveldeidioma}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                {"Codigoperfilensololearn:" + Codigoperfilensololearn}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAspirants;
