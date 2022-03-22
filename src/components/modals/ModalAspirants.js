import React from "react";
import modalcss  from "./Modal.module.css";

const ModalAspirants = (Data) => {
let InfoAspirant =
{Primernombre,
Segundonombre,
Primerapellido,
Segundoapellido,
Tipodedocumento,
Numerodedocumento,
PDFdedocumento,
Fotodeperfil,
Fechadenacimiento,
Edad,
Sexo,
Estadocivil,
Correoelectronico,
Telefonoprimario,
Telefonoallterno,
Paisdenacimiento,
Paisderesidencia,
Departamento,
Municipio,
Direccion,
Localidad,
Estrato,
Tipodearea,
PDFderecibo,
Discapacidad,
Ingresosfamiliares,
Numerodeintegrantesdelhogar,
Hijos,
Poblacion,
Accesoapc,
Accesoainternet,
Compañiadeinternet,
Megas,
Maximoestudioalcanzado,
Título,
PDFdelcertificadooacta,
Situacionlaboral,
Tiempodedesempleo,
Personasdependeneconómicamente,
Hatenidoempleoformal,
Idiomanativo,
Otroidioma,
Niveldeidioma,
Codigoperfilensololearn} = Data



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
                               {" Primer nombre:" + Primernombre}
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>
                            {"Segundo nombre:" + Segundonombre}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                            {" Primer Apellido:" + Primerapellido}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Segundo Apellido:" + Segundoapellido}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Tipo de Docuemnto:" + Tipodedocumento}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Numero de documento:" + Numerodedocumento}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Pdf de el Documento:" + PDFdedocumento}                           
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Foto de perfil:" + Fotodeperfil}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Fecha de nacimiento:" + Fechadenacimiento}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Edad:" + Edad}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Sexo:" + Sexo}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Estado Civil:" + Estadocivil}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Email:" + Correoelectronico}
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                            {"Telefono Primario:" + Telefonoprimario}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                            {"Telefono Alterno:" + Telefonoallterno}
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
