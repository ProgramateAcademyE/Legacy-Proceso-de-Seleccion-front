import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ModeratorCreateInterview.css";

const ModeratorCreateInterview = () => {
  const [citations, setCitations] = useState([]);
  const [citationSelected, setCitationSelected] = useState([]);
  const token = useSelector((state) => state.token);

  async function fetchCitations() {
    const { data } = await axios.get(
      "http://localhost:3001/api/admin/citation-all",
      {
        headers: { Authorization: token },
      }
    );
    setCitations(data);
    setCitationSelected(data?.data[0]);
  }

  useEffect(() => {
    fetchCitations();
  }, []);

  console.log("citaciones: ", citations);

  const handleSubmit = () => {
    console.log(citationSelected?.appointmentDate);
    const newMeet = {
      citationID: citationSelected?._id,
      titleConvocatory: citationSelected?.titleConvocatory,
      date: new Date(citationSelected?.appointmentDate),
      shift: citationSelected?.shift[0],
      link: "Soy tu link!!",
      users: citationSelected?.users,
      observers: [
        {
          id: "789",
          firstName: "Pepito",
          lastName: "Casas",
          role: 3, // 3||4
        },
        {
          id: "798",
          firstName: "Camilo",
          lastName: "Flores",
          role: 3, // 3||4
        },
      ],
      interviewers: [
        {
          id: "456",
          firstName: "Andrea",
          lastName: "Salazar",
          role: 4, // 3||4
        },
        {
          id: "465",
          firstName: "Nala",
          lastName: "Murilo",
          role: 4, // 3||4
        },
        {
          id: "654",
          firstName: "Maria",
          lastName: "Zapata",
          role: 4, // 3||4
        },
      ],
      interviewersRooms: 3,
      assesmentsRooms: 2,
    };

    console.log("New Meet: ", newMeet);
    axios.post("http://localhost:3001/api/admin/meet", { ...newMeet });
  };

  return (
    <>
      <div className="moderatorContainer">
        <div className="moderatorCreateInterviewContainer">
          <h1 className="moderatorCreateInterviewTitle">
            MODERADOR - CREAR ENTREVISTA y ASSESMENT
          </h1>
          <button onClick={handleSubmit}>Crear Reunion</button>
        </div>
      </div>
    </>
  );
};

export default ModeratorCreateInterview;
