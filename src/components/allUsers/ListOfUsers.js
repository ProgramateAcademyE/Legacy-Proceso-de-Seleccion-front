import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';


const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector(state => state.token)


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/user/all_info/:page",
        {
          headers: { Authorization: token },
        }
      );

      setUsers(data.profiles);
    }
    fetchData();
  }, []);


  return (
    <>
    <div style={{margin: "60px auto"}}>
      <User users={users}/>
      
    </div>

    </>
  )
}
export default ListOfUsers