import React from "react";
import "./NewCohort.scss";
import { Link } from "react-router-dom";

const NewCohort = () => {
  return (
    <>
    <div className="spirants">
      <div className="section__aspirants">
        <div className="section__content d-flex justify-content-between">
          <span className="upperCase bold">Nueva Cohorte</span>
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i class="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Nueva Cohorte</span>
          </div>
        </div>
        <div className="container__title">
          <h2>Nueva Cohorte</h2>
        </div>
        <div className="box">
          <div className="container__new__cohorte">
            <div className="column__1">
              <div className="content__input input_1">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Nueva Cohorte
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre Nueva cohorte"
                  />
                </div>
              </div>
              <div className="content__input input_2">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Cupos
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    min="0"
                    step="1"
                    max=""
                  />
                </div>
              </div>
            </div>
            <div className="colunm__2">
              <div className="content__input input_3">
                {" "}
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Fecha de inicio
                  </label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div className="content__input input_4">
                {" "}
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Fecha de cierre
                  </label>
                  <input type="date" class="form-control" />
                </div>
              </div>
            </div>
            <div className="colunm__3">
              <div className="content__input input_5">
                {" "}
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Inicio del Bootcamp
                  </label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div className="content__input input_6">
                {" "}
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Cierre del Bootcamp
                  </label>
                  <input type="date" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="buttom__save">
            <Link to="/convocatoria">
              <button type="button" class="btn btn-success">
                Guardar Cambios
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewCohort;
