import React from 'react'
import "./CreateInterviewer.css";
import DataTable from 'react-data-table-component';


const datacreateinterviewer= [
    {entrevistador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Pablo', date: "10/05/2022", jornada: 'Pm', habilitar: 'x'},
    {entrevistador:'Juan Esteban', date: "14/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Esteban', date: "14/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Pablo', date: "10/05/2022", jornada: 'Pm', habilitar: 'x'},
    {entrevistador:'Juan Esteban', date: "14/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Esteban', date: "14/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Pablo', date: "10/05/2022", jornada: 'Pm', habilitar: 'x'},
    {entrevistador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Pablo', date: "10/05/2022", jornada: 'Pm', habilitar: 'x'},
    {entrevistador:'Juan Fernando', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
    {entrevistador:'Juan Pablo', date: "10/05/2022", jornada: 'Pm', habilitar: 'x'},
    {entrevistador:'Juan Esteban', date: "14/05/2022", jornada: 'Am', habilitar: 'x'}

];

    const columnscreateinterviewer = [
{
    name:"Entrevistador",
    selector:"entrevistador",
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

   
    

function CreateInterviewer() { 
  return (
    <div>
    <DataTable 
    columns={columnscreateinterviewer}
    data={datacreateinterviewer}
    title="Entrevistadores"
    pagination
    paginationComponentOptions={paginacionOpciones}
    fixedHeader
    fixedHeaderScrollHeight='500px'
    /> 
    
     </div>

  );
}


 export default CreateInterviewer;