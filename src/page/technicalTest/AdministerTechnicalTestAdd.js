import React, { useState } from "react";
import "./AdministerTechnicalTest";
import { Link } from "react-router-dom";

const AdministerTechnicalTestAdd = () => {

    // const [test, setTest] = useState({
    //     url: "",
    //   });
    
    //   const onSubmit = (e) => {
    //     e.preventDefault();
    //     setTest({
    //       url: "",
    //     })
    //   }
    
    //   const handleChange = (e) => {
    //       const {name, value} = e.target
    //       setTest({
    //         ...test,
    //         [name]: value
    //       })
    //   } 
    
    //   const {url} = test

    return (
        <div className="section__administer">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Agregar prueba técnica</span>
                <div className="box__content">
                    <span>Programate</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Prueba técnica</span>
                    <i class="fas fa-chevron-right subtitle" />
                    <span>Administrar prueba técnica</span>
                </div>
            </div>
            <div className="form form-add m">
                <form action="">
                    <label htmlFor="">Prueba técnica</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="prueba_tecnica" 
                        // value=""                   
                        required
                    ></input>
                    <label htmlFor="">Link</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        name="link"
                        // value=""
                        required
                    ></input>
                    <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                    >
                        
                        <option value="1">Convocatoria 1</option>
                        <option value="2">Convocatoria 2</option>
                        <option value="3">Convocatoria 3</option>
                    </select>

                    <div className="buttom__create">
            <Link to="/prueba"> 
             <button type="submit" class="btn btn-success">
                Crear
              </button>
            </Link>
            </div>  
                </form>
            </div>
        </div>
    );
};

export default AdministerTechnicalTestAdd;
