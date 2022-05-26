import React from 'react'
import "./ViewerDashboard.css"
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState,useEffect } from 'react';
import DataTable , { createTheme } from "react-data-table-component";
import "styled-components";

const ViewerDashboardTable = () => {
    const [users, setUsers] = useState([]);

    //2 - Función para mostrar los datos con fetch
    const URL = "http://localhost:3005/scheduledmeetings";
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
        sortable: true,
      },
      {
        name: "JORNADA",
        selector: (row) =>row.time,
        sortable: true,
      },
      {
        name: "CONVOCATORIA",
        selector: (row) => row.convocatory,
        sortable: true,
      },
      {
        name: "ROL ASIGNADO",
        selector: (row) => row.rol,
        sortable: true,
      },
      {
        name: "SALA",
        selector: (row) => row.room,
        sortable: true,
      },
      {
        name: "ASPIRANTES",
        selector: (row) => row.applicants,
        sortable: true,
      },  
      {
        name: "VER DETALLE",
        selector: (row) => <a href='./observadorassesment'>Ver Detalle</a>,
      }
    
    ];
  

  return (
    <div className='interviewerApplicantTable'>
    <DataTableExtensions
        columns={columns}
        data={users}
        >
        <DataTable
          columns={columns}
          data={users}
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
  )
}

export default ViewerDashboardTable;