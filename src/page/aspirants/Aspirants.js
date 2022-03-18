import React, { useEffect, useState } from "react";
import aspirantscss from "./Aspirants.module.css";
import Tablita from "../../components/tablita/Table";
import RequestService from "../../config/index";
import ModalAspirants from "../../components/modals/ModalAspirants";

const Aspirants = () => {
    const [aspirants, setAspirants] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            const { data } = await RequestService.get("/admin/candidatefull");
            if (data) {
                console.log(data);
                const res = data.filter((e) => e.user_id.role == 0);
                console.log(res);
                setAspirants(res);
            }
        };
        getUser();
    }, []);

    const actions = [
        {
            status: true,
            icon: <ModalAspirants />,
        },
    ];

    const rows = aspirants.map((aspirant, idx) => ({
        ID: idx,
        Nombre: aspirant.fullName,
        // "Tipo de Documento": aspirant.documentType,
        //"Numero de Documento": aspirant.documentNumber,
        Correo: aspirant.email,
        Telefono: aspirant.secondContactNumber,
        Nacionalidad: aspirant.nacionality,
        Departamento: aspirant.residencyDepartment,
        Municipio: aspirant.municipalityOfResidency,
        Estrato: aspirant.socioeconomicStratus,
        Edad: aspirant.actualAge,
        Genero: aspirant.gender,
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
                <span className="upperCase bold"> Aspirantes </span>
                <div className="box__content">
                    <span className="text-crumbs bold-500"> Programate </span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs"> Aspirantes </span>
                </div>
            </div>
            <div className="mt-4">
                <Tablita key={rows.length} rows={rows} actions={actions} />
            </div>
        </div>
    );
};

export default Aspirants;
