import React from "react";
import "./ModeratorDashboard_ApplicantsCited.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const ModeratorApplicantsCited = () => {
  const [citation, setCitation] = useState([]);
  const [IdCitation, setIdCitation] = useState([]);
  const [citationSelected, setCitationSelected] = useState([]);
  const [date, setDate] = useState(-1);
  const [processedCitation, setProcessedCitation] = useState([]);

  async function fetchCitation() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitation(data.data);
    setProcessedCitation(
      data.data.map((item) => {
        return item.users.map((subitem) => {
          return {
            fecha: item.appointmentDate.slice(0, 10),
            jornada: item.shift,
            aspirante: subitem.names + " " + subitem.surname,
            id_aspirante: subitem.documentNumber,
            ubicacion: subitem.location,
          };
        });
      })
    );
  }

  const token = useSelector((state) => state.token);
  async function fetchCitationSelected() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/citation-id/${IdCitation}`,
      {
        headers: { Authorization: token },
      }
    );

    setCitationSelected(data);
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    let date = e.target.options[index].text;
    setDate(e.target.value);
    setIdCitation(e.target.value);
    fetchCitationSelected();
  };

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row["fecha"],
    },
    {
      name: "JORNADA",
      selector: (row) => row["jornada"],
    },
    {
      name: "ASPIRANTE",
      selector: (row) => row["aspirante"],
      sortable: true,
    },
    {
      name: "ID ASPIRANTE",
      selector: (row) => row["id_aspirante"],
      sortable: true,
    },
    {
      name: "UBICACION",
      selector: (row) => row["ubicacion"],
      sortable: true,
    },
  ];

  return (
    //1 - Configurar los hooks

    <div className="moderatorContainer43">
      <h2 className="moderatorApplicantCitedTitle">
        <span className="moderatorSpan">Aspirantes Citados</span>{" "}
      </h2>
      <div>
        <h4 className="">Por favor seleccione fecha y hora</h4>
        <select className="selectButton" onChange={handleSelect}>
          <option value="">Seleccione una fecha</option>
          {citation.map((cita, index) => (
            <option value={index}>
              {`${cita.appointmentDate.toString().slice(0, -14)}
                    ${cita.shift}`}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="moderatorApplicantsCitedContainer">
        <div className="moderatorApplicantsCitedtable">
          <div className="tablemoderatorApplicantsCited">
            <DataTableExtensions
              columns={columns}
              data={processedCitation[date]}
            >
              <DataTable
                title="Aspirantes Citados"
                columns={columns}
                data={processedCitation[date]}
                noDataComponent="No hay reuniones programadas"
                defaultSortField="id"
                defaultSortAsc={false}
                pagination
                paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
                highlightOnHover
              />
            </DataTableExtensions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorApplicantsCited;
