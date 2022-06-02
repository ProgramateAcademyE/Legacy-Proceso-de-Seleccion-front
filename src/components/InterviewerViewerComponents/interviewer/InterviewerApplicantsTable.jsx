import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useSelector } from "react-redux";

const InterviewerApplicantsTable = (props) => {
  const { meet, handleCurrentAspirant, room, role } = props;

  const [currentUser, setCurrentUser] = useState("");

  const handleCheck = (e, row) => {
    if (e.target.value !== currentUser) {
      setCurrentUser(e.target.value);
      handleCurrentAspirant(row);
    } else {
      setCurrentUser("");
      handleCurrentAspirant(undefined);
    }
  };

  let processedCitation = [];
  let columns = [];
  if (room) {
    processedCitation = room?.users?.map((item) => {
      return {
        id: item._id,
        fecha: meet?.date?.slice(0, 10),
        jornada: meet?.shift,
        horario: meet?.shift,
        aspirante: item.names + " " + item.surname,
        id_aspirante: item.documentNumber,
        ubicacion: item.location,
      };
    });
    columns = [
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
        name: "UBICACION",
        selector: (row) => row["ubicacion"],
        sortable: true,
      },
    ];

    if (role === 4)
      columns.push({
        name: "SELECCIONAR",
        selector: (row) => {
          return (
            <input
              type="checkbox"
              value={row.id}
              checked={row.id === currentUser}
              onChange={(e) => handleCheck(e, row)}
            />
          );
        },
        sortable: true,
      });
  }

  return room ? (
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
  ) : (
    <></>
  );
};
export default InterviewerApplicantsTable;
