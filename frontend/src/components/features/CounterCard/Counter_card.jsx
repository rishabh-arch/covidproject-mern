import React from "react";
import './Counter_card.css';

const CounterCard = () =>{

    return (
<div class="container">
    <div class="row">
        <div class="four col-md-3">
            <div class="counter-box colored"> <i class="fa fa-thumbs-o-up"></i> <span class="counter">-</span>
                <p>Total Oxygen Cylinders</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box"> <i class="fa fa-group"></i> <span class="counter">-</span>
                <p>Isolation Rooms</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box"> <i class="fa fa-shopping-cart"></i> <span class="counter">-</span>
                <p>anything</p>
            </div>
        </div>
        <div class="four col-md-3">
            <div class="counter-box"> <i class="fa fa-user"></i> <span class="counter">-</span>
                <p>Saved Trees</p>
            </div>
        </div>
    </div>
</div>
        
    )

}

export default CounterCard;