import React from 'react'
import ConstructorModerator from '../../../components/constructorModerator/ConstructorModerator';
import "./ModeratorDashboard_ApplicantsCited.css";



const ModeratorDashboard = () => {

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
      
  }

  ]
  return (
    
      <div className="moderatorContainer44">
          <div className="moderatorDashboard">
                <h1 className="moderatorDashboardTitle">INICIO - MODERADOR </h1>
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
    
  )
}

export default ModeratorDashboard
