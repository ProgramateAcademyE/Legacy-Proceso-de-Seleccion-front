import axios from 'axios'
import { useDispatch } from 'react-redux';
import { types } from "../types/types";

export const fetchAllUsers = async (token) => {
    const res = await axios.get('http://localhost:3001/api/user/all_info', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: types.getAllUsers,
        payload: res.data
    }
}


export const getFormAll = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/api/candidate/infoperfil/${id}`)
            console.log(data)
            dispatch(getForm(data))
    
          } catch (error) {
            console.log(error)
          }
    }
}




const getForm = (profile) => {
    return{
        type: types.getForm,
        payload: profile
    }
}


