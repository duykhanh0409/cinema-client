/* eslint-disable no-unused-expressions */
import * as types from "../type/bookSeat";

const initialState = {
  seatReserved: [],
};

var myReducer = (state = initialState, action) => {
  // console.log(action,"ne ne")
  switch (action.type) {
    case types.LIST_SEAT:
      return state;
    case types.ADD_SEATRESERVED:
      return { ...state, seatReserved: [...action.payload] };
    default:
      return state;
  }
};

export default myReducer;
