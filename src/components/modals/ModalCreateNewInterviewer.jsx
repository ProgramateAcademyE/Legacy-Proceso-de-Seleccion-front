import React from "react";
import axios from "axios";
import { PETITIONS } from "../../../requestUrl";
import { useEffect, useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../auth/Spinner";
import Swal from "sweetalert2";
import "./Modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "47%",
    backgroundColor: "white",
    border: "1px solid #000",
    boxShadow: "1px 10px 25px",
    padding: "26px 32px 24px",
    borderRadius: "10px",
    top: 150,
    left: 0,
    right: 0,
    botton: 0,
    margin: "auto",
  },
  textfield: {
    width: "98%",
  },
}));

function ModalCreateNewViewer() {
  const styles = useStyles();
  const [spinner, mostrarSpinner] = useState(true);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({
    names: null,
    surname: null,
    password: null,
    email: null,
  });
  const [errors, setErrors] = useState({});
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

  const validate = (values) => {
    const error = {};

    if (!values.names) error.names = "Este campo es obligatorio";
    else error.names = null;

    if (!values.surname) error.surname = "Este campo es obligatorio";
    else error.names = null;

    if (!values.email) error.email = "Este campo es obligatorio";
    else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        values.email
      )
    )
      error.email = "Revisa tu email";
    else error.email = null;

    if (values.password === null) error.password = "Este campo es obligatorio";
    else if (values.password.length < 6)
      error.password = "Tu contraseña debe tener al menos 6 caracteres";
    else if (values.confirmPassword !== values.password)
      error.password = "Tus contraseñas no son iguales";
    else error.password = null;

    setErrors(error);
    //if has errors return true
    if (error.password || error.email || error.names || error.surname)
      return true;
    else return false;
  };

  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const addNewUser = (e) => {
    e.preventDefault();

    if (validate(user)) {
      return;
    }
    mostrarSpinner(true);
    axios
      .post(PETITIONS.registerStaff, { ...user, role: 4 })
      .then((res) => {
        abrirCerrarModal();
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
          document.location.reload();
        }, 500);
      })
      .catch((err) => {
        abrirCerrarModal();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.msg,
        });
        setTimeout(() => {
          mostrarSpinner(false);
        }, 1000);
      });
  };
  const handleName = (e) => {
    const names = e.target.value;
    setUser({ ...user, names });
    setErrors({ ...errors, names: null });
  };

  const handleSurname = (e) => {
    const surname = e.target.value;
    setUser({ ...user, surname });
    setErrors({ ...errors, surname: null });
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setUser({ ...user, email });
    setErrors({ ...errors, email: null });
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setUser({ ...user, password });
    setErrors({ ...errors, password: null });
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setUser({ ...user, confirmPassword });
    setErrors({ ...errors, password: null });
  };

  const body = (
    <div className={styles.modal}>
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
      {errors.names && <small style={{ color: "red" }}>{errors.names}</small>}
      <br />
      <TextField
        label="Apellidos"
        name="lastname"
        value={user.surname || ""}
        className={styles.textfield}
        onChange={handleSurname}
      />
      {errors.surname && (
        <small style={{ color: "red" }}>{errors.surname}</small>
      )}
      <br />
      <TextField
        label="Email"
        name="email"
        value={user.email || ""}
        className={styles.textfield}
        onChange={handleEmail}
      />
      {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
      <br />
      <TextField
        label="Contraseña"
        className={`${errors.password ? "fail" : ""}`}
        type="password"
        onChange={handlePassword}
        value={user.password || ""}
      />
      {errors.password && (
        <small style={{ color: "red" }}>{errors.password}</small>
      )}

      <br />
      <TextField
        label="Confirme Contraseña"
        className={`${errors.password ? "fail" : ""}`}
        type="password"
        onChange={handleConfirmPassword}
        value={user.confirmPassword || ""}
      />
      {errors.password && (
        <small style={{ color: "red" }}>{errors.password}</small>
      )}

      <br />

      <br />

      <br />
      <div align="right">
        <button className="btnadd_interviewer" onClick={addNewUser}>
          Agregar
        </button>
        {/* <button className="btnadd_interviewer" onClick={()=>abrirCerrarModal()}>Cancelar</button> */}
      </div>
    </div>
  );

  return (
    <div>
      <button
        className="btncreate_interviewer"
        onClick={() => abrirCerrarModal()}
      >
        Crear Entrevistador
      </button>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
    </div>
  );
}

export default ModalCreateNewViewer;
