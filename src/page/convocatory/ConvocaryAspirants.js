import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ConvocatoryAspirants = () => {

    const [convocatoryAspirants, setConvocatoryAspirants] = useState([]);

    useEffect(() => {
        try {
          axios.get('http://localhost:3001/api/admin/convocatories', {
          }).then(res => {
            setConvocatoryAspirants(res.data)
            console.log (res.data)
          })
        } catch (error) {
          console.log (error)
        }
      }, 
      [setConvocatoryAspirants])
    
      const [apirantsConvocatory, setApirantsConvocatory] = useState([]);

      useEffect(() => {
          try {
            axios.get('', {
            }).then(res => {
              setApirantsConvocatory(res.info)
              console.log (res.info)
            })
          } catch (error) {
            console.log (error)
          }
        }, 
        [setApirantsConvocatory])

return(
    <>
        <h1>hola</h1>
          
    </>
        ); 
    
    };
    

export default ConvocatoryAspirants;