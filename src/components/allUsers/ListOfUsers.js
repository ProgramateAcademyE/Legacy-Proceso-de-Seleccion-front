import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';
import usercss from "./User.module.css";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector(state => state.token)


  useEffect(() => {
    try {
      
      axios.get('http://localhost:3001/api/user/all_info', {
        headers: {Authorization: token}
      }).then(res => {
        console.log(res.data)
        setUsers(res.data.profiles)
      })
    } catch (error) {
      return error
    }
  }, [])

  return (
    <div style={{margin:"105px 0px 0px 236px"}}>
      <User users={users}/>
    </div>
  )
}

export default ListOfUsers