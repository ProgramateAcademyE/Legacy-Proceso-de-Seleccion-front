import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./CreateInterviewer.css"

const CreateInterViewer = () => {
  const [users, setUsers] = useState([]);
  const [citation, setCitation] = useState([]);
  const [citationSelected, setCitationSelected] = useState([]);
  const [IdCitation, setIdCitation] = useState([]);
  const [date, setDate] = useState([]);
  const [UsersSelected, setUsersSelected] = useState([]);
  const [currentSelectors, setCurrentSelectors] = useState([]);
  const [currentAvailableId, setCurrentAvailableId] = useState("");
  const [checked, setCheked] = useState(true);
  

  const token = useSelector((state) => state.token);

  //connect users staff endpoint
  async function fetchUser() {
    const { data } = await axios.get(
      "http://localhost:3001/api/user/roles_meeting_info",
      {
        headers: { Authorization: token },
      }
    );
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

  async function fetchCitationSelected() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/citationFilter/${IdCitation}`,
      {
        headers: { Authorization: token },
      }
    );

    setCitationSelected(data);
  }

  async function fetchAvailability() {
    const { data } = await axios.get(
      `http://localhost:3001/api/admin/available-id/${IdCitation}`
    );
    console.log("datos", data.data[0]);

    if (data.data.length !== 0) {
      setCurrentSelectors(data.data[0].selectors);
      setUsersSelected(data.data[0].selectors);
      setCurrentAvailableId(data.data[0]._id);
    } else {
      setCurrentSelectors([]);
      setUsersSelected([]);
      setCurrentAvailableId("");
    }
  }
  console.log("availaId", currentAvailableId);

  useEffect(() => {
    fetchUser();
    fetchCitation();
  }, []);

  useEffect(() => {
    fetchAvailability();
  }, [IdCitation]);

   
  const toggleChecked = e => {

   if(UsersSelected.findIndex((user)=>(user._id == e.target.value)) !== -1){
    
    const selector = UsersSelected.findIndex((user)=>(user._id == e.target.value))
    console.log("seconSelector:", UsersSelected)
    UsersSelected.splice(selector, 1) 
    setCheked(selector)
    
    
    
    setUsersSelected([...UsersSelected])
   }
   else{
    const selector = users.find((user)=>(user._id == e.target.value))
      setUsersSelected([...UsersSelected, selector])
   }
  console.log("selctor:", UsersSelected)
  }


   
  
  // Post availability staff
  const postAvailability = () => {
    fetchCitationSelected();

    const selectors = UsersSelected.map((dat) => {
          
          return( 
                  {
                    _id:(dat._id),
                    names:(dat.names),
                    surname:(dat.surname),
                    role:(dat.role),
                    meetRole:3
                  
                  }
                
                  )
         }) 
        console.log("newselector", selectors)
        

        if(currentAvailableId.length !== 0){
          axios.put(`http://localhost:3001/api/admin/update_availables/${currentAvailableId}`, { ...selectors});
          window.alert("Registro enviado con exito")
          document.location.reload();
        }
        else {
          
            const newAvailability = {
      
               citationID:IdCitation,
               date: (date),
               shift: "mañana", 
               selectors
                   
             };
         
            console.log("newAvailability: ", newAvailability);
            axios.post("http://localhost:3001/api/admin/availability", { ...newAvailability });
            window.alert("Registro enviado con exito")
            document.location.reload();
        }
   
 // const citationAvailability = axios.get(`http://localhost:3001/api/admin/findCitationid/${citation.ID}`);
  }

  //const deleteAvailability = () => {
  //  const id_available=UsersSelected._id;
  //  axios.delete(`http://localhost:3001/api/admin/deleteAvailability/${id_available}`);
  //  };

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    let date = e.target.options[index].text;
    setDate(date);
    setIdCitation(e.target.value);
  };

  console.log("users:", users);
  console.log("usersSelected:", UsersSelected);
  console.log("citation:", citation);
  console.log("IdCitation:", IdCitation);
  console.log("date:", date);
  console.log("citationSelected:", citationSelected);
  console.log("available:", currentSelectors);
  console.log("availableId:", currentAvailableId);

  return (
    <>
      <div className="moderator_createviewer">
        <div>
          <h4 className="">Por favor seleccione fecha y hora</h4>
          <select className="selectButton" onChange={handleSelect}>
            <option value="">Seleccione una fecha</option>
            {citation.map((cita) => (
              <option value={cita._id}>
                {`${cita.appointmentDate.toString().slice(0, -14)}
                      ${cita.shift}`}
              </option>
            ))}
          </select>
        </div>
        <div className="moderatorInterviewerContainer">
          <table className="table_full">
            <tbody className="table_body">
              <tr className="table_head">
                <th>Entrevistador</th>
                <th>Rol Principal</th>
                <th>Fecha disponible</th>
                <th>Jornada disponible </th>
                <th>Habilitar</th>
              </tr>
              {currentSelectors?.length !== 0 ? (
                currentSelectors?.map((staff) => (
                  <tr>
                    <td>
                      {staff.names} {staff.surname}
                    </td>
                    <td>{staff.role}</td>
                    <td>{date.slice(0, -6)}</td>
                    <td>{date.slice(11)}</td>

                    <td>
                      <input
                      value={staff._id}
                      type="checkbox"
                      name="id"
                      checked={checked}
                      onChange={toggleChecked}/>
                    </td>
                  </tr>
                ))
              ) : (
                <></>
              )}
              {users.map((staff) =>
                currentSelectors.findIndex((user) => user._id == staff._id) !==
                -1 ? (
                  <></>
                ) : (
                  <tr>
                    <td>
                      {staff.names} {staff.surname}
                    </td>
                    <td>{staff.role}</td>
                    <td>{date.slice(0, -6)}</td>
                    <td>{date.slice(11)}</td>

                    <td>
                      <input
                        value={staff._id}
                        type="checkbox"
                        name="id"
                        onChange={toggleChecked}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <button className="btnadd_interviewer" onClick={postAvailability}>
            Asignar
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateInterViewer;
