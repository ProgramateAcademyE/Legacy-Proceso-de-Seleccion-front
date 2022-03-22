import React, { useEffect, useState } from "react";
import axios from 'axios';

const AspirantConvocatorys = () => {

    const [Aspirantconvocatories, setAspirantConvocatories] = useState([]);

    useEffect(() => {
        try {
          axios.get(' http://localhost:3001/api/admin/convocatories', {
          }).then(res => {
            setAspirantConvocatories(res.data)
          })
        } catch (error) {
          console.log (error)
        }
      }, [setAspirantConvocatories])
  

 


    return(
        
            <>
            {Aspirantconvocatories.map ((info) => (
            <div>
                <h1>{info.name}</h1>
                <p>Fechas de el Bootcamp</p>
                <p>{"Inicio:" + info.startDateBootcamp}</p>
                <p>{"Fin:" + info.endDateBootcamp}</p>
                <p>{"Pais de Residencia:" + info.residenceCountry}</p>
                <p>{"Departamento de residencia:" + info.residenceDepartment}</p>
                <p>{"Edad Limite:" + info.age}</p>
                <p>{"Estrato Maximo:" + info.stratus}</p>
                <p>{"Genero:" + info.gender}</p>
                <p>{"Tipo de poblacion:" + info.typePopulation}</p></div>
                
            ))};
            </>
        );
    
    };

export default AspirantConvocatorys;