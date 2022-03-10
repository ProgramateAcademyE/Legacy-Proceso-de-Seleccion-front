import React from "react";
import "./Modal.scss";

const ModalConvocatory = () => {
    return (
        <div>
            <div className="btn">
                <a href="#convocatoria">
                    <i className="far fa-eye"> </i>
                </a>
            </div>
            <div id="convocatoria" className="modalDialog">
                <div className="content">
                    <a href="#close" title="Close" className="close">
                        X
                    </a>
                    <div className="modalDialog__title">
                        <h2>Cohorte</h2>
                    </div>
                    <div className="modalDialog__content">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex align-item-left item">
                                <p>
                                    <em>Nombre de la cohorte:</em> Cohorte1
                                </p>
                            </div>
                            <div className="col-12 col-md-6 d-flex align-item-left">
                                <p>
                                    <em>Cupos:</em> 150
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-md-6 d-flex align-item-left item">
                                <p>
                                    <em>Fecha de inicio:</em> 21/03/2021
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    <em>Fecha de cierre:</em> 21/12/2021
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-md-6 d-flex align-item-left item">
                                <p>
                                    <em>Inicio del bootcamp:</em> 21/03/2021
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>
                                    <em>Cierre del bootcamp:</em> 21/12/2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalConvocatory;
