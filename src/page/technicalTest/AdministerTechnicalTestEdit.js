import React from "react";
import "./AdministerTechnicalTest";
import { Link } from "react-router-dom";

const AdministerTechnicalTestEdit = () => {
    return (
        <div className="section__administer">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Editar prueba técnica</span>
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
                    <label htmlFor="">Puntaje</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        name="prueba_tecnica"
                        // value=""
                        min="0" step="1" max="10"
                    ></input>
                  <Link to="/prueba"> <button 
                class="btn btn-success"
                type="submit"
                value="Enviar prueba"
              >Guardar cambios</button></Link>  
               
                </form>
            </div>
        </div>
    );
};

export default AdministerTechnicalTestEdit;
