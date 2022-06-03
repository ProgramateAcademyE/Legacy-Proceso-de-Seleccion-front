import React, { useState, useEffect } from "react";
import "./InterviewerApplicants.css";
import InterviewerApplicantsCalificationBoxCard from "./InterviewerApplicantCalificationBoxCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Formik, Field, Form, useFormik } from "formik";
import Swal from "sweetalert2";

const InterviewerApplicantsCalificationBox = (props) => {
  const { currentAspirant, meet, room } = props;
  const auth = useSelector((state) => state.auth);
  const meId = auth.user;
  const [questionary, setQuestionary] = useState();
  const [submited, setSubmited] = useState(false);

  const questionaryId = "62855ad10a60a551a4aa7431";

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

  const formik = useFormik({
    initialValues: {
      qualifications: [],
      comment: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.comment || values.comment.length === 0)
        errors["comment"] = "Debes ingresar un comentario";

      return errors;
    },
    onSubmit: (values) => {
      const currentAspirantInfo = room?.users?.find(
        (u) => u._id === currentAspirant.id
      );
      const score =
        values.qualifications
          .map((q) => parseInt(q.score))
          .reduce((a, b) => a + b, 0) / values.qualifications.length;
      const toSubmit = {
        meetID: meet._id,
        userID: currentAspirantInfo._id,
        names: currentAspirantInfo.names,
        surname: currentAspirantInfo.surname,
        questionaryInterviewersId: questionaryId,
        interviewers: {
          selectorId: meId._id, // Interviewr _id
          names: meId.names,
          surname: meId.surname,
          comment: values.comment,
          score: score,
          qualifications: values.qualifications,
        },
      };
      axios.post(
        "https://legacy-selection-educamas.herokuapp.com/api/admin/interviewDay-Interviewer",
        {
          ...toSubmit,
        }
      ).then((res) => {
               
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso!",
          text: res.data.msg,
        });
      
        setTimeout(() => {
          (window.location.reload())
        }, 1000);
        
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
     // setTimeout(window.location.reload(), 90000);
    },
  });

  const handleQA = (newQualification) => {
    formik.setFieldValue("qualifications", [
      ...formik.values.qualifications,
      newQualification,
    ]);
  };

  useEffect(() => {
    fetchQuestionary();
  }, []);

  return (
    <Formik>
      <Form>
        <div className="InterviewerApplicantsCalificationBoxContainer">
          {questionary?.groups?.map((item, index) => {
            return (
              <InterviewerApplicantsCalificationBoxCard
                item={item}
                key={index}
                currentAspirant={currentAspirant}
                handleQA={handleQA}
              />
            );
          })}

          <div className="card-body">
            <h4 className="card-header">OBSERVACIONES GENERALES</h4>
            <div>
              <Field
                name="comment"
                id="comment"
                className="InterviewerApplicanTextarea"
                rows="10"
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
        </div>
      </Form>
    </Formik>
  );
};

export default InterviewerApplicantsCalificationBox;
