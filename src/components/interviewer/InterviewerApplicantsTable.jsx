import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
      },
  },
};





const InterviewerApplicantsTable = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const URL = "http://localhost:3001/entrevistados";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "FECHA",
      selector: (row) => row.date,
    },
    {
      name: "HORARIO",
      selector: (row) => row.hour,
    },
    {
      name: "ASPIRANTE",
      selector: (row) => row.name,
    },
    {
      name: "IDENTIFICACION",
      selector: (row) => row.identification,
    },
    {
      name: "ENTREVISTADOR",
      selector: (row) => row.interviewername,
    },
    {
      name: "OBSERVADOR",
      selector: (row) => row.viewername,
    },  
  
  ];

  return (
    <div className="table">
      <DataTableExtensions
        columns={columns}
         data={users}
         >
        <DataTable
          title = "Aspirantes Citados"
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          selectableRows
          selectableRowsHighlight
          fixedHeader
          fixedHeaderScrollHeight
          customStyles={customStyles}
        />
        </DataTableExtensions>
   
    </div>
  );
};
export default InterviewerApplicantsTable;
