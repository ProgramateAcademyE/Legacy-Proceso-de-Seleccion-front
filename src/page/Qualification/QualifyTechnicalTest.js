import React from "react";
import "./QualifyTechnicalTest.css";
import { CSVLink } from "react-csv";

const QualifyTechnicalTest = () => {

    // Get all Profiles

    // Get all Convocatories

    const pruebas1 = [
        {
            id: 1,
            nombre: "nombre1",
            pruebaTecnica: "prueba tecnica1",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: "",
        },
        {
            id: 2,
            nombre: "nombre2",
            pruebaTecnica: "prueba tecnica2",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: "",
        },
        {
            id: 3,
            nombre: "nombre3",
            pruebaTecnica: "prueba tecnica3",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
            calificacion: 2.5,
        },
    ];
    return (
        <>
            <div className="qualify">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">
                        Calificar prueba técnica
                    </span>
                </div>
                <div className="form">
                    <div className="section__table">
                        <table className="table" id="prueba">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre aspirante</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Convocatoria</th>
                                    <th scope="col">Calificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pruebas1.map((prueba, index) => (
                                    <tr key={index}>
                                        <th scope="row">{prueba.id}</th>
                                        <td>{prueba.nombre}</td>
                                        <td>{prueba.link}</td>
                                        <td>{prueba.convocatoria}</td>
                                        <td>
                                            <select
                                                name="qualify"
                                                className="form-select"
                                            >
                                                <option value="select">
                                                    Selecione una opción
                                                </option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <CSVLink data={pruebas1} filename="prueba CSV">
                        <button className="btn btn-success">
                            Exportar CSV
                        </button>
                    </CSVLink>
                </div>
            </div>
        </>
    );
};

export default QualifyTechnicalTest;
