import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Table";
import RequestService from "../../config/index";
import MotivationLetterModal from "../../components/modals/MotivationLetterModal";

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
        ID: result.user_id,
        Nombre: result.userFullName,
        // HTML: result.htmlScore,
        // CSS: result.cssScore,
        // Javascript: result.javascriptScore,
        // Python: result.pythonScore,
        Sololearn: result.soloLearnScore,
        "Perfil Personal": result.personalProfileScore,
        Motivación: result.motivationScore,
        "Promedio Final": (
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
                <option value="pasa">Pasa</option>
                <option value="nopasa">No pasa</option>
            </select>
        ),
    }));

    return (
        <div className="Aspirants">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Resultados</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Aspirantes</span>
                </div>
            </div>
            <div className="table mt-4">
                <Tablita key={rows.length} rows={rows} />
            </div>
        </div>
    );
};

export default Results;
