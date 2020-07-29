import React from "react";
import ReservedList from "./ReservedList";
import { connect } from "react-redux";
import * as action from "../../../store/action/bookSeat";
import './booking_seat.css';

class DrawGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reserved:[]
    };
    this.setState({reserved:this.props.reserved})
  }
  
  componentDidUpdate(){ // được gọi sau khi render xem đi xem lại cho hiểu. như useEffect 
    this.props.addReserved(this.state.reserved);
  }

  render() {
    console.log(this.props.reserved, "kt phan tu");//item[0];
    // const reserved=this.props.reserved.map(item=>item.map(items=>items));
    // console.log(reserved);
    
    return (
      <div className="container-booking">
        <h2></h2>
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td
                  className={
                    this.props.reserved.indexOf(row) > -1
                      ? "reserved"
                      : this.state.reserved.indexOf(row)>-1?"choose":"available"
                  }
                  key={row}
                  onClick={(e) => this.onClickSeat(row)}
                >
                  {row}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  onClickSeat(seat) {
    this.setState({reserved:this.props.reserved});
    if (this.state.reserved.indexOf(seat) > -1) {
      this.setState({
        reserved:this.state.reserved.filter((res) => res !== seat)
      }) 
      this.props.addReserved(this.state.reserved);
    } else {
      this.setState({
        reserved:this.state.reserved.concat(seat)
      }) 
      
    }
    this.props.addReserved(this.state.reserved);
  }

}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    addReserved: (seat) => {
      //console.log("hello")
      dispatch(action.ADD_SEATRESERVED(seat));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawGrid);
