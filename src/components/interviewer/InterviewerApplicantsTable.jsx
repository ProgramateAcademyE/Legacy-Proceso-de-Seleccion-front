import React, { useEffect, useState } from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import "styled-components";
import "./InterviewerApplicants.css";
import SortIcon from "@material-ui/icons/ArrowDownward";



const InterviewerApplicantsTable = () => {
  

    //configurar hooks
    const [users, setUsers] =useState([])

    //fetch API
    const URL = "https://gorest.co.in/public/v2/users"
    const showData = async ()=>{
     const response = await fetch(URL)
     const data     = await response.json()
     console.log (data)
     setUsers(data)
    }

    useEffect( ()=>{
        showData()
    },[])

    //configurar tabla
    const columns =[
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
            reorder: true
        },
        {
            name: "NAME",
            selector: row => row.name,
            sortable: true,
            reorder: true
        },
        {
            name: "EMAIL",
            selector: row => row.email,
            sortable: true,
            reorder: true
        },
    ]


  return (
    <div>   
      INTERVIEWER TABLE

      <DataTable 
      selectableRows 
      columns={columns}
      data={users}
      pagination
      paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}
      responsive
      defaultSortFieldId={1}
      defaultSortAsc={false}
      sortIcon={<SortIcon />}          
      />

    </div>
  )
}

export default InterviewerApplicantsTable
