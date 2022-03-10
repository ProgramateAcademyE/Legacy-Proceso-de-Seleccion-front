import axios from 'axios'
import { types } from "../types/types";

export const dispatchLogin = () => {
    return {
        type: types.login
    }
}

export const fetchUser = async (token) => {
    // return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:3001/api/user/info', {
                headers: {Authorization: token}
            })
            return res
            
        } catch (error) {
            console.log('error', error)
        }
    // }
}

export const dispatchGetUser = (res) => {

    return {
        type: types.getUser,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}