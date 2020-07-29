/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './booking_seat.css';
import DrawGrid from './DrawGrid';
import { connect } from 'react-redux';
import axios from "axios";
import { nodeApiLink } from '../../../config/nodeApiLink';
import Introduce from '../Booking_right/introduce';



class Booking_seat extends React.Component{
    constructor(props){
        super(props);
        this.state={
          booked:[],
          reserved:[]
        }
      
    }
    
    componentDidMount(){
      axios.get(`${nodeApiLink}/booking/data`)
      .then(Response=>{
        const booked=Response.data;
        this.setState({booked})
      })
      .catch(err=>console.log(err))

    }
   
    

    render() {
      console.log(this.props.ListTime,"xem day");
      console.log(this.state.booked,"databook");
    
        const {listTime}=this.props.ListTime;
        const time=this.props.ListTime.time;
        const cinema=this.props.ListTime.cinema;
        const scheduleTime=this.props.ListTime.scheduleTime;
        const idMovie=this.props.ListTime.id;
        const filtertime=listTime.map(items=>items.showtime.filter(item=>item.time===time))
       // console.log(filtertime,"loc dc chua");  
        let available=filtertime[0][0].seatAvailable;// mang rong gan gia tri so ghe do
        let reserved=filtertime[0][0].seatReserved; // luu ghe da dat
        available=[
          'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10',
          'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
          'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10',
          'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10',
          'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10',
          'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10',
          'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10',
          'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10',               
      ]
     
    console.log(scheduleTime,"1");
    console.log(idMovie,"2");
    const filter_1=this.state.booked.length?this.state.booked.filter(items=>items.cinema===cinema):[];
    const filter_2=filter_1.filter(items=>items.date===scheduleTime);
    const filter_3=filter_2.filter(items=>items.id===idMovie);
    const filter=filter_3.filter(items=>items.time===time);
    console.log(filter,"ra khôg");
    const seat=filter.map(item=>item.seats);//filter[0].seats
   
    const Seats=seat.reduce((a,b)=>a.concat(b),[]);
    console.log([...Seats],'1');
    reserved=filter.length?[...Seats]:[];
    console.log(reserved,"chốt");
    
      
     
    //   ///=== chu = la sai
     
      
    
     
        return (
          <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
             <img src={require('../../../images/screen-thumb.png')} className="img-screen" />
            <div>
              <DrawGrid
                seat={available}
                reserved={reserved}
              
              />
            </div>
            <Introduce/>
          </div>
        );
      }
}
  
const mapStateToProps=(state)=>{
    return{
        ListTime:state.schedule
    }
}



export default connect(mapStateToProps,null)(Booking_seat);

// [ ['A1'],['A2'],['A3','A4'] ]  ==> ['A1','A2','A3','A4']  //làm sao

// // duyệt nó chạy thì pt đầu là ['A1'] , thứ 2 là ['A2'], thứ 3 là ['A3','A4']

// push dô củng là pt1, pt2, pt3

// seat.reduce((a,b)=>(a.concat(b)),[])