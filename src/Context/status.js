import React, { useReducer, createContext } from "react";
import Reducer from './reducer'
import axios from "axios";
import {
  GET_PROFILES,
  GET_CONVOCATORYS,
  GET_CONVOCATORY,
  GET_ACEPT,
  PUT_PARAMETERIZATION,
} from "./reducer";

export const providerContext = createContext();


const StateContext = ({ children }) => {
  const initialState = {
    profiles: [],
    convocatorys: [],
    convocatory: [],
    acept: [],
    parameterization: null,
  };



  // const url = REACT_API_URL
  const url = 'http://localhost:3001/api';
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProfiles = async () => {
    try {
      const response = await axios.get(`${url}/candidate/profile`);
      dispatch({
        type: GET_PROFILES,
        payload: response.data
      })
    } catch (e) {
      console.log(e)
    }
  }
  const getConvocatorys = async () => {
    try {
      const response = await axios.get(`${url}/admin/convocatories`)
      dispatch({
        type: GET_CONVOCATORYS,
        payload: response.data
      })
      // console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  const getConvocatory = async (id) => {
    try {
      const response = await axios.get(`${url}/admin/convocatory/${id}`)
      dispatch({
        type: GET_CONVOCATORY,
        payload: response.data
      })
      // console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  const putParameterization = async (id, data) => {
    try {
      const response = await axios.put(`${url}/admin/parameterization/${id}`, data)
      dispatch({
        type: PUT_PARAMETERIZATION,
        payload: response.data
      })
      // console.log(response)
    } catch (e) {
      console.log(e)
    }
  }
  const getAcept = async (id) => {
    try {
      const response = await axios.get(`${url}/admin/acept`);
      dispatch({
        type: GET_ACEPT,
        payload: response.data,
      });
      // console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <providerContext.Provider value={{
      profiles: state.profiles,
      convocatorys: state.convocatorys,
      convocatory: state.convocatory,
      parameterization: state.parameterization,
      acept: state.acept,
      getAcept,
      getProfiles,
      getConvocatorys,
      getConvocatory,
      putParameterization

    }}>
      {children}
    </providerContext.Provider>
  )
}
export default StateContext
