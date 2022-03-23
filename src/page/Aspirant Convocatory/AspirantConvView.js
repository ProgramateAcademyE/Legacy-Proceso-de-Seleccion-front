 import React, { useState } from "react";
 import { useSelector } from 'react-redux';



const AspirantConvView = (props) => {
    let {data} = props
    const {user} = useSelector(state => state.auth)
    
    const [idRegister, setidRegister] = useState({})
     
    console.log(idRegister)
    

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
   
return (
     <>
        <div>
            <h1>{name}</h1>
            <p>Fechas de el Bootcamp</p>
            <p>{"Inicio de el Bootcamp:"+ initialBootcampDate}</p>
            <p>{"Fin de el Bootcamp:" + finalBootcampDate}</p>
            <p>{"Pais de Residencia:" + residenceCountry}</p>
            <p>{"Departamento de residencia:" + residencyDepartment}</p>
            <p>{"Edad Limite:" + maxAge}</p>
            <p>{"Estrato Maximo:" + maxSocioeconomicStratus}</p>
            <p>{"Genero:" + gender}</p>
            <p>{"Tipo de poblacion:" + typePopulation}</p></div>

            <button
            className="ButtonP"
            onClick={() => {
            setidRegister({idUser : user._id, idConvocatory: _id})
            
            }}
            
          >
           Postularse
          </button>
            

        </>
    );

};

export default AspirantConvView;

 
