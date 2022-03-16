import React, { useState } from 'react'
import axios from 'axios'

import { PETITIONS } from '../../../requestUrl'

const Register = () => {
  const [user, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    
  }

  const handleName = (e) => {
    const name = e.target.value
    setUser({...user, name})

  }

  const handleEmail = (e) => {
    const email = e.target.value
    setUser({...user, email})
  }

  const handlePassword = (e) => {
    const password = e.target.value
    setUser({...user, password})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' onChange={handleName}/>

        <label>Email</label>
        <input type='email'onChange={handleEmail}/>

        <label>Password</label>
        <input type='password'onChange={handlePassword}/>

        <input type='submit'/>
      </form>
    </>
  )
}

export default Register