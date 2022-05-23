import React from 'react'
import "./InterviewerApplicants.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState,useEffect } from 'react';
import DataTable , { createTheme } from "react-data-table-component";
import "styled-components";

const InterviewerDashboardTable= () => {
    const [users, setUsers] = useState([]);

    //2 - Función para mostrar los datos con fetch
    const URL = "http://localhost:3001/scheduledmeetings";
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
        selector: (row) => row.time,
      },
      {
        name: "CONVOCATORIA",
        selector: (row) => row.convocatory,
      },
      {
        name: "ROL ASIGNADO",
        selector: (row) => row.rol,
      },
      {
        name: "SALA",
        selector: (row) => row.room,
      },
      {
        name: "ASPIRANTES",
        selector: (row) => row.applicants,
      }, 
      {
        name: "VER DETALLE",
        selector: (row) => <a href='./entrevistadoraplicantescitados'>{row.detail}</a>,
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

export default InterviewerDashboardTable;