import React, { useEffect, useState } from "react";
import RequestService from "../../config/index";
import Citation from "../../components/citation/Citation";

const Citations = () => {
    const [citations, setCitations] = useState([]);

    const getCitation = async () => {
        const { data } = await RequestService.get("/admin/citation");
        if (data) {
            setCitations(data);
        }
    };

    useEffect(() => {
        getCitation();
    }, []);

    const fixDate = (date) => {
        return date.split("T")[0];
    };

    const data = citations.map((citation) => ({
        id: citation.id,
        date: fixDate(citation.start),
        journey: citation.journey,
        users: citation.users,
    }));
    return (
        <>
            <div className="section__convocatory">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold"> Convocatoria </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs">
                            Consolidado Postulantes
                        </span>
                    </div>
                </div>
                {data &&
                    data.map((citation) => (
                        <Citation data={citation} key={citation.id} />
                    ))}
            </div>
        </>
    );
};

export default Citations;
