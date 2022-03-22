import React from "react";
const AspirantConvView = (data) => {
    let {
        nameConvocatory, startDateBootcamp, endDateBootcamp,
        residenceCountry,
        residenceDepartment,
        age,
        stratus,
        gender,
        typePopulation,

    } = data


    return (
        <>
            <h1>{nameConvocatory}</h1>
            <p>Fechas de el Bootcamp</p>
            <p>{"Inicio:" + startDateBootcamp}</p>
            <p>{"Fin:" + endDateBootcamp}</p>
            <p>{"Pais de Residencia:" + residenceCountry}</p>
            <p>{"Departamento de residencia:" + residenceDepartment}</p>
            <p>{"Edad Limite:" + age}</p>
            <p>{"Estrato Maximo:" + stratus}</p>
            <p>{"Genero:" + gender}</p>
            <p>{"Tipo de poblacion:" + typePopulation}</p>
        </>
    );

};

export default AspirantConvView;


