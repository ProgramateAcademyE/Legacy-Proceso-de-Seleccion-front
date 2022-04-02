import React, { useEffect, useState } from "react";
import axios from "axios";
import AspirantConvView from "./AspirantConvView";
import "./Aspirantconv.css";
import { PETITIONS } from "../../../requestUrl";

const AspirantConvocatorys = () => {
	const [Aspirantconvocatories, setAspirantConvocatories] = useState([]);
  const [techTest, setTechTest] = useState([])

	useEffect(() => {
		try {
			axios
				.get(PETITIONS.getConvocatories, {})
				.then((res) => {
					setAspirantConvocatories(res.data);
				});
		} catch (error) {
			return error;
		}
    try{
      axios.get(PETITIONS.getTechTest).then(res => setTechTest(res.data));
    }catch(error){
      return error
    }
	}, []);

	return (
		<div className='AspirantConv_Box'>
			{Aspirantconvocatories.length !== 0 ?
			 <AspirantConvView data={Aspirantconvocatories} test={techTest}/>
			 : <p style={{marginLeft: "100px"}}>Aun no hay convocatorias activas, por favor revisar en otro momento</p>
			}
		</div>
	);
};

export default AspirantConvocatorys;
