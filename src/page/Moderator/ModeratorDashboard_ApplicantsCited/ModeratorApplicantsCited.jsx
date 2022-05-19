import React from 'react'
import "./ModeratorDashboard_ApplicantsCited.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useState,useEffect } from 'react';
import DataTable  from "react-data-table-component";
import "styled-components";

const ModeratorApplicantsCited = () => {
  const [users, setUsers] = useState([]);

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
      name: "ASPIRANTE",
      selector: (row) => row.name,
    },
    {
      name: "UBICACION",
      selector: (row) => row.identification,
    },
    {
      name: "ID ADPIRANTE",
      selector: (row) => row.interviewername,
    }
  
  ];



  return (
      //1 - Configurar los hooks

    <div className="moderatorContainer43">
          <div className="moderatorApplicantsCitedContainer">
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
          
        />
    </DataTableExtensions>
  
    </div>
          </div>
          
    </div>
    
  )
}

export default ModeratorApplicantsCited
