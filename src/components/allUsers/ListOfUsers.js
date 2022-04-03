import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';
import Swal from "sweetalert2";

import "./User.css";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const token = useSelector(state => state.token)


  async function fetchData(page) {
    const { data } = await axios.get(
      "http://165.227.220.15/api/user/all_info/" + page,
      {
        headers: { Authorization: token },
      }
    );
    setPage(data.page);
    setUsers(data.profiles);

  }

  useEffect(() => {
    fetchData(page);
  }, []);

  const pages = Math.ceil(page.total / page.perPage);

  return (
    <>
    <div className='User_Container'>
      <User users={users}/>
      <button 
        onClick={() => {
          fetchData(page.page - 1)
        }}
        disabled={page.page == 1}
        className="btn btn-warning"
      >
        Anterior
      </button>
      <button 
        onClick={() => {
          fetchData(page.page + 1)
        }}
        disabled={page.page == pages}
        className="btn btn-warning"
      >
        Siguiente
      </button>
    </div>
    </>
  )
}

export default ListOfUsers