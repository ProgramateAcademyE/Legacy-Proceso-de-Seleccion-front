import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ViewerCalification.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewerTable = (props) => {
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
      `https://legacy-selection-educamas.herokuapp.com/api/admin/get-meet-by-meetId/${meetId}`,
      {
        headers: { Authorization: token },
      }
    );

    setMeet(data.data[0]);
  }

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
      ubicacion: item.location,
      aspirante: item.names + " " + item.surname,
      id_aspirante: item.documentNumber,
    };
  });

  useEffect(() => {
    fetchCitation();
  }, []);

  useEffect(() => {}, [currentUser]);

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row["fecha"],
      sortable: true,
    },
    {
      name: "JORNADA",
      selector: (row) => row["jornada"],
      sortable: true,
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
      name: "Ubicación",
      selector: (row) => row["ubicacion"],
      sortable: true,
    },
  ];

  return (
    <div className="interviewerApplicantTable">
      <DataTableExtensions columns={columns} data={processedCitation}>
        <DataTable
          title="Aspirantes Citados"
          noDataComponent="No hay reuniones programadas"
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
  );
};

export default ViewerTable;
