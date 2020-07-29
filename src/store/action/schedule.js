import *as types from '../type/schedule';

export const schedule_movie=(time)=>{
    return{
        type:types.SCHEDULE_MOVIE,
        payload:time
    }
}

export const id_movie=(id)=>{
    return{
        type:types.ID_MOVIE,
        payload:id
    }
}

export const getID=(id)=>{
    return{
        type:types.GET_ID,
        payload:id
    }
}

export const passTimeToBooking=(time)=>{
    return{
        type:types.PASSTIMETOBOOKING,
        payload:time
    }
}

export const dataBooking=(movie)=>{// data tra ve tung phim ben booking
    return{
        type:types.DATABOOKING,
        payload:movie
    }
}

export const getDataBooking=()=>{
    return{
        type:types.GETDATABOOKING
    }
}
export const getDateBook=(date)=>{
    return{
        type:types.GETDATEBOOK,
        payload:date
    }
}

export const getCinema=(cinema)=>{
    return{
        type:types.GETCINEMA,
        payload:cinema
    }
}

export const getListTime=(cinema)=>{ // lay danh sach gio chieu dem qua page book log
    return{
        type:types.LISTCINEMA,
        payload:cinema
    }
}