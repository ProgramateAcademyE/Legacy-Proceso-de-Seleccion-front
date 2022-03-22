import React, { useContext, useEffect } from "react";
import interviewaspirant from "./InterviewAspirant.module.css"
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
    <div className={interviewaspirant.interview}>
      <div className="section__content d-flex justify-content-between">
        <span className="upperCase bold">
          Agenda de Entrevista y assessment
        </span>
      </div>
      <div className="calendar mt-4">
        <CalendarView />
      </div>
    </div>
  );
};

export default InterviewAspirant;
