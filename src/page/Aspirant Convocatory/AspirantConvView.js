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
				<p>{"Tipo de poblacion:" + typePopulation}</p>
			</div>

			<button className='ButtonP' onClick={()=> handleUserId(_id)}>
				{" "}
				Postularse
			</button>
		</>
	);
};

export default AspirantConvView;
