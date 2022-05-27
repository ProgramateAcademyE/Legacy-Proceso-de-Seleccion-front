import React from 'react'
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import { useEffect, useState } from "react";;
import {Modal, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from "../auth/Spinner";
import Swal from "sweetalert2";
import "./Modal.css"


const useStyles=makeStyles((theme)=>({
  
  
modal:{
  position:'absolute',
  width:'47%',
  backgroundColor:'white',
  border: '1px solid #000',
  boxShadow:'1px 10px 25px',
  padding:'26px 32px 24px',
  borderRadius:'10px',
  top:150,
  left:0,
 right:0,
 botton:0,
 margin:'auto',
    
},
textfield:{
  width:'98%'

}
}))


function ModalCreateNewViewer() {
  const styles=useStyles();
  const [spinner, mostrarSpinner] = useState(true);
  const [modal, setModal]=useState(false);
  const [user, setUser] = useState({
    names: null,
    surname: null,
    password: null,
    email: null,
    
  });
  /*
  const [values, setValues] = useState("");
  const initialStateValues = {
    names:"",
    surname: "",
    email:"",
    passwordHash:"",
    role:""

  };

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };
  */
 
  /*  setValues({...initialStateValues})

    axios.post("http://localhost:3001/api/user/register_staff", { ...values });
    window.alert("All safe");
    console.log(values)
    abrirCerrarModal()
    }
  
*/
  const abrirCerrarModal =()=>{
    setModal(!modal);
  }
  
  const addNewUser = (e) => {
    e.preventDefault();
    abrirCerrarModal()
   
    mostrarSpinner(true);
    axios
      .post(PETITIONS.registerStaff, { ...user, role: 3 })
      .then((res) => {
        setTimeout(() => {
          mostrarSpinner(true);
          Swal.fire({
            icon: "success",
            title: "Registro Exitoso!",
            text: res.data.msg,
          });
          setUser({
            names: null,
            surname: null,
            password: null,
            confirmPassword: null,
            email: null,
          });
        }, 1000);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.msg,
        });
        setTimeout(() => {
          mostrarSpinner(false);
        }, 1000);
      });
  }
  const handleName = (e) => {
    const names = e.target.value;
    setUser({ ...user, names });
   
  };

  const handleSurname = (e) => {
    const surname = e.target.value;
    setUser({ ...user, surname });
   
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setUser({ ...user, email });
   
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setUser({ ...user, password });  
  };



  const body=(
    <div className={styles.modal} >
      <div align="center">     
        <h2>Datos</h2>
      </div>
        <TextField 
          label="Nombres" 
          name="name"
          value={user.names || ""}
          className={styles.textfield}
          onChange={handleName}
        />
        <br/>
        <TextField 
          label="Apellidos" 
          name="lastname" 
          value={user.surname || ""}
          className={styles.textfield}
          onChange={handleSurname}
        />
        <br/>
        <TextField 
          label="Email" 
          name="email"
          value={user.email || ""}
          className={styles.textfield}
          onChange={handleEmail}
        />
         <br/>
         <TextField 
          label="Contraseña" 
          name="contraseña"
          value={user.password || ""}
          className={styles.textfield}
          onChange={handlePassword}
        />
        <br/>
        
         
        
      
   <br/>

  <br/>
      <div align="right">
          <button className="btnadd_interviewer" onClick={addNewUser}>Agregar</button>
          {/* <button className="btnadd_interviewer" onClick={()=>abrirCerrarModal()}>Cancelar</button> */}
      </div>  
 </div>
  )

  return (
    <div>
      <button className="btncreate_interviewer" onClick={()=>abrirCerrarModal()} >Crear Observador </button>
        <Modal
        open={modal}
        onClose={abrirCerrarModal}>
          {body}
        </Modal>
    </div>
   
  )
}

export default ModalCreateNewViewer