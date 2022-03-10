import React, { useContext, useEffect } from "react";
import './InterviewAspirant.scss';
import { providerContext } from '../../Context/status'
import CalendarView from "../../components/calendar/CalendarView";

const InterviewAspirant = () => {
  // const { getProfiles, profiles, getProfile, profileT, getConvocatorys, convocatorys } = useContext(providerContext)
  // useEffect(() => {
  //   getProfiles();
  //   getConvocatorys();
  //   // getProfile("618c352d3ad3f3933bfb3b59")
  // }, [])
  // console.log(profileT)
  return (
    <div className="interview">
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">
          Agenda de Entrevista y assessment
        </span>
        <div className="box__content">
          <span className="text-crumbs bold-500">Programate</span>
          <i className="fas fa-chevron-right subtitle" />
          <span className="text-crumbs">Entrevista</span>
        </div>
      </div>
      <div className="calendar mt-4">
        <CalendarView />
      </div>
      {/* {
        // console.log(profiles.residenceCountry)
        profileT.map(user =>
        (

          <div key={user.id}>

            <h1 onClick={() => getProfile(user.user_id)}>{user.municipalityOfResidency}</h1>
          </div>
        )
        )
      }
      <h1>jjjjjjjj</h1>
      {
        convocatorys.map(resp => (
          <div key={resp._id}>
            <p>{resp.name}</p>
          </div>
        ))
      } */}


    </div>
  );
};

export default InterviewAspirant;
