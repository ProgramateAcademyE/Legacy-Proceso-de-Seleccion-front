import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "styled-components";
import "./ModeratorInterviewerTable.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
//import { columns, data } from "./data";


const ModeratorInterviewerTable= ()=> {
   //1 - Configurar los hooks
  const [users, setUsers] = useState([])
    //2 - Función para mostrar los datos con fetch
  const URL= "http://localhost:3002/interviewTable";
  const showData = async() =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUsers(data)

  }
  useEffect(()=>{
    showData()

  },[])
//3 
  const columns = [
   
    {
      name: "FECHA",
      selector: (row) => row.fecha,
    },
    {
      name: "JORNADA",
      selector: (row) => row.jornada,
    },
    {
      name: "CONVOCATORIA",
      selector: (row) => row.convocatoria,
    },
    {
      name: "# ASPIRANTES",
      selector: (row) => row.aspirante,
    },
    {
      name: "# ENTREVISTADORES",
      selector: (row) => row.entrevistador,
    },
    {
      name: "# OBSERVADORES",
      selector: (row) => row.observador,
    },
    {
      name: "# SALAS",
      selector: (row) => row.salas,

    },
    {
      name: "DETALLE",
      selector: (row) => row.detalle,
    },
  
  ];


  /*const tableData = {
    columns,
    data
  };*/

  return (
    <div className="tableInterview">
      <DataTableExtensions 
        columns={columns}
        data={users}
      >
        <DataTable
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          //scroll
          fixedHeader
          fixedHeaderScrollHeight="500px"
          noHeader
          pagination
          highlightOnHover
        

          
        />
      </DataTableExtensions>
    </div>
  );
}
export default ModeratorInterviewerTable

