import React from 'react'
import "./ViewerDashboard.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState,useEffect } from 'react';
import DataTable , { createTheme } from "react-data-table-component";
import "styled-components";

const Tableinitview = () => {
    const [users, setUsers] = useState([]);

    //2 - Función para mostrar los datos con fetch
    const URL = "http://localhost:3002/entrevistados";
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
        name: "FECHA",
        selector: (row) => row.date,
      },
      {
        name: "JORNADA",
        selector: (row) => row.hour,
      },
      {
        name: "CONVOCATORIA",
        selector: (row) => row.name,
      },
      {
        name: "ROL",
        selector: (row) => row.identification,
      },
      {
        name: "SALA",
        selector: (row) => row.interviewername,
      },
      {
        name: "ASPIRANTES",
        selector: (row) => row.viewername,
      },  {
        name: "DETALLE",
        selector: (row) => row.id,
      }
    
    ];
  

  return (
    <div>
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
          
        />
    </DataTableExtensions>
    </div>
  )
}

export default Tableinitview