import *as types from '../type/DataFilm';
import axios from 'axios';
import {nodeApiLink} from '../../config/nodeApiLink';

export const getDataSuccess=(data)=>{
    return {
        type:types.GET_DATA_SUCCESS,
        payload:data
    }
}
export const getDataRepuest=()=>{
    return{
        type:types.GET_USER_REQUEST
    }
}
export const getDataError=(error)=>{
    return {
        type:types.GET_DATA_ERROR,
        payload:error
    }
}

 export const getData=()=>{ 
     return (dispatch)=>{
         dispatch(getDataRepuest())
         axios.get(`${nodeApiLink}/movie/data`)
         .then(Response=>{
             const movieItem=Response.data;
             dispatch(getDataSuccess(movieItem))
         })
         .catch(err=>{
             console.log(err);
              const errMSg=err.message
              dispatch(getDataError(errMSg))
         })
     }
 }

 //fillter
 export const getFillterData=(name)=>{
    return{
        type:types.FILLTER_DATA,
        payload:name
    }
}