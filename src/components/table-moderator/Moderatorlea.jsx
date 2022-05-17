import React from 'react'
import DataTable from 'react-data-table-component';
import './moderatorlea.css';

const tablaCampeones = [
  {Plataforma:"Sala Principal",Selectores:"Karina Sanabria Jonathan Mosquera Jorge Andrés Rojas Karol Neiza Maria Alejandra Fajardo",Candidatos:"Sofía Peláez Arias Geraldine Johanna Medina Herrera Andrés Felipe Castaño Pinilla Frank Sebastián Uricochea Andrade"},
  {Plataforma:"Sala entrevista 1",Selectores:"2001",Candidatos:"bayern",},
  {Plataforma:"Sala Assessment",Selectores:"2002",Candidatos:"rela-madrid"},
  {Plataforma:"Sala Principal",Selectores:"2003",Candidatos:"milan"},
  {Plataforma:"Sala entrevista 1",Selectores:"2004",Candidatos:"porto"},
  {Plataforma:"Sala Principal",Selectores:"2005",Candidatos:"liverpool"},
  {Plataforma:"Sala Assessment",Selectores:"2006",Candidatos:"barcelona"},
  {Plataforma:"Sala entrevista 1",Selectores:"2007",Candidatos:"milan"}
]

const columnas = [
  {
    name:'PLATAFORMA',
    selector:'Plataforma',
    sortable:true
  },
  {
    name:'SELECTORES',
    selector:'Selectores',
    sortable:true
  },
  {
    name:'CANDIDATOS',
    selector:'Candidatos',
    sortable:true,
    
  }

]

const paginacionOpciones={
    rowsPerPageText:'Filas por Pagina',
    rangeSeparatorText: 'de',
    selecAllRowsItem:true,
    selectAllRowsItemText:'todos'
}


const Moderatorlea = () => {
  return (
    <div className="table-responsi">
            <DataTable
            columns={columnas}
            data={tablaCampeones}
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='500px'
            />
    </div>
  )
}

export default Moderatorlea