import React from "react";
import "./constructormoderator.css";

const ConstructorModerator = (props) => {
  console.log(props.selectores);
  return (
    <div className="containerconstructormoderator1">
      <div className="containerconstructormoderator2">
        <div className="containerconstructormoderator3">Sala</div>
        <div>{props.sala}</div>
      </div>
      <div className="containerconstructormoderator2  hei2">
        <div className="containerconstructormoderator3">Selectores</div>
        {props?.selectores?.map((s) => (
          <div className="">{`${s.names} ${s.surname}`}</div>
        ))}
      </div>
      <div className="containerconstructormoderator2 hei2">
        <div className="containerconstructormoderator3">Candidatos</div>
        {props?.candidatos?.map((c) => (
          <div className="">{`${c.names} ${c.surname}`}</div>
        ))}
      </div>
    </div>
  );
};

export default ConstructorModerator;
