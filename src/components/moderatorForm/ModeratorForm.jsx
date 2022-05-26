import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const ModeratorForm = () => {
  const [citations, setCitations] = useState([]);
  const [available, setAvailable] = useState(undefined);
  const [citationSelected, setCitacionSelected] = useState(undefined);
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const token = useSelector((state) => state.token);

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
  //console.log("citaciones: ", citations);

  const formik = useFormik({
    initialValues: {
      citationID: "",
      //date: undefined,
      assesmentsRooms: 0,
      interviewRooms: 0,
      link: "",
    },

    validate: (values) => {
      console.log("VaLues en Validate");
      let errores = {};
      //validacion fecha
      if (!values.citationID || values.citationID.length === 0) {
        errores.citationID = "Debes seleccionar una fecha";
      }
      //validacion numero salas entrevistas
      if (!values.interviewRooms) {
        errores.interviewRooms = "Campo Requerido.";
      } else if (values.interviewRooms <= 0) {
        errores.interviewRooms = "Debe ser mayor a 0";
      }
      //validacion numero salas assessment
      if (!values.assesmentsRooms) {
        errores.assesmentsRooms = "Campo Requerido.";
      } else if(values.assesmentsRooms <=0)
        errores.assesmentsRooms = "Debe ser mayor a 0.";

      //validacion de link
      if (!values.link || values.link.length === 0) {
        errores.link = "El campo no puede estar vacio,";
      }
      return errores;
    },

    onSubmit: (values, {resetForm}) => {
      //resetForm();
      console.log(values);
      console.log("On submit", values);
      const toSubmit = {
        ...values,
        link: values.link.trim(),
        date: citationSelected?.appointmentDate,
        titleConvocatory: citationSelected?.titleConvocatory,
        shift: citationSelected?.shift[0],
        users: citationSelected?.users?.map((u) => ({ ...u, _id: u.userID })),
        interviewers: available.selectors.filter((s) => s.meetRole === 3),
        observers: available.selectors.filter((s) => s.meetRole === 4),
      };
      console.log("To submit", toSubmit);
      
      axios.post("http://localhost:3001/api/admin/meet", { ...toSubmit });
      //resetForm();
      //conle.log("Formulario Enviado");
      cambiarFormularioEnviado(true);
      setTimeout(() => cambiarFormularioEnviado(false), 5000);
     resetForm();
    },
    
  });

  console.log("errores", formik.errors);

  useEffect(() => {
    setCitacionSelected(
      citations?.data?.filter(
        (citation) => formik.values.citationID === citation._id
      )[0]
    );
    fetchAvailibility(formik.values.citationID);
  }, [formik.values.citationID]);

  return (
    <Formik>
      <Form className="ModeratorForm">
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
              {/*formik.errors.citationID ? (
                <ErrorMessage
                  name="citationID"
                  render={() => <div>{formik.errors.citationID}</div>}
                />
              ) : (
                <></>
              )*/}
            </div>
            <div>
              <label htmlFor="interviewRooms">No salas Entrevistas</label>
              <Field
                className="ModeratorFormRooms"
                type="number"
                name="interviewRooms"
                id="interviewRooms"
                //value={formik.values.interviewRooms}
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

            {/*modificando */}
            <div>
              <label htmlFor="assesmentsRooms">No salas Assessment</label>
              <Field
                className="ModeratorFormRooms"
                type="number"
                name="assesmentsRooms"
                id="assesmentsRooms"
                onChange={formik.handleChange}
              />
              {formik.errors.assesmentsRooms ? (
                <div style={{ color: "red" }}>
                  {formik.errors.assesmentsRooms}
                </div>
              ) : (
                <></>
              )}
              {/* <ErrorMessage
                name="assesmentsRooms"
                component={() => <span>{formik.errors.assesmentsRooms}</span>}
            />*/}
            </div>
          </div>
          <div className="ModeratorFormSection2">
            <div>
              <label htmlFor="link">Link Reunion</label>
              <Field
                className="ModeratorFormLink"
                type="text"
                id="link"
                name="link"
                placeholder="Ingresa una URL"
                onChange={formik.handleChange}
              />
              {formik.errors.link ? (
                <div style={{ color: "red" }}>
                  {formik.errors.link}
                </div>
              ) : (
                <></>
              )}
              {/*<ErrorMessage
                name="link"
                component={() => (
                  <span className="error">{formik.errors.link}</span>
                )}
                />*/}
            </div>
          </div>
          <div className="ModeratorFormTitle">
            <h5 className="ModeratorFormApplicants">Aspirantes</h5>
          </div>

          <div className="ModeratorFormSelect">
            {citationSelected !== undefined ? (
              <>
                <Field
                  name="applicants"
                  as="text"
                  multiple
                  className="form-control select picker "
                >
                  {citationSelected?.users?.map((u) => (
                    <option
                      value={u.names}
                    >{`${u.names} ${u.surname}`}</option>
                  ))}
                </Field>
                {/*<ErrorMessage
                  name="applicants"
                  component={() => <span>{formik.errors.applicants}</span>}
                  />*/}
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
                  className="form-control select picker "
                >
                  {available?.selectors?.map((s) =>
                    s.meetRole === 3 ? (
                      <option value={s.names}>{`${s.names} ${ s.surname}`}</option>
                    ) : (
                      <></>
                    )
                  )}
                </Field>
                {/*<ErrorMessage
                  name="interviewers"
                  component={() => <span>{formik.errors.interviewers}</span>}
                    />*/}
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
                  name="interviewers"
                  as="text"
                  multiple
                  className="form-control select picker "
                >
                  {available?.selectors?.map((s) =>
                    s.meetRole === 4 ? (
                      <option value={s.names}>{`${s.names} ${s.surname}`}</option>
                    ) : (
                      <></>
                    )
                  )}
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
                <span className="">
                  Formulario Enviado con exito!
                </span>

              )}
            </div>
        </div>
       
      </Form>
    </Formik>
  );
};

export default ModeratorForm;