import *as types from '../type/premiere_date';
export const getDate=(date)=>{
    return {
        type:types.GETPREMIERE_DATE,
        payload:date
    }
}