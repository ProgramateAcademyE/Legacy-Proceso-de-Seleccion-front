import React, { useState, useEffect } from "react";
import "./InterviewerApplicants.css";
import InterviewerApplicantsCalificationBoxCard from "./InterviewerApplicantCalificationBoxCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Formik, Field, Form, useFormik } from "formik";

const InterviewerApplicantsCalificationBox = (props) => {
  const { currentAspirant, meet, room } = props;
  const auth = useSelector((state) => state.auth);
  const meId = auth.user;
  const [questionary, setQuestionary] = useState();

  const questionaryId = "62855ad10a60a551a4aa7431";
  const meetRole = 4;

  const token = useSelector((state) => state.token);

  async function fetchQuestionary() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/get-questionary/${questionaryId}`,
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
      console.log("Score: ", score);
      const toSubmit = {
        meetID: meet._id,
        userID: currentAspirantInfo._id,
        names: currentAspirantInfo.names,
        surname: currentAspirantInfo.surname,
        questionaryAssesmentId: "temporales",
        questionaryInterviewersId: "Temporales",
      };
      if (meetRole === 4)
        toSubmit["interviewers"] = [
          {
            selectorId: meId._id, // Interviewr _id
            names: meId.names,
            surname: meId.surname,
            comment: values.comment,
            score: score,
            qualifications: values.qualifications,
          },
        ];

      if (meetRole === 3)
        toSubmit["observers"] = [
          {
            selectorId: String, // Interviewr _id
            names: String,
            surname: String,
            comment: values.comment,
            score: Number,
            qualifications: values.qualifications,
          },
        ];
      console.log(toSubmit);
    },
  });

  const handleQA = (newQualification) => {
    console.log(newQualification);
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

            <p className="">
              <button
                type="submit"
                className="InteviewerApplicantSubmit"
                onClick={formik.handleSubmit}
              >
                Enviar Evaluación
              </button>
            </p>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default InterviewerApplicantsCalificationBox;
