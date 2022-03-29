import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PETITIONS } from "../../../requestUrl";

const AspirantConvView = (props) => {
	let { data } = props;
	const { user } = useSelector((state) => state.auth);
	const token = useSelector((state) => state.token);

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
		typePopulation,
	} = data;

	const handleUserId = async (convId) => {
    const convocatory = await axios.get(`${PETITIONS.getOneConvocatory}${convId}`)
    let usersInConvo = convocatory.data[0].usersRegistered

    // Verify if user alredy exist in the array
    if(!usersInConvo.includes(user._id)){
      usersInConvo.push(user._id) // if the user doesn't exist, add the user to the array
      alert('Inscrito')
    }else{
      alert('No se puede inscribir mas')
    }

		axios.patch(`${PETITIONS.addUsersToConvocatory}${_id}`,
			{
				usersRegistered: usersInConvo,
			},
			{ headers: { Authorization: token } }
		);
	};

	return (
		<div className="Aspirantconv_container">
			
				<h2>{name}</h2><div>
				<p className="Aspirantconv_text">{"Inicio de el Bootcamp:" + initialBootcampDate}</p>
				<p className="Aspirantconv_text">{"Fin de el Bootcamp:" + finalBootcampDate}</p>
				<p className="Aspirantconv_text">{"Pais de Residencia:" + residenceCountry}</p>
				<p className="Aspirantconv_text">{"Departamento de residencia:" + residencyDepartment}</p>
				<p className="Aspirantconv_text">{"Edad Limite:" + maxAge}</p>
				<p className="Aspirantconv_text">{"Estrato Maximo:" + maxSocioeconomicStratus}</p>
				<p className="Aspirantconv_text">{"Genero:" + gender}</p>
				<p className="Aspirantconv_text">{"Tipo de poblacion:" + typePopulation}</p>
			</div>
            <div className="Aspirantconv_Button"><button className='btn btn-success' onClick={()=> handleUserId(_id)}>
				{" "}
				Postularse
			</button></div>
			
		</div>
	);
};

export default AspirantConvView;
