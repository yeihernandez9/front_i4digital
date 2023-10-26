/* eslint-disable no-undef */
import axios from 'axios'

// constantes
const dataInicial = {
    array: []
}

// types
const GET_ALL_CITAS = 'GET_ALL_CITAS'
const DELETE_CITA = 'DELETE_CITA'
const ADD_CITA = 'ADD_CITA'

// reducer
export default function citaReducer(state = dataInicial, action){
    switch(action.type){
        case GET_ALL_CITAS:
            return {...state, array: action.payload}
        case DELETE_CITA:
            return {...state, array: action.payload}
        case ADD_CITA:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions
export const getCitaAction = () => async (dispatch) => {
    try {
        console.log("si se esta llamando")
        const res = await axios.get('http://localhost:8081/api/getAll')
        
        dispatch({
            type: GET_ALL_CITAS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }

}

export const deleteCita = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`http://localhost:8081/api/delete/${id}`)
        dispatch({
            type: DELETE_CITA,
            payload: res
        })
    }catch(error){

    }
}

export const addCita = (body) => async (dispatch) => {
    try{
        const res = await axios.post('http://localhost:8081/api/create',body)
        dispatch({
            type: ADD_CITA,
            payload: res.data.data
        })
    }catch(error){

    }
}