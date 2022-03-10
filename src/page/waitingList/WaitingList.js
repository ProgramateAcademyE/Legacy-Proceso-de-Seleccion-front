import React, { useEffect, useState } from "react";
import Tablita from "../../components/tablita/Tablita";
import RequestService from "../../config/index";

const WaitingList = () => {
    const [waitList, setWaitList] = useState([]);

    const getWaitList = async () => {
        const { data } = await RequestService.get("/admin/waiting-list");
        if (data) {
            setWaitList(data.data);
        }
    };

    useEffect(() => {
        getWaitList();
    }, []);

    const actions = [
        {
            status: true,
            icon: <i className="far fa-check-square"> </i>,
        },
        {
            status: false,
            icon: <i className="far fa-edit"> </i>,
        },
        {
            status: false,
            icon: <i className="far fa-eye"> </i>,
        },
        {
            status: false,
            icon: <i className="far fa-trash-alt"> </i>,
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
        return color;
    };

    const rows = waitList.map((candidate) => ({
        ID: candidate.ID,
        Nombre: candidate.Nombre,
        Sololearn: candidate.sololearn,
        "Perfil Personal": candidate.personalProfileScore,
        Motivación: candidate.motivation,
        "Promedio Final": (
            <div
                style={{
                    background: checkScoreColor(candidate.finalScore),
                    width: "20px",
                    height: "20px",
                }}
            >
                {candidate.final}
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
        <div className="spirants">
            <div className="spirants__content d-flex justify-content-between">
                <span className="upperCase bold">Lista de espera</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Inscripción</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Lista de espera</span>
                </div>
            </div>
            <div className="mt-4">
                <Tablita key={rows.length} rows={rows} actions={actions} />
            </div>
        </div>
    );
};

export default WaitingList;
