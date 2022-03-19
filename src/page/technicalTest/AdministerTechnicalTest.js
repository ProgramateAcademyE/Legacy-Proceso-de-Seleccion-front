import React from "react";
import { Link } from "react-router-dom";
import Administercss from "./AdministerTechnicalTest.module.css"
import modalDelete from "../../components/alert/alert";


const AdministerTechnicalTest = () => {
    const pruebas1 = [
        {
            id: 1,
            pruebaTecnica: "prueba tecnica1",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
        {
            id: 2,
            pruebaTecnica: "prueba tecnica2",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
        {
            id: 3,
            pruebaTecnica: "prueba tecnica3",
            link: "https://drive.google.com",
            convocatoria: "convocatoria1",
        },
    ];

    return (
        <>
            <div className="section__administer">
                
                    <span className="upperCase bold">
                        Administrar prueba técnica
                    </span>
            
                <div className="Form__Administer">
                    <div className="Button__Administer">
                        <Link to="/agregar">
                            <button className="btn btn-success">Crear</button>
                        </Link>
                    </div>
                    <div className="section__table table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Prueba técnica</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Convocatoria</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pruebas1.map((prueba, index) => (
                                    <tr key={index}>
                                        <th scope="row">{prueba.id}</th>
                                        <td>{prueba.pruebaTecnica}</td>
                                        <td>{prueba.link}</td>
                                        <td>{prueba.convocatoria}</td>
                                        <td>
                                            {/* Commit before */}
                                            {/* <div className="buttom d-flex justify-content-center align-items-center">
                                                <Link to="/administertechnicaltestedit">
                                                    <button className="btn btn-success">
                                                        <i className="fas fa-edit"></i>
                                                    </button>
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        prueba.id &&
                                                        modalDelete(prueba.id)
                                                    }
                                                    className="btn btn-danger"
                                                >
                                                    <i className="fas fa-trash"></i> */}

                                            <Link to="/editar">
                                                <button className="btn btn-success">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                            </Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={modalDelete}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdministerTechnicalTest;
