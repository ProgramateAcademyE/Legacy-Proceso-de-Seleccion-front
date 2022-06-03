import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CreateInterviewer.css";
import Swal from "sweetalert2";

const CreateViewer = () => {
  const [users, setUsers] = useState([]);
  const [citation, setCitation] = useState([]);
  const [citationSelected, setCitationSelected] = useState([]);
  const [IdCitation, setIdCitation] = useState([]);
  const [UsersSelected, setUsersSelected] = useState([]);
  const [UsersSelectedOne, setUsersSelectedOne] = useState([]);
  const [currentSelectors, setCurrentSelectors] = useState([]);
  const [currentAvailableId, setCurrentAvailableId] = useState("");
  const [finalSelectors, setFinalSelectors] = useState([]);
  const [date, setDate] = useState([]);

  //convert string to date format
  const finalDate = date.slice(0, -6);
  const finalDate2 = Date.parse(finalDate);
  const fecha = new Date(finalDate2);

  const token = useSelector((state) => state.token);

  //connect users staff endpoint
  async function fetchUser() {
    const { data } = await axios.get(
      "https://legacy-selection-educamas.herokuapp.com/api/user/roles_meeting_info",
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
      "https://legacy-selection-educamas.herokuapp.com/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitation(data.data);
  }

  //Bring citation by id
  async function fetchCitationSelected() {
    const { data } = await axios.get(
      `https://legacy-selection-educamas.herokuapp.com/api/admin/citationFilter/${IdCitation}`,
      {
        headers: { Authorization: token },
      }
    );

    setCitationSelected(data);
  }

  //Check if availability register is already exists
  async function fetchAvailability() {
    const { data } = await axios.get(
      `https://legacy-selection-educamas.herokuapp.com/api/admin/available-id/${IdCitation}`
    );

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

  useEffect(() => {
    fetchUser();
    fetchCitation();
  }, []);

  useEffect(() => {
    fetchAvailability();
  }, [IdCitation]);

  //Set info everytime check is on true, or unset if not
  const toggleChecked = (e) => {
    if (
      currentSelectors.findIndex((user) => user._id == e.target.value) !== -1
    ) {
      const selector = currentSelectors.findIndex(
        (user) => user._id == e.target.value
      );
      currentSelectors.splice(selector, 1);
      setCurrentSelectors([...currentSelectors]);
    } else {
      const selector = users.find((user) => user._id == e.target.value);
      setUsersSelectedOne([...UsersSelectedOne, selector]);
    }
  };

  // Post availability staff selected
  const postAvailability = () => {
    fetchCitationSelected();

    //map all new staff selected
    const selectors = UsersSelectedOne.map((dat) => {
      return {
        _id: dat._id,
        names: dat.names,
        surname: dat.surname,
        role: dat.role,
        meetRole: 3,
      };
    });

    //map all staff that is already safe on database
    const selectores = currentSelectors.map((dat) => {
      return {
        _id: dat._id,
        names: dat.names,
        surname: dat.surname,
        role: dat.role,
        meetRole: dat.meetRole,
      };
    });
    console.log("newselector", selectors);
    console.log("oldselectors", selectores);

    //concat both arrays to finally send to database
    const finalStaff = selectors.concat(selectores);
    setFinalSelectors(finalStaff);

    //Endpoint to send if availability register is already exists
    if (currentAvailableId.length !== 0) {
      axios
      .put(
        `https://legacy-selection-educamas.herokuapp.com/api/admin//update_availables_viewer/${currentAvailableId}`,
        { ...finalStaff })
      .then((res) => {
               
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso!",
          text: res.data.msg,
        });
      
        setTimeout(() => {
          (window.location.reload())
        }, 1000);
        
    })
    .catch((err) => {
     
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err?.response?.data?.msg,
      });
     
    });
    }

    //if availability register does not exists create a new availability register
    else {
      const newAvailability = {
        citationID: IdCitation,
        date: fecha,
        shift: date.slice(11),
        selectors,
      };

      console.log("newAvailability: ", newAvailability);
      axios
      .post(
        "https://legacy-selection-educamas.herokuapp.com/api/admin/availability",
        { ...newAvailability,})
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso!",
          text: res.data.msg,
          showCancelButton: true,
         
        }).then((result) => {
          if (result.isConfirmed) {
            document.location.reload();
          }
        })  
        
    })
    .catch((err) => {
     
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err?.response?.data?.msg,
      });
     
    });

     
    }
  };

  //const deleteAvailability = () => {
  //  const id_available=UsersSelected._id;
  //  axios.delete(`https://legacy-selection-educamas.herokuapp.com/api/admin/deleteAvailability/${id_available}`);
  //  };

  const handleSelect = (e) => {
    let index = e.target.selectedIndex;
    let date = e.target.options[index].text;
    setDate(date);
    setIdCitation(e.target.value);
  };

  return (
    <>
      <div className="moderator_createviewer">
        <div className="moderatorInterviewerContainer">
          <div>
            <h4 className="">Por favor seleccione fecha y hora</h4>
            <select className="selectButton" onChange={handleSelect}>
              <option value="">Seleccione una fecha</option>
              {citation.map((cita) => (
                <option value={cita._id}>
                  {`${cita.appointmentDate.toString().slice(0, -14)}
                      ${cita.shift}`}{" "}
                </option>
              ))}
            </select>
          </div>

          <table className="table_full">
            <tbody className="table_body">
              <tr className="table_head">
                <th>Observador</th>
                <th>Rol Principal</th>
                <th>Meet Rol</th>
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
                    <td>
                      {staff.role === 1
                        ? "Administrador"
                        : staff.role === 2
                        ? "Moderador"
                        : staff.role === 3
                        ? "Observador"
                        : "Entrevistador"}
                    </td>
                    <td>
                      {staff.meetRole === 1
                        ? "Administrador"
                        : staff.meetRole === 2
                        ? "Moderador"
                        : staff.meetRole === 3
                        ? "Observador"
                        : "Entrevistador"}
                    </td>
                    <td>{date.slice(0, -6)}</td>
                    <td>{date.slice(11)}</td>

                    <td>
                      <input
                        value={staff._id}
                        type="checkbox"
                        name="id"
                        checked={true}
                        onChange={toggleChecked}
                      />
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
                    <td>
                      {staff.role === 1
                        ? "Administrador"
                        : staff.role === 2
                        ? "Moderador"
                        : staff.role === 3
                        ? "Observador"
                        : "Entrevistador"}
                    </td>
                    <td></td>
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

export default CreateViewer;
