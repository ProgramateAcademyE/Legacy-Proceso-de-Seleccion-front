import React from 'react'
import { useSelector } from "react-redux";
import "./ModeratorInterviewer_Viewer.css";

const ModeratorViewer = () => {
  const [users, setUsers] = useState([]);
  const [citationUsers, setUsersSelected] = useState([]);
  const token = useSelector((state) => state.token);

  async function fetchUser() {
    const { data } = await axios.get(
      "http://localhost:3001/api/user/roles_meeting_info",
      {
        headers: { Authorization: token },
      }
      
    );
    console.log(data)
    setUsers(data);
    
    setUsersSelected(data?.data[0]);
  }

  useEffect(() => {
    fetchUser();
    
  }, []);

 

  return (
    <>
    <div className="moderatorContainer">
        <div className="moderatorInterviewerContainer">
     <h1 className="moderatorInterviewerTitle">MODERADOR - OBSERVADOR</h1>
     </div>
     </div>
    </>
  )
}

export default ModeratorViewer
