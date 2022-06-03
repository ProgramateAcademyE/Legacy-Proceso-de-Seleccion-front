import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ModeratorInterviewerTable.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useSelector } from "react-redux";
import axios from "axios";

const ModeratorInterviewerTable = () => {
  const [users, setUsers] = useState([]);

  const token = useSelector((state) => state.token);
  async function showData() {
    const { data } = await axios.get(
      "https://legacy-selection-educamas.herokuapp.com/api/admin/get-meets",
      {
        headers: { Authorization: token },
      }
    );
    setUsers(data);
  }

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "FECHA",
      selector: (row) => row.date.slice(0, 10),
      sortable: true,
    },
    {
      name: "JORNADA",
      selector: (row) => row.shift,
      sortable: true,
    },
    {
      name: "CONVOCATORIA",
      selector: (row) => row.titleConvocatory,
      sortable: true,
    },
    {
      name: "# ASPIRANTES",
      selector: (row) => row.usersNumber,
      sortable: true,
    },
    {
      name: "# ENTREVISTADORES",
      selector: (row) => row.interviewersNumber,
      sortable: true,
    },
    {
      name: "# OBSERVADORES",
      selector: (row) => row.observersNumber,
      sortable: true,
    },
    {
      name: "# SALAS",
      selector: (row) => row.interviewRooms,
      sortable: true,
    },
    {
      name: "DETALLE",

      selector: (row) => (
        <a href="/moderadortablaentrevistas" target="_blank">
          ver detalles
        </a>
      ),
    },
  ];

  return (
    <div className="tableInterview">
      <DataTableExtensions columns={columns} data={users}>
        <DataTable
          columns={columns}
          noDataComponent="No hay reuniones programadas"
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          //scroll
          fixedHeader
          fixedHeaderScrollHeight="600px"
          noHeader
        />
      </DataTableExtensions>
    </div>
  );
};
export default ModeratorInterviewerTable;
