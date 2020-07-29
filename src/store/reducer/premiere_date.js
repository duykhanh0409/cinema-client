import *as types from '../type/premiere_date';

const initialState="";

var muReducer=(state=initialState,action){
    switch(action.type){
        case types.GETPREMIERE_DATE:
            return state=action.payload;
        default:return state;    
    }
}