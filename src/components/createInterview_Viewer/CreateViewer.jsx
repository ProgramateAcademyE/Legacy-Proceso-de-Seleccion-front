import React from 'react'
import "./CreateInterviewer.css";
import DataTable from 'react-data-table-component';
 


export const datacreateviewer = [
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},

];

const columnscreateviewer = [
  {
      name:"Observador",
      selector:"observador",
      sortable:true
  },
  {
      name:"Fecha disponible",
      selector:"date",
      type: "numeric",
      sortable: true
  },
  {
      name:"Jornada disponible",
      selector:"jornada",
      sortable: true,
      center: true
  },
  {
      name:"Habilitar",
      selector:"habilitar",
      sortable: true,
      center: true
  
  }
      ];

      const paginacionOpciones={
        rowsPerPageText: "Filas por Página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos"
    }


function CreateViewer() {
         return (
        <div>
    <DataTable 
    columns={columnscreateviewer}
    data={datacreateviewer}
    title="Observadores"
    pagination
    paginationComponentOptions={paginacionOpciones}
    fixedHeader
    fixedHeaderScrollHeight='500px'
    /> 
    
     </div>

  );
}

 export default CreateViewer




















