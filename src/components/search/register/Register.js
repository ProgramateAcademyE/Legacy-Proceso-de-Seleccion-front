import React, { useState } from 'react'
import axios from 'axios'
import { PETITIONS } from '../../../../requestUrl'
import './Register.css'
  

const Register = () => {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({})

  const validate = values => {
    const error = {}
    if (!values.name) {
      error.name = 'Required';
    } else if (values.name.test > 15) {
      error.name = 'Este campo es obligatorio';
    }
  
    if (!values.lastName) {
      error.lastName = 'Required';
    } else if (values.lastName.test > 20) {
      error.lastName = 'Este campo es obligatorio';
    }
  
    if (!values.email) {
      error.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      error.email = "Invalid email address";
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
    const name = e.target.value
    setUser({...user, name})

  }

  const handleLastName = (e) => {
    const lastName = e.target.value
    setUser({...user, lastName})

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
        <input type='text' onChange={handleName}/>
        {errors.name && <p>{errors.name}</p>}
        <label>Apellido</label>
        <input type='text' onChange={handleLastName}/>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>Correo</label>
        <input type='email'onChange={handleEmail}/>
        {errors.email && <p>{errors.email}</p>}
        <label>Contraseña</label>
        <input type='password'onChange={handlePassword}/>

        <label>Confirmar Contraseña</label>
        <input type='password'onChange={handleconfirmPassword}/>

        <input className='buttonS' type='submit'/>
      </form>
      </div>
    </>
  )
}

export default Register