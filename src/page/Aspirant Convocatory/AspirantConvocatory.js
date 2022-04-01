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

  // techTest.map(({convocatories}) => convocatories.map((id) => console.log(id)))

	return (
		<div className='AspirantConv_Box'>
			{/* {Aspirantconvocatories.map((info, index) => (
        techTest.map(({convocatories, title}) => (convocatories.includes(info._id) ?
          <AspirantConvView key={index} data={info} title={title}/>
        : null))
			))}; */}
      <AspirantConvView data={Aspirantconvocatories} test={techTest}/>
		</div>
	);
};

export default AspirantConvocatorys;
