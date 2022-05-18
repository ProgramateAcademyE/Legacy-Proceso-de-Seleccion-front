import React from 'react'
import "./CreateInterviewer.css";
import DataTable from 'react-data-table-component';
 


export const datacreateviewer = [
  {observador:'Juan Fernando', rolprincipal:'Obs', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Obs', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Obs', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Ent', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Ent', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Ent', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Ent', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},
  {observador:'Juan Fernando', rolprincipal:'Admin', date: "4/05/2022", jornada: 'Am', habilitar: 'x'},


];

const columnscreateviewer = [
  {
      name:"Observador",
      selector:"observador",
      sortable:true
  },
  {
    name:"Rol Principal",
    selector:"rolprincipal",
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
      const [filterText, setFilterText] = React.useState('');
      const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
      const filteredItems = fakeUsers.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
      );
    
      const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
          if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
          }
        };
    
        return (
          <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
      }, [filterText, resetPaginationToggle]);
    
      return (
        <DataTable
          title="Observadores"
          columns={columnscreateviewer}
          data={datacreateviewer}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
          paginationComponentOptions={paginacionOpciones}
    fixedHeader
    fixedHeaderScrollHeight='500px'
        />
      );
    }
    

    



 export default CreateViewer




















