import React from "react";
import "./InterviewerApplicants.css";

const InterviewerApplicantsCalificationBoxCard = (props) => {
  const { handleQA, item, currentAspirant } = props;

  return (
    <div className="card">
      <h4 className="card-header">{item.name}</h4>
      <br />
      <h4 className="card-title">Preguntas</h4>
      {item.questions.map((q, index) => {
        return (
          <>
            <p className="">
              <span className="interviewerCardSpan"> {`${index + 1}.`} </span>
              {q.mainQuestion}
            </p>
            {q.subQuestions.length !== 0 ? (
              q.subQuestions.map((sb, i) => (
                <p className="">
                  <span className="interviewerCardSpan">
                    {`${index + 1}.${i + 1}. `}
                  </span>
                  {sb}
                </p>
              ))
            ) : (
              <></>
            )}
          </>
        );
      })}
      <br />
      <h4 className="card-text">Calificación</h4>
      {item.qualificationOptions
        .sort((a, b) => b.value - a.value)
        .map((c) => (
          <p className="interviewerCardParagraph">
            <span
              className={`interviewerCardSpan ${
                c.value === 5
                  ? "fivePoints"
                  : c.value === 4
                  ? "fourPoints"
                  : c.value === 3
                  ? "threePoints"
                  : "redPoints"
              }`}
            >
              {`${c.value} puntos: `}
            </span>
            {c.description}
          </p>
        ))}
      {currentAspirant ? (
        <p className="card-footer">
          {currentAspirant?.aspirante}
          <select
            className="interviewerSelect"
            name=""
            id=""
            onChange={(e) =>
              handleQA({
                name: item.name,
                score: e.target.value, // Entre 1 y 5
              })
            }
          >
            <option value="">Selecciona un valor</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InterviewerApplicantsCalificationBoxCard;
