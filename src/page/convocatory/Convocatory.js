import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Tablita";
import NewConvocatory from "../../components/newConvocatory/NewConvocatory";
import "../../components/newConvocatory/EditCohort.jsx";
import DisableBtn from "../../components/disableBtn/DisableBtn";
import RequestService from "../../config/index";
import ModalConvocatory from "../../components/modals/ModalConvocatory";
import { Link } from "react-router-dom";
import convocatorycss from"./Convocatory.module.css";

const Convocatory = () => {
  const [convocatories, setConvocatories] = useState([]);
  const getUser = async () => {
    const { data } = await RequestService.get("/admin/convocatories");
    if (data) {
      setConvocatories(data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  
  console.log({convocatories});
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
      icon: <ModalConvocatory />,
    },
    {
      status: true,
      icon: <DisableBtn />,
    },
  ];

  const fixDate = (date) => {
    return date.split("T")[0];
  };

  // console.log(convocatories)
  const rows = convocatories.map((conv, idx) => ({
    ID: idx,
    Nombre: conv.name,
    Cupos: conv.maxQuotas,
    "Fecha de Inicio": fixDate(conv.initialDate),
  }));

  return (
    <>
      <div className="section__convocatory">
        <div className="section__content mb-5 d-flex justify-content-between">
          <span className="upperCase bold">Convocatorias</span>
          <div className="box__content">
            <span className="text-crumbs bold-500">Programate</span>
            <i className="fas fa-chevron-right subtitle" />
            <span className="text-crumbs">Convocatoria</span>
          </div>
        </div>
        {rows.length > 0 ? (
          <Tablita
            className="table"
            key={rows.ID}
            rows={rows}
            actions={actions}
          />
        ) : (
          <NewConvocatory />
        )}
        {rows.length > 0 ? (
          <Link to="/nuevacohorte">
            <button type="submit" className="btn btn-success mt-3">
              Crear Convocatoria
            </button>
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Convocatory;
