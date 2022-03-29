import React, { useEffect, useState } from "react";
import axios from 'axios';
import AspirantConvView from "./AspirantConvView";

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
      [setAspirantConvocatories])
return(
        
            <>
            {Aspirantconvocatories.map ((info) => (
              <AspirantConvView
              key= {info._id}
              data = {info} />
             
            ))};
          
            </>
        ); 
    
    };

export default AspirantConvocatorys;