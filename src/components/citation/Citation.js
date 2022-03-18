import React from "react";
import Tablita from "../tablita/Table";

const Citation = ({ data }) => {
    const { id, date, journey, users } = data;
    const rows = users.map((user, idx) => ({
        ID: idx,
        Nombre: user.firstName,
        Apellido: user.lastName,
        Email: user.email,
        "Numero telefonico": user.contactNumber,
    }));

    return (
        <div>
            <div className="citation">
                {date} {journey === 0 ? "Mañana" : "Tarde"}
            </div>
            <div className="section__citation">
                <div className="section__content d-flex justify-content-between">
                    <Tablita key={id} rows={rows} />
                </div>
            </div>
        </div>
    );
};

export default Citation;
