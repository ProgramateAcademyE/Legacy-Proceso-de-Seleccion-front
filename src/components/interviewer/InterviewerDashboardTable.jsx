import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const InterviewerDashboardTable = () => {
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
            convocatoria: item.titleConvocatory,
            rol_asignado: item.rol,
            aspirantes: item.usersNumber,
          };
        });
      })
    );
  }
  console.log("citacion", citation);

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
  console.log("citation selected", citationSelected);

  useEffect(() => {
    fetchCitation();
  }, []);

  console.log("processed", processedCitation);

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    let date = e.target.options[index].text;
    setDate(e.target.value);
    setIdCitation(e.target.value);
    fetchCitationSelected();
  };

  console.log("citations", IdCitation);

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
      name: "CONVOCATORIA",
      selector: (row) => row["convocatoria"],
      sortable: true,
    },
    {
      name: "ROL ASIGNADO",
      selector: (row) => row["rol_asignado"],
      sortable: true,
    },
    {
      name: "#ASPIRANTES",
      selector: (row) => row["aspirantes"],
      sortable: true,
    },
    {
      name: "VER MAS",
      selector: (row) => (
        <a href="/entrevistadoraplicantescitados" target="_blank">
          ver detalles
        </a>
      ),
      sortable: true,
    },
  ];

  return (
    //1 - Configurar los hooks

    <div className="interviewerDashboardTable">
      <div>
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
        <div className="tablemoderatorApplicantsCited">
          <DataTableExtensions columns={columns} data={processedCitation[date]}>
            <DataTable
              title="Aspirantes Citados"
              columns={columns}
              data={processedCitation[date]}
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
  );
};

export default InterviewerDashboardTable;
