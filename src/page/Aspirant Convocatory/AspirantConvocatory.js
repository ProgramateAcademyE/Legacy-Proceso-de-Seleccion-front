import React, { useEffect, useState } from "react";
import axios from 'axios';
import AspirantConvView from "./AspirantConvView";
import "./Aspirantconv.module.css"
const AspirantConvocatorys = () => {

    const [Aspirantconvocatories, setAspirantConvocatories] = useState([]);

    useEffect(() => {
        try {
          axios.get('http://localhost:3001/api/admin/convocatories', {
          }).then(res => {
            setAspirantConvocatories(res.data)
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