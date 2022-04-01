import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';
import Swal from "sweetalert2";


const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const token = useSelector(state => state.token)


  async function fetchData(page) {
    const { data } = await axios.get(
      "http://localhost:3001/api/user/all_info/" + page,
      {
        headers: { Authorization: token },
      }
    );
    setUsers(data.profiles);
  }

  useEffect(() => {
    fetchData(page);
  }, []);

  return (
    <>
    <div style={{margin: "60px auto"}}>
      <User users={users}/>
      <button onClick={() => {
        if(page > 1) {
          fetchData(page - 1)
          setPage(page - 1);
        }
      }}>Atras</button>
      <button onClick={() => {
        fetchData(page + 1)
        setPage(page + 1)
      }}>Siguiente</button>
    </div>
    </>
  )
}

export default ListOfUsers