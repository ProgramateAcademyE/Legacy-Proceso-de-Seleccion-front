import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const ModeratorForm = () => {
  const [citations, setCitations] = useState([]);
  const [available, setAvailable] = useState(undefined);
  const [citationSelected, setCitacionSelected] = useState(undefined);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const token = useSelector((state) => state.token);

  const interviewersInput = useRef(null);
  const viewersInput = useRef(null);

  const [countInterviewer, setCountIntervierwer] = useState(0);
  async function fetchCitations() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitations(data);
  }

  useEffect(() => {
    fetchCitations();
  }, []);

  async function fetchAvailibility(citationID) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/admin/available-id/${citationID}`,
        {
          headers: { Authorization: token },
        }
      );
      setAvailable(data.data[0]);
    } catch (error) {
      setAvailable([]);
    }
  }
  function clear() {
    (assesmentsRooms = 0), (assesmentsRooms = 0), (link = "");
  }
  const formik = useFormik({
    initialValues: {
      citationID: "",
      assesmentsRooms: 0,
      interviewRooms: 0,
      link: "",
    },

    validate: (values) => {
      let errores = {};
      if (!values.citationID || values.citationID.length === 0) {
        errores.citationID = "Debes seleccionar una fecha";
      }
      if (!values.interviewRooms) {
        errores.interviewRooms = "Campo Requerido.";
      } else if (values.interviewRooms <= 0) {
        errores.interviewRooms = "Debe ser mayor a 0";
      }
      if (values.interviewRooms > interviewersInput.current.childElementCount) {
        errores.interviewRooms = "No puede ser mayor numero entrevistadores";
      }
      if (!values.assesmentsRooms) {
        errores.assesmentsRooms = "Campo Requerido.";
      } else if (values.assesmentsRooms <= 0)
        errores.assesmentsRooms = "Debe ser mayor a 0.";

      if (values.assesmentsRooms > viewersInput.current.childElementCount) {
        errores.assesmentsRooms = "No puede ser mayor numero Observadores";
      }

      if (!values.link || values.link.length === 0) {
        errores.link = "El campo no puede estar vacio,";
      }

      return errores;
    },

    onSubmit: (values, { resetForm }) => {
      const toSubmit = {
        ...values,
        link: values.link.trim(),
        date: citationSelected?.appointmentDate,
        titleConvocatory: citationSelected?.titleConvocatory,
        shift: citationSelected?.shift[0],
        users: citationSelected?.users?.map((u) => ({ ...u, _id: u.userID })),
        interviewers: available.selectors.filter((s) => s.meetRole === 4),
        observers: available.selectors.filter((s) => s.meetRole === 3),
      };

      console.log("To submit", toSubmit);
      axios.post("http://localhost:3001/api/admin/meet", { ...toSubmit });
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 80000);

      setTimeout(window.location.reload(), 90000);
    },
  });

  useEffect(() => {
    setCitacionSelected(
      citations?.data?.filter(
        (citation) => formik.values.citationID === citation._id
      )[0]
    );
    fetchAvailibility(formik.values.citationID);
  }, [formik.values.citationID]);

  //mirar que tiene interviewersInput
  //console.log("Entrevistadoresinput", interviewersInput);
  //console.log("ObservadoresInput", viewersInput);

  return (
    <Formik>
      <Form id="formulario" className="ModeratorForm">
        <div className="ModeratorformContainer">
          <div className="ModeratorFormSection1">
            <div>
              <label htmlFor="citationID">Fecha </label>
              <Field
                as="select"
                placeholder="Selecciona una Fecha"
                name="citationID"
                id="citationID"
                className="ModeratorFormDate"
                value={formik.values.citationID}
                onChange={formik.handleChange}
              >
                <option value="">Seleccione una Fecha</option>

                {citations?.data?.map((c) => (
                  <option value={c._id}>{`${c.appointmentDate
                    .toString()
                    .slice(0, -14)} ${c.shift[0]}`}</option>
                ))}
              </Field>
              {formik.errors.citationID ? (
                <div style={{ color: "red" }}>{formik.errors.citationID}</div>
              ) : (
                <></>
              )}
            </div>
            <div>
              <label htmlFor="interviewRooms">No salas Entrevistas</label>
              <Field
                className="ModeratorFormRooms"
                type="number"
                name="interviewRooms"
                id="interviewRooms"
                placeholder="Numero salas Entrevistas"
                onChange={formik.handleChange}
              />

              {formik.errors.interviewRooms ? (
                <div style={{ color: "red" }}>
                  {formik.errors.interviewRooms}
                </div>
              ) : (
                <></>
              )}
            </div>

            <div>
              <label htmlFor="assesmentsRooms">No salas Assessment</label>
              <Field
                className="ModeratorFormRooms"
                type="number"
                name="assesmentsRooms"
                id="assesmentsRooms"
                placeholder="Numero salas Assessment"
                onChange={formik.handleChange}
              />
              {formik.errors.assesmentsRooms ? (
                <div style={{ color: "red" }}>
                  {formik.errors.assesmentsRooms}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="ModeratorFormSection2">
            <div>
              <label htmlFor="link">Link Reunión</label>
              <Field
                className="ModeratorFormLink"
                type="url"
                id="link"
                name="link"
                placeholder="Ingresa una Link"
                onChange={formik.handleChange}
              />
              {formik.errors.link ? (
                <div style={{ color: "red" }}>{formik.errors.link}</div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="section3">
            <div className="ModeratorFormTitle">
              <h5 className="ModeratorFormApplicants">Aspirantes</h5>
            </div>

            <div className="ModeratorFormSelect">
              {citationSelected !== null ? (
                <>
                  <Field
                    name="applicants"
                    as="text"
                    multiple
                    className="form-control select "
                  >
                    {citationSelected?.users?.map((u) => (
                      <option
                        value={u.names}
                      >{`${u.names} ${u.surname}`}</option>
                    ))}
                  </Field>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="ModeratorFormTitle">
              <h5 className="">Entrevistadores</h5>
            </div>

            <div className="ModeratorFormSelect">
              {available !== undefined ? (
                <>
                  <Field
                    name="interviewers"
                    as="text"
                    multiple
                    className=" form-control select  "
                  >
                    <div ref={interviewersInput}>
                      {available?.selectors?.map((s) =>
                        s.meetRole === 4 ? (
                          <option value={s.names}>
                            {`${s.names} ${s.surname}`}{" "}
                          </option>
                        ) : (
                          <></>
                        )
                      )}
                    </div>
                  </Field>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="ModeratorFormTitle">
              <h5 className="">observadores</h5>
            </div>
            <div className="ModeratorFormSelect">
              {available !== undefined ? (
                <>
                  <Field
                    name="observers"
                    as="text"
                    multiple
                    className="form-control select "
                  >
                    <div ref={viewersInput}>
                      {available?.selectors?.map((s) =>
                        s.meetRole === 3 ? (
                          <option
                            value={s.names}
                          >{`${s.names} ${s.surname}`}</option>
                        ) : (
                          <></>
                        )
                      )}
                    </div>
                  </Field>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="ModeratorFormButton">
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="ModeratorFormSubmit"
              >
                Publicar y enviar
              </button>
            </div>
            <div className="ModeratorFormExit">
              {formularioEnviado && (
                <span className="">Formulario Enviado con exito!</span>
              )}
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ModeratorForm;
