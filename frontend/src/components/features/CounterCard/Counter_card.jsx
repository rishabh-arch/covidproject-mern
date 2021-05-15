import React from "react";
import './Counter_card.css';

const CounterCard = () =>{

    return (
<div className="container">
    <div className="row">
        <div className="four col-md-3">
            <div className="counter-box colored"> <i className="fa fa-thumbs-o-up"></i> <span className="counter">-</span>
                <p>Total Oxygen Cylinders</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">-</span>
                <p>Isolation Rooms</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">-</span>
                <p>anything</p>
            </div>
        </div>
        <div className="four col-md-3">
            <div className="counter-box"> <i className="fa fa-user"></i> <span className="counter">-</span>
                <p>Saved Trees</p>
            </div>
        </div>
    </div>
</div>
        
    )

}

export default CounterCard;