import axios from "axios";
import React, { useState } from "react";
import { useSelector } from 'react-redux';



const AspirantConvView = (props) => {
    let { data } = props
    const { user } = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

  



    let {
        _id,
        name,
        initialBootcampDate,
        finalBootcampDate,
        residenceCountry,
        residencyDepartment,
        maxAge,
        maxSocioeconomicStratus,
        gender,
        typePopulation
} = data;

const handleUserId = () => {

        axios.patch(`http://localhost:3001/api/admin/update-candidate/${_id}`, {
        usersRegistered:[user._id]
        },{headers: {Authorization: token,}})
  
    };
    
return (
        <>
        <div>
            <h1>{name}</h1>
            <p>Fechas de el Bootcamp</p>
            <p>{"Inicio de el Bootcamp:" + initialBootcampDate}</p>
            <p>{"Fin de el Bootcamp:" + finalBootcampDate}</p>
            <p>{"Pais de Residencia:" + residenceCountry}</p>
            <p>{"Departamento de residencia:" + residencyDepartment}</p>
            <p>{"Edad Limite:" + maxAge}</p>
            <p>{"Estrato Maximo:" + maxSocioeconomicStratus}</p>
            <p>{"Genero:" + gender}</p>
            <p>{"Tipo de poblacion:" + typePopulation}</p></div>

        <button className="ButtonP"  onClick={handleUserId}> Postularse
        </button>


    </>
);

}

export default AspirantConvView;


