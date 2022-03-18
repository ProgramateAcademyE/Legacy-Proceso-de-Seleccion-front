import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../auth/Spinner'
import { getFormAll } from "../../actions/userAction";
import Technincaltest from "./TechnicalTestAspirant.module.css";

const TechnicalTestAspirant = () => {
  const [test, setTest] = useState({
    linktest: "",
  });

  const { user } = useSelector((state) => state.auth);

  const { form } = useSelector((state) => state.auth);

  const [spinner, setSpinner] = useState(false)

  const { linktest } = form;

  console.log("El form", linktest);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTest({
      ...test,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true)
    console.log(test);
    try {
      const res = await axios.put(
        `http://localhost:3001/api/candidate/updatetest/${user.id}`,
        test
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setTest({
      linktest: "",
    });
    setTimeout(() => {
      window.location.reload()
      setSpinner(false)
  }, 2000)
  };

  useEffect(() => {
    dispatch(getFormAll(user?.id));
  }, [dispatch, user]);



  // const { linktest } = test;

  return (
    <>
      <div className="technical__test">
        {/* <div className="technical__test-upload test">
          <h4 className="title__test">Descargar prueba tecnica</h4>
          <div className="content__test download">
            <p className="text__download">
              Dale clic en el boton para descargar la prueba técnica, y recuerda
              subir la solucion en el tiempo estipulado.
            </p>
            <div>
              <a
                href="https://drive.google.com/drive/folders/1nIhnp0tw-OiBJjtWTuRB3IHPJYz0hd7y?usp=sharing"
                target="_blank"
              >
                <button type="button" className="btn btn-success">
                  Link prueba tecnica
                </button>
              </a>
            </div>
          </div>
        </div> */}
        {
          spinner && <Spinner/>
        }
              
        <div className="technical__test-download test">
          <h4 className="title__test">Cargar tu prueba tecnica</h4>
          <div className="content__test">
            <p className="text__upload">
              Por favor ingresa el link del drive de tu prueba tecnica y
              asegurate que se encuentre publico.
            </p>
          </div>
          <div className="form__upload">
            <form>
              <p>Ingresa la URL:</p>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  onChange={handleChange}
                  value={test.linktest}
                  name="linktest"
                  type="text"
                  className="form-control"
                  placeholder="https://drive.google.com/drive"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>

              {linktest?.length ? (
                <p className='sendProof'>Ya enviaste la prueba</p>
              ) : (
                <button
                  onClick={onSubmit}
                  className="btn btn-success"
                  type="submit"
                  value="Enviar prueba"
                >
                  Enviar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalTestAspirant;
