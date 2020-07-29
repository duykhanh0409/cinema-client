import React from 'react'

class introduce extends React.Component{
    render(){
        return(
            <div>
                <div className="seatReserved">
                    <div className="checked"></div>
                    <p>Ghế đã đặt</p>

                    <div className="unchecked"></div>
                    <p>Ghế đã chọn</p>

                    <div className="seatAvailable"></div>
                    <p>Ghế trống</p>
                </div>
            </div>
        )
    }
}

export default introduce;
