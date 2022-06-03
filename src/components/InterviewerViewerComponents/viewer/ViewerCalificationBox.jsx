import React, { useState, useEffect } from "react";
import "./ViewerCalification.css";
import axios from "axios";
import { useSelector } from "react-redux";
import ViewerCalificationBoxCard from "./ViewerCalificationBoxCard";
import { Formik, Field, Form, useFormik } from "formik";
import { useHistory } from "react-router-dom";

const ViewerCalificationBox = (props) => {
  const history = useHistory();
  const { room, meet } = props;
  const auth = useSelector((state) => state.auth);
  const meId = auth.user;

  const [questionary, setQuestionary] = useState();
  const [submited, setSubmited] = useState(false);

  const questionaryId = "6286b5113c2f2c46dc9b7873";

  const token = useSelector((state) => state.token);

  async function fetchQuestionary() {
    const { data } = await axios.get(
      `https://legacy-selection-educamas.herokuapp.com/api/admin/get-questionary/${questionaryId}`,
      {
        headers: { Authorization: token },
      }
    );
    setQuestionary(data.data[0]);
  }

  useEffect(() => {
    fetchQuestionary();
  }, []);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const finalSubmit = [];

      for (let u = 0; u < room?.users?.length; u++) {
        const currentAspirantInfo = room?.users[u];

        const score =
          values[`qualifications_${currentAspirantInfo._id}`]
            .map((q) => parseInt(q.score))
            .reduce((a, b) => a + b, 0) /
          values[`qualifications_${currentAspirantInfo._id}`].length;

        const toSubmit = {
          meetID: meet._id,
          userID: currentAspirantInfo._id,
          names: currentAspirantInfo.names,
          surname: currentAspirantInfo.surname,
          questionaryAssesmentId: questionaryId,
          observers: {
            selectorId: meId._id, // Interviewr _id
            names: meId.names,
            surname: meId.surname,
            comment: values[`comment_${currentAspirantInfo._id}`],
            score: score,
            qualifications: values[`qualifications_${currentAspirantInfo._id}`],
          },
        };

        finalSubmit.push(toSubmit);
      }
      axios
      .post(
        "https://legacy-selection-educamas.herokuapp.com/api/admin/interviewDay-Observer",
        {
          ...finalSubmit,
        }
      ).then((res) => {
               
       
        setTimeout(history.replace(`/entrevistadordashboard`), 1000)
        
    })
    .catch((err) => {
     
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err?.response?.data?.msg,
      });
     
    });
    setSubmited(true);
    setTimeout(() => setSubmited(false), 80000);
    },
  });

  room?.users?.map((u) => {
    formik.initialValues[`qualifications_${u._id}`] = [];
    formik.initialValues[`comment_${u._id}`] = "";
  });

  const handleQA = (userId, newQualification) => {
    formik.setFieldValue(`qualifications_${userId}`, [
      ...formik.values[`qualifications_${userId}`],
      newQualification,
    ]);
  };

  return (
    <Formik>
      <Form>
        <div className="viewerCalificationBoxContainer">
          {questionary?.groups?.map((item, index) => {
            return (
              <ViewerCalificationBoxCard
                item={item}
                key={index}
                aspirants={room?.users}
                handleQA={handleQA}
              />
            );
          })}

          {room?.users?.map((u) => (
            <div className="card-body">
              <h4 className="card-header">OBSERVACIONES GENERALES</h4>
              <p className="">{u.names}</p>
              <Field
                id={`comment_${u._id}`}
                name={`comment_${u._id}`}
                rows="5"
                className="InterviewerApplicanTextarea"
                as="textarea"
                placeholder="Deja un comentario..."
                onChange={formik.handleChange}
              />
              {formik.errors.comment ? (
                <div style={{ color: "red" }}>{formik.errors.comment}</div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="InteviewerApplicantSubmit"
            onClick={formik.handleSubmit}
          >
            Enviar Evaluación
          </button>
          <div className="ModeratorFormExit">
            {submited && (
              <span className="">Formulario Enviado con exito!</span>
            )}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ViewerCalificationBox;
