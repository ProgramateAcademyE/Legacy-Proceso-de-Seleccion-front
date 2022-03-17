import React, { useEffect, useState } from "react";
import Table from "../../components/tablita/Table";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import "../../components/newConvocatory/EditCohort.jsx";
import DisableBtn from "../../components/disableBtn/DisableBtn";
import RequestService from "../../config/index";
import ModalConvocatory from "../../components/modals/ModalConvocatory";
import { Link } from "react-router-dom";
import convocatorycss from "./Convocatory.module.css";
import { PETITIONS } from "../../../requestUrl";

const Convocatory = () => {
  const [convocatories, setConvocatories] = useState([]);

  const getAllConvocatories = async () => {
    const res = await fetch(PETITIONS.getConvocatories);
    const response = await res.json();
  
    return response;
  }

  useEffect(() => {
    getAllConvocatories().then((convocatory) => setConvocatories(convocatory));
  }, []);

  console.log( convocatories);
  const actions = [
    {
      status: true,
      icon: (
        <Link to="/editarcohorte">
          <i className="far fa-edit"></i>
        </Link>
      ),
    },
    {
      status: true,
      icon: <ModalConvocatory/>,
    },
    {
      status: true,
      icon: <DisableBtn />,
    },
  ];

  // console.log(convocatories)
  const rows = convocatories.map((conv) => ({
    "Convocatoria": conv.name,
    "Cupos": conv.maxQuotas,
    "Fecha Inicio": conv.initialDate,
    "Fecha Fin": conv.finalDate,
    "Inicio Bootcamp": conv.initialBootcampDate,
    "Fin Bootcamp": conv.finalBootcampDate
  }));

  return (
    <>
      <div className="section__convocatory">
        <div className="section__contentC">
          <span className="upperCase bold">Convocatorias</span>
          {rows.length > 0 ? (
            <Link to="/nuevacohorte">
              <button type="submit" className="btn btn-success ">
                Crear Convocatoria
              </button>
            </Link>
          ) : null}
          
        </div>
        {rows.length > 0 ? (
          <Table
            className="table"
            data={convocatories}
            key={rows.Id}
            rows={rows}
            actions={actions}
          />
        ) : (
          <NewConvocatory />
        )}
      </div>
    </>
  );
};

export default Convocatory;
