import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "./User";
import axios from "axios";
import TablePagination from "@material-ui/core/TablePagination";

const ListOfUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.token);
  const [rowsTable, setRowsTable] = useState(users);
  const [searched, setSearched] = useState("");
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://localhost:3001/api/user/all_info/:page",
        {
          headers: { Authorization: token },
        }
      );

      // setUsers(data.users);
      setUsers([
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Daniel",
          surname: "Ramirez",
          role: 0,
          email: "danielasdfalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },

        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },
        {
          names: "Jaime",
          surname: "Ramirez",
          role: 1,
          email: "danielalejo66@hotmail.com",
        },

        {
          names: "Pedro",
          surname: "Ramirez",
          role: 0,
          email: "danielalejasdfo66@hotmail.com",
        },
        {
          names: "Pablo",
          surname: "Ortiz",
          role: 0,
          email: "daniadsfelalejo66@hotmail.com",
        },
        {
          names: "Giselle",
          surname: "Ortiz",
          role: 1,
          email: "danielalasdfejo66@hotmail.com",
        },
        {
          names: "Sergio",
          surname: "Riaño",
          role: 1,
          email: "daasdnielalejo66@hotmail.com",
        },
      ]);
    }
    fetchData();
  }, []);

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const requestSearch = (searchedVal) => {
    const filteredRows = users.filter((row) => {
      return row.names.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRowsTable(filteredRows);
  };

  return (
    <>
      <div style={{ margin: "60px auto" }}>
        {users.length > 0 ? (
          <User
            users={users.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )}
            requestSearch={(val) => {
              console.log(val);
              requestSearch(val);
            }}
          />
        ) : null}
      </div>
      <div style={{ margin: "60px auto" }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default ListOfUsers;
