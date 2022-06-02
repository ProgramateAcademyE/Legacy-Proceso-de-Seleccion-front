import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from "axios";
import { useSelector } from "react-redux";

const InterviewerApplicantsTable = (props) => {
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);
  const meId = auth.user._id;

  const [currentUser, setCurrentUser] = useState("");

  const [meet, setMeet] = useState([]);

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
  };

  const meetId = "6290dbfaffb2ee7777ba38ad";
  async function fetchCitation() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/get-meet-by-meetId/${meetId}`,
      {
        headers: { Authorization: token },
      }
    );

    setMeet(data.data[0]);
  }

  const handleCheck = (e, row) => {
    if (e.target.value !== currentUser) {
      setCurrentUser(e.target.value);
      props.handleCurrentAspirant(row);
    } else {
      setCurrentUser("");
      props.handleCurrentAspirant(undefined);
    }
  };

  useEffect(() => {
    fetchCitation();
  }, []);

  useEffect(() => {}, [currentUser]);

  const searchInterviewer = meet?.roomsInterviewers?.map((r) =>
    r?.selectors?.findIndex((s) => s._id === meId)
  );
  const searchAsse = meet?.roomsAssesments?.map((r) =>
    r?.selectors?.findIndex((s) => s._id === meId)
  );

  const role = searchInterviewer?.includes(1)
    ? "interviewer"
    : searchAsse?.includes(1)
    ? "Observer"
    : null;

  const room =
    role === "interviewer"
      ? meet.roomsInterviewers[searchInterviewer.findIndex((p) => p === 1)]
      : "";

  const processedCitation = room?.users?.map((item) => {
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
      name: "UBICACION",
      selector: (row) => row["ubicacion"],
      sortable: true,
    },
    {
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
