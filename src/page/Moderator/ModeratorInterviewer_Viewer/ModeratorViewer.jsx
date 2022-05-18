import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ModeratorInterviewer_Viewer.css";

const ModeratorViewer = () => {
  const [users, setUsers] = useState([]);

  const token = useSelector((state) => state.token);

  async function fetchUser() {
    const { data } = await axios.get(
      "http://localhost:3001/api/user/roles_meeting_info",
      {
        headers: { Authorization: token },
      }
      
    );
    
    setUsers(data);
    
   
  }

  useEffect(() => {
    fetchUser();
    
  }, []);

  console.log("users:", users)

  return (
    <>
    <div className="moderatorContainer">
        <div className="moderatorInterviewerContainer">
     <h1 className="moderatorInterviewerTitle">MODERADOR - OBSERVADOR</h1>
     <table>
        <tr>
          <th>Staff</th>
          <th>Assign rol</th>
        </tr>
       {
         users.map((staff) => (
          <tr>
          <td>{staff.names}</td>
          <td>{staff.role}</td>
          </tr>
          
         )
          
         )
       }
     </table>
     </div>
     </div>
    </>
  )
}

export default ModeratorViewer
