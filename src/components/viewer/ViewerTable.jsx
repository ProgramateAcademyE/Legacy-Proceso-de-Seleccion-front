import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ViewerCalification.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const ViewerTable = () => {
  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log("Selected Rows: ", selectedRows);
  };
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const URL = "http://localhost:3005/entrevistados";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const handleClick = (title) => {
    console.log(`You clicked me! ${title}`);
  };


  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "FECHA",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "HORARIO",
      selector: (row) => row.hour,
      sortable: true,
    },
    {
      name: "ASPIRANTE",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "IDENTIFICACION",
      selector: (row) => row.identification,
      sortable: true,
    },
    {
      name: "ENTREVISTADOR",
      selector: (row) => row.interviewername,
      sortable: true,
    },
    {
      name: "OBSERVADOR",
      selector: (row) => row.viewername,
      sortable: true,
    },
   /* {
      name: "Action",
      sortable: false,
      selector: "null",
      cell: (d) => [
        <i
          key={d.title}
          onClick={handleClick.bind(this, d.title)}
          className="fas fa-toggle-on"
        ></i>,
      ],
    },*/
  ];

  return (
    <div className="viewerApplicantTable">
      <DataTableExtensions columns={columns} data={users}>
        <DataTable
          title="Aspirantes Citados"
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          selectableRows
          selectableRowsHighlight
          onSelectedRowsChange={handleChange}
          fixedHeader
          fixedHeaderScrollHeight
        />
      </DataTableExtensions>
    </div>
  );
};
export default ViewerTable;
