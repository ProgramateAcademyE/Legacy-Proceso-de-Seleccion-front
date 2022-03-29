import React, { useEffect, useState } from "react";
import axios from 'axios';
import AspirantConvView from "./AspirantConvView";
import "./Aspirantconv.module.css"
import { PETITIONS } from "../../../requestUrl";
const AspirantConvocatorys = () => {

  const [Aspirantconvocatories, setAspirantConvocatories] = useState([]);
  console.log(Aspirantconvocatories)
    useEffect(() => {
        try {
          axios.get(`${PETITIONS.getConvocatories}`, {
          }).then(res => {
           
            setAspirantConvocatories(res)
          })
        } catch (error) {
          console.log (error)
        }
      }, 
      [])
return(
        
            <div className="AspirantConv_Box">
            {Aspirantconvocatories.map ((info) => (
              <AspirantConvView
              key= {info._id}
              data = {info} 
              />
             
            ))};
          
            </div>
        ); 
    
    };

export default AspirantConvocatorys;