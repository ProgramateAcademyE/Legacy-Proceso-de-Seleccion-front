import React, { useEffect, useState } from "react";
import GeneralTable from "../../components/tablita/GeneralTable";
import MotivationLetterModal from "../../components/modals/MotivationLetterModal";
// import results from "./Results.module.css"
// import ModalAspirants from "../../components/modals/ModalAspirants"
// import { PETITIONS } from "../../../requestUrl";
import axios from "axios";


const Results = () => {
    const [Aspirants, setAspirants] = useState([]);
    
    useEffect(() => {
      try {
        axios.get (`http://localhost:3001/api/candidate/candidate-profile`).then((res) => {
            console.log(res)
           setAspirants(res.data)
        })
      } catch (error) {
        return (error)
      }
    }, 
    [])
    console.log(Aspirants)

    const actions = [
        {
            status: true,
            icon: { MotivationLetterModal },
        },
    ];

    const checkScoreColor = (score) => {
        let color = "";

        if (score < 2) {
            color = "#A00000";
        } else if (score >= 2 && score < 3) {
            color = "#CD6A2E";
        } else if (score >= 3 && score < 4) {
            color = "#FFD200";
        } else {
            color = "#23631F";
        }
        console.log(color);
        return color;
    };

    const rows = Aspirants.map((result) => ({
        
        Nombre: result.firstName,
        Apellido: result.firstSurName,

        Correo: result.email,
        Telefono: result.phone1,
        FechaCitacion: "",
        Jornada: ""
        
    }));

    return (
        <div className="Aspirants">
            <div className="section__content">
                <span className="upperCase bold">Aspirantes</span>
            </div>
            <div className="table mt-4">
                <GeneralTable key={rows.length} rows={rows} />
            </div>
        </div>
    );
};

export default Results;
