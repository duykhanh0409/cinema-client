import { combineReducers } from 'redux'
import bookSeat from './reducer/BookSeat';
import isLogin from './reducer/Login';
import loginUser from './reducer/LoginUser';
import dataFilm from './reducer/DataFilm';
import schedule from './reducer/schedule';
import dataBooking from './reducer/dataBooking';
import isLogOut from './reducer/isLogOut';

const myReducer= combineReducers({
  bookSeat,
  isLogin,
  loginUser,
  dataFilm,
  schedule,
  dataBooking,
  isLogOut
});

export default myReducer;