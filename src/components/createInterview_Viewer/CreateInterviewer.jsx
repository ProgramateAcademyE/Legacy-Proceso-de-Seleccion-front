import axios from "axios";
import { useSelector } from "react-redux"; 
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "./CreateInterviewer.css"
import "./SelectButton.css"




const CreateInterviewer = () => {
 
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);
  const [citation, setCitation] = useState([]);
  const [IdCitation, setIdCitation] = useState([]);
const [date, setDate] = useState([]) 
const [usersSelected, setUsersSelected] = useState([]); 
  const token = useSelector((state) => state.token);
  //2 - Función para mostrar los datos con fetch
 //connect users staff endpoint
 async function fetchUser() {
  const { data } = await axios.get(
    "http://localhost:3001/api/user/roles_meeting_info",
    {
      headers: { Authorization: token },
    }
    
  );
  console.log("data", data)
   setUsers(data);
   //setUsersSelected(data[0]);
 }
//connect citations info endpoint
async function fetchCitation() {
  const { data } = await axios.get(
    "http://localhost:3001/api/admin/citation-all",
    {
      headers: { Authorization: token },
    }
    
  );
  setCitation(data.data);
 
 }
  useEffect(() => {
    fetchUser();
    fetchCitation();

  }, []);


  

  const toggleChecked = e => {
    
   console.log("id:", e.target.value)
   }

   const handleSelect = e =>{
    let index = e.target.selectedIndex
    let date =(e.target.options[index].text)
    setDate(date)
    setIdCitation(e.target.value)
   }
  
console.log("user",users)
console.log("citation", citation)
console.log("IdCitation", IdCitation)
console.log("date", date)




  const columns = [
    {
      name: "Entrevistador",
      selector: (row) => `${ row.names } ${ row.surname }`, 
      sortable: true, 
    },
    {
      name: "Rol Principal",
      selector: (row) => row.role,
      sortable: true, 
    },
    {
      name: "Fecha disponible",
      selector: (row) => row=`${date.slice(0,-6)}`,
      sortable: true, 
    },
    {
      name: "Jornada disponible",
      selector: (row) => row=`${date.slice(11)}`,
      sortable: true, 
    },
    {
      name: "Habilitar",
      selector: (row) => <input type="checkbox"
       value={users._id}
       name="id"
       onChange={toggleChecked} />,
      sortable: true, 
    },
    
    
  
  ];

  


  return (
    <>
    <div>
    <h4 className=''>Por favor seleccione fecha y hora</h4>
    <select  className='selectButton' onChange={handleSelect} >
      <option value="" >Seleccione una fecha</option>
      {
          citation.map((cita)=>(
         
            <option value={cita._id} >
              {`${cita.appointmentDate.toString()
              .slice(0, -14)}
               ${cita.shift}`} </option>
          ))
        }
    </select>


</div>

  <div className="moderator_createviewer">
      


      <div >
      <DataTableExtensions
        columns={columns}
         data={users}
         >
        <DataTable
          title = "Entrevistadores"
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
          options={ { 
            selectableRowsHighlightColumnIndex: -1
          }
        }     />
        </DataTableExtensions>
        </div>
        <div>
          <button type="submit" className="btnadd_interviewer"> Asignar </button>
        </div>
    </div>
    </>
  );
};
export default CreateInterviewer;