import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from "axios";
import { useSelector } from "react-redux";

const InterviewerApplicantsTable = () => {
  const [citation, setCitation] = useState([]);
  const [processedCitation, setProcessedCitation] = useState([]);

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
  };

  const token = useSelector((state) => state.token);
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
            horario: item.shiftStart,
            aspirante: subitem.names + " " + subitem.surname,
            id_aspirante: subitem.documentNumber,
            entrevistador: subitem.interviewer_name,
            observador: subitem.viewer_name,
          };
        });
      })
    );
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  console.log("users", citation);
  const columns = [
    {
      name: "ID",
      selector: (row) => row["id"],
      sortable: true,
    },
    {
      name: "FECHA",
      selector: (row) => row["fecha"],
      sortable: true,
    },
    {
      name: "HORARIO",
      selector: (row) => row["horario"],
      sortable: true,
    },
    {
      name: "ASPIRANTE",
      selector: (row) => row["aspirante"],
      sortable: true,
    },
    {
      name: "IDENTIFICACION",
      selector: (row) => row["id_aspirante"],
      sortable: true,
    },
    {
      name: "ENTREVISTADOR",
      selector: (row) => row["entrevistador"],
      sortable: true,
    },
    {
      name: "OBSERVADOR",
      selector: (row) => row["viewer_name"],
      sortable: true,
    },
    {
      name: "SELECCIONAR",
      selector: (row) => <input type="checkbox" />,
      sortable: true,
    },
  ];

  return (
    <>
      <div className="interviewerApplicantTable">
        <DataTableExtensions columns={columns} data={processedCitation}>
          <DataTable
            title="Aspirantes Citados"
            columns={columns}
            data={processedCitation}
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
            highlightOnHover
            fixedHeader
            fixedHeaderScrollHeight
          />
        </DataTableExtensions>
      </div>
    </>
  );
};
export default InterviewerApplicantsTable;
