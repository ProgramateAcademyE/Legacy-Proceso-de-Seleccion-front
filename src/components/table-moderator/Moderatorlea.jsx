import React from "react";
import DataTable from "react-data-table-component";
import "./moderatorlea.css";

const tablaCampeones = [
  {
    Fecha: "6 junio",
    Horario: "9 am",
    Entrevistador: "Sofía Peláez",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "1 agosto",
    Horario: "2001",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "2 julio",
    Horario: "2002",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "1 agosto",
    Horario: "2003",
    Entrevistador: "milan",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "6 junio",
    Horario: "2004",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "3 agosto",
    Horario: "2005",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "3 agosto",
    Horario: "2006",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
  {
    Fecha: "7 junio",
    Horario: "2007",
    Entrevistador: "Margarita",
    Observador: "juanito",
    Observador: "pepito",
    Aspirante: "mirian",
    Id_aspirante: 412,
    Sala: "2",
  },
];

const columnas = [
  {
    name: "FECHA",
    selector: "Fecha",
    sortable: true,
  },
  {
    name: "HORARIO",
    selector: "Horario",
    sortable: true,
  },
  {
    name: "ENTREVISTADOR",
    selector: "Entrevistador",
    sortable: true,
  },
  {
    name: "OBSERVADOR",
    selector: "Observador",
    sortable: true,
  },
  {
    name: "ENTREVISTADOR",
    selector: "Entrevistador",
    sortable: true,
  },
  {
    name: "ASPIRANTE",
    selector: "Aspirante",
    sortable: true,
  },
  {
    name: "ID ASPIRANTE",
    selector: "Id_aspirante",
    sortable: true,
  },
  {
    name: "SALA",
    selector: "Sala",
    sortable: true,
  },
];

const paginacionOpciones = {
  rowsPerPageText: "Filas por Pagina",
  rangeSeparatorText: "de",
  selecAllRowsItem: true,
  selectAllRowsItemText: "todos",
};

const Moderatorlea = () => {
  return (
    <div className="table-responsi">
      <DataTable
        columns={columnas}
        data={tablaCampeones}
        noDataComponent="No hay reuniones programadas"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="500px"
      />
    </div>
  );
};

export default Moderatorlea;
