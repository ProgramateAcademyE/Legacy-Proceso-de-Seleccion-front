import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Table";
import RequestService from "../../config/index";
import MotivationLetterModal from "../../components/modals/MotivationLetterModal";
import results from "./Results.module.css"
import ModalAspirants from "../../components/modals/ModalAspirants";


const Results = () => {
    const [results, setResults] = useState([]);
    const getResults = async () => {
        const { data } = await RequestService.get("/admin/results");
        if (data) {
            setResults(data.data);
        }
    };
    useEffect(() => {
        getResults();
    }, []);

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

    const rows = results.map((result) => ({
        
        Nombre: result.userFullName,
        Sololearn: result.soloLearnScore,
        "Perfil Personal": result.personalProfileScore,
        Motivación: result.motivationScore,
        "Promedio 1era Fase": result.promedioprimerafase,
        "Prueba Tecnica": result.pruebatecnica,
        Entrevista: result.Enrevista,
        Assesment: result.Assenment,
        "Promedio 2da Fase": (
            <div
                style={{
                    background: checkScoreColor(result.finalScore),
                    width: "20px",
                    height: "20px",
                }}
            >
                {result.finalScore}
            </div>
        ),
        Estado: (
            <select>
                <option value="Aceptado">Aceptado</option>
                <option value="ListaDeespera">Lista de Espera</option>
            </select>
        ),
        Info: (
         <ModalAspirants/>
        ),
    }));

    return (
        <div className="Aspirants">
            <div className="section__content">
                <span className="upperCase bold">Aspirantes</span>
            </div>
            <div className="table mt-4">
                <Tablita key={rows.length} rows={rows} />
            </div>
        </div>
    );
};

export default Results;
