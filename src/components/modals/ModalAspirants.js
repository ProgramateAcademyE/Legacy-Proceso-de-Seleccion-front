import React from "react";
import "./Modal.scss";

const ModalAspirants = () => {
    return (
        <div>
            <div className="btn">
                <a href="#aspirante">
                    <i className="far fa-eye"> </i>
                </a>
            </div>
            <div id="aspirante" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" className="close">
                        X
                    </a>
                    <h2>Datos del estudiante</h2>
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer nombre:</em> Pedro
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-item-left">
                            <p>
                                <em>Segundo nombre:</em> Pedro
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 d-flex align-item-left item">
                            <p>
                                <em>Primer apellido:</em> Ayala
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Segundo apellido:</em> Pedro
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Tipo de documento:</em> CC
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Número de documento:</em> 1026456789
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Fotocopia de documento de identidad:</em>{" "}
                                PDF
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Correo electónico:</em> Pedro@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Telefono:</em> 3002345678
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Nacionalidad:</em> Colombia
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>¿Eres Migrante?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>¿Vives en Colombia?:</em> Si
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Departamento de residencia:</em> Bogotá
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Municipio de Residencia:</em> Bogotá
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si resides en Bogotá, cual es tu localidad
                                    de residencia:{" "}
                                </em>
                                Puente Aranda
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Dirección:</em> calle 11 # 17-09
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Estrato socioeconómico:</em> 1
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Fecha de nacimiento:</em> 23/09/1993
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Edad actual:</em> 27
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si cumple 18 años durante la formación,
                                    ingrese la fecha de cumpleaños:{" "}
                                </em>
                                23/03/2021
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Sexo:</em> Femenino
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Estado Civil:</em> soltera
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Máximo Nivel Académico Alcanzado:</em>{" "}
                                Técnico
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    {" "}
                                    Si tu respuesta anterior fue técnico,
                                    tecnólogo o grado universitario profesional
                                    cuéntanos ¿Qué título obtuviste?:{" "}
                                </em>{" "}
                                Tecnico en asistencia administrativa
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Actividad económica /ocupación actual:</em>{" "}
                                Desempleado
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Si la respuesta anterior es "desempleado",
                                    ¿hace cuánto tiempo te encuentras en dicha
                                    situación?:
                                </em>{" "}
                                Hace 1 año
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>¿Has tenido antes un empleo formal?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>¿Eres víctima del conflicto armado?:</em> Si
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>¿Tienes acceso a un computador?:</em> Si
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ¿Cuántas veces has intentado ingresar a
                                    "Prográmate"?:{" "}
                                </em>{" "}
                                2
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>Número del perfil de Sololearn:</em> 456789
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ¿Cuáles son tus principales sueños en la
                                    vida y cómo la formación te aportará a
                                    cumplirlos?:
                                </em>{" "}
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    Cuéntanos en el siguiente espacio en un
                                    párrafo de motivación ¿qué es prográmate
                                    para ti? ¿Qué es lo que más te interesa de
                                    la metodología? ¿Por qué quieres ser parte
                                    de Prográmate?:{" "}
                                </em>{" "}
                                lorem lorem
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                <em>
                                    ¿Cuáles son tus principales sueños en la
                                    vida y cómo la formación te aportará a
                                    cumplirlos?:
                                </em>{" "}
                                lorem lorem lorem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAspirants;
