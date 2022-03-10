import { types } from "../types/types";
import axios from "axios";

  export const getProfileFull = (id) => {
    return async (dispatch) => {
      try {
        const res = await axios.get(`http://localhost:3001/api/candidate/sololearm/${id}`);
        dispatch(getResult(res))
      } catch (error) {
        console.log('o este :v',error);
      }
    }
  }


  const getResult = (resp) => ({
    type: types.getResult,
    payload: resp
  })


export const getData = (id) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get(`http://localhost:3001/api/candidate/result/${id}`);
      
        dispatch(getProfile(data))
      } catch (error) {
           console.log('Este',error)
          }
    };
  };
  export const getProfile = (profile) => ({
    type: types.getProfile,
    payload: profile,
  });