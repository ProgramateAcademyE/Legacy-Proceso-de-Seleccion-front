import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import axios from 'axios';
<<<<<<< HEAD
import TablePagination from '@material-ui/core/TablePagination';

=======
import usercss from "./User.module.css";
>>>>>>> 4cff62c7b1d5470a9b9f9bef4258587a3b18ca8b

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

      setUsers(data.users);
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
<<<<<<< HEAD
    <>
    <div style={{margin: "60px auto"}}>
=======
    <div style={{margin:"105px 0px 0px 236px"}}>
>>>>>>> 4cff62c7b1d5470a9b9f9bef4258587a3b18ca8b
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