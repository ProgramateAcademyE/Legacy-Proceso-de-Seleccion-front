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
    fetchData();
  }, []);

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <>
    <div style={{margin:"105px 0px 0px 236px"}}>
      <User users={users}/>
      
    </div>
  <div style={{margin: "60px auto"}}>
   <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
</div>
    </>
  )
}

export default ListOfUsers