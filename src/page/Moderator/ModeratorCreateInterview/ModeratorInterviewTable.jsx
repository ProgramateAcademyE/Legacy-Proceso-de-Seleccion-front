import React from "react";
import "./ModeratorInterviewTable.css";
import ConstructorModerator from "../../../components/constructorModerator/ConstructorModerator";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import "../../../components/selectButton/SelectButton.css";

const ModeratorInterviewTable = () => {
  const [citations, setCitations] = useState([]);
  const [meet, setMeet] = useState(undefined);
  const [citationSelected, setCitacionSelected] = useState(undefined);
  const token = useSelector((state) => state.token);

  async function fetchCitations() {
    const { data } = await axios.get(
      "https://legacy-selection-educamas.herokuapp.com/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitations(data);
  }

  useEffect(() => {
    fetchCitations();
  }, []);

  async function fetchMeetID(citationID) {
    const { data } = await axios.get(
      `https://legacy-selection-educamas.herokuapp.com/api/admin/get-meet-id/${citationID}`,
      {
        headers: { Authorization: token },
      }
    );
    setMeet(data.data[0]);
  }

  const formik = useFormik({
    initialValues: {
      citationID: "",
    },
  });

  useEffect(() => {
    setCitacionSelected(
      citations?.data?.filter(
        (citation) => formik.values.citationID === citation._id
      )[0]
    );
    fetchMeetID(formik.values.citationID);
  }, [formik.values.citationID]);

  return (
    <Formik>
      <div className="moderatorInterviewTableContainer">
        <div className="divi">
          <div className="moderatorInterviewContainerTitle">
            <h1 className="moderatorInterviewTableTitle">
              <span className="moderatorSpan">Listado General Entrevistas</span>
            </h1>
          </div>

          <div>
            <Field
              as="select"
              placeholder="Selecciona una Fecha"
              name="citationID"
              id="citationID"
              value={formik.values.citationID}
              onChange={formik.handleChange}
              className="selectButton"
            >
              <option value="">Seleccione una Fecha</option>

              {citations?.data?.map((c) => (
                <option value={c._id}>{`${c.appointmentDate
                  .toString()
                  .slice(0, -14)} ${c.shift[0]}`}</option>
              ))}
            </Field>
            <ErrorMessage
              name="citationID"
              component={() => <span>{errors.citationID}</span>}
            />
          </div>

          <div className="secondu">
            {meet?.roomsAssesments?.map((r) => {
              return (
                <ConstructorModerator
                  sala={r.roomName}
                  selectores={r.selectors}
                  candidatos={r.users}
                />
              );
            })}

            {meet?.roomsInterviewers?.map((r) => {
              return (
                <ConstructorModerator
                  sala={r.roomName}
                  selectores={r.selectors}
                  candidatos={r.users}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default ModeratorInterviewTable;
