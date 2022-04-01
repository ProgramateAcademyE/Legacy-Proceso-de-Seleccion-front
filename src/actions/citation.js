import axios from "axios";
import { types } from "../types/types";



export const setCitationData = (iduSER, idEvent) => {

    return async (dispatch) => {
        try {   
            const {data} = await axios.post(`http://localhost:3001/api/candidate/attendevent/${iduSER}/${idEvent}`)
    
            dispatch(setCitation(data))
        } catch (error) {
            return error
        }
    };
  };
  export const setCitation = (cita) => ({
    type: types.setCitation,
    payload: cita,
  });