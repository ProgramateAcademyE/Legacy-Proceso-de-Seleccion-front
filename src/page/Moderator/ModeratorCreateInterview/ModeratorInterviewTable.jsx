import React from 'react'
import "./ModeratorInterviewTable.css";
import ConstructorModerator from '../../../components/constructorModerator/ConstructorModerator';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";



const ModeratorInterviewTable = () => {
  const [usersr, setUsersr] = useState([]);
  const token = useSelector((state) => state.token);
  async function showData5() {
    
    const { data3 } = await axios.get(
    "http://localhost:3001/api/admin/citation-all",
    {
      headers: { Authorization: token },
    }

  );
    console.log("d",data3[0])
    setUsersr(data3);
  }
  useEffect(() => {
    showData5();
  }, []);

  console.log("algo",usersr)


  const starti = [
    {
      sala: 4,
      selectores: "Covimap React css  html React css  html React css  html React css React css  html React css  html  html React css  html React css  html React css  html React css  html",
      candidatos: "Js css  html React css  html React css  html React css  html React css React css  html React css  html  html React css  html React css  html React css  html React css  html"
  },
  {
      sala: 5,
      selectores: "Todo List",
      candidatos: "Js css React mongo React css  html React css  html React css  html React css React css  html React css  html  html React css  html React css  html React css  html React css  html"
      
  },
  {
      sala: 5,
      selectores: "Breaking Bad",
      candidatos: "React css  html React css  html React css  html React css React css  html React css  html  html React css  html React css  html React css  html React css  html"
      
  }]

  
 
  return (
    <>
      <div className="moderatorInterviewTableContainer">
            <div className="moderatorInterviewContainerTitle">
                <h1 className="moderatorInterviewTableTitle">Tabla entrevistas  </h1>
              
            </div>
            <div className='secondu'>

                    { starti.map(sta=>{
                      return(
                        <ConstructorModerator sala={sta.sala} selectores={sta.selectores}  candidatos={sta.candidatos}  />
                      )
                      

                    })

                    }
            </div>
      </div>
    </>
  )
}

export default ModeratorInterviewTable
