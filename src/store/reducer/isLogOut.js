import *as types from '../type/isLogOut';

const initialState=true;

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ON_LOG_OUT:
            console.log(action,"xem");
            state=action.payload;
            return state;
         default: return state;   
    }
}

export default myReducer;