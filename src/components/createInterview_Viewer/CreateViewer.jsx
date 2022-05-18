import React, { Component } from 'react'
// import ReactDOM from "react-dom";
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "./CreateInterviewer.css";
 


function CreateViewer() {



const paginacionOpciones={
    rowsPerPageText: "Filas por Página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
}


   
  
    return (
      <div className="main">
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columnscreateviewer}
            data={datacreateviewer}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    );
  }
  
//   const rootElement = document.getElementById("root");
//   ReactDOM.render(<CreateViewer />, rootElement);

 export default CreateViewer




















