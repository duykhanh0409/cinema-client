import *as types from '../type/isLogOut';

export const onLogOut=(logout)=>{
    return{
        type:types.ON_LOG_OUT,
        payload:logout
    }
}
