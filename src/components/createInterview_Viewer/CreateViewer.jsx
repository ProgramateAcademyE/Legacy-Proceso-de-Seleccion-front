import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "./CreateInterviewer.css"
import "./Switch.jsx"

const CreateViewer = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const URL = "http://localhost:3000/entrevistadores";
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
      name: "Observador",
      selector: (row) => row.entrevistador,
    },
    {
      name: "Rol Principal",
      selector: (row) => row.rol_principal,
    },
    {
      name: "Fecha disponible",
      selector: (row) => row.date,
    },
    {
      name: "Jornada disponible",
      selector: (row) => row.jornada_disponible,
    },
    
    {
      name: "Habilitar",
      selector: (row) => row.habilitar,
     
    },
  
  ];

  return (
    <div className="moderator_createviewer">
      <DataTableExtensions
        columns={columns}
         data={users}
         >
        <DataTable
          title = "Observadores"
          columns={columns}
          data={users}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
          highlightOnHover
          center
          fixedHeader
          fixedHeaderScrollHeight="400px"
          responsive
          
        />
        </DataTableExtensions>
   
    </div>
  );
};
export default CreateViewer;




















