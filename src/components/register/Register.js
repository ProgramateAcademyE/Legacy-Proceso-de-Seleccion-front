import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { PETITIONS } from '../../../requestUrl'
import './Register.css'
  

const Register = () => {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({})

  const validate = values => {
    const error = {}
    if (!values.names) {
      error.names = 'Required';
    } else if (values.names.test > 15) {
      error.names = 'Este campo es obligatorio';
    }
  
    if (!values.surname) {
      error.surname = 'Required';
    } else if (values.surname.test > 20) {
      error.surname = 'Este campo es obligatorio';
    }
  
    if (!values.email) {
      error.email = 'Este campo es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    }

    if (!values.confirmPassword) {
      error.password = 'Este campo es obligatorio';
    } else if (values.confirmPassword !== values.password) {
      error.password = 'Tus contraseñas no son iguales';
    }
  
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(user))

    axios.post(PETITIONS.register, user )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  const handleName = (e) => {
    const names = e.target.value
    setUser({...user, names})

  }

  const handleLastName = (e) => {
    const surname = e.target.value
    setUser({...user, surname})

  }

  const handleEmail = (e) => {
    const email = e.target.value
    setUser({...user, email})
  }

  const handlePassword = (e) => {
    const password = e.target.value
    setUser({...user, password})
  }

  const handleconfirmPassword = (e) => {
    const confirmPassword = e.target.value
    setUser({...user, confirmPassword})
  }
  


  return (
    <>
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1> Registrate </h1>
        <label>Nombre</label>
        <input required type='text' onChange={handleName}/>
        {errors.name && <p>{errors.name}</p>}
        <label>Apellido</label>
        <input required type='text' onChange={handleLastName}/>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>Correo</label>
        <input required type='email'onChange={handleEmail}/>
        {errors.email && <p>{errors.email}</p>}
        <label>Contraseña</label>
        <input required type='password'onChange={handlePassword}/>

        <label>Confirmar Contraseña</label>
        <input required type='password'onChange={handleconfirmPassword}/>
        {errors.password && <p>{errors.password}</p>}
        <input className='buttonS' type='submit'/>
        <p> Ya estas registrado? <Link to="/">Loggin</Link></p>
      </form>
      </div>
    </>
  )
}

export default Register;