import React from "react";
import {NavLink} from "react-router-dom"
import './Exfeature.css';
 
const Exfeature = () =>{

    return (
<section class="section pb-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-title">Exclusive features</h2>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058694/feature-1.png" class="img-fluid" alt="feature-image"/>
                    <h5 class="pt-5 pb-3 text-capitalize card-title">No Setup</h5>
                    <p class="mb-4">For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them.</p> <NavLink class="btn-Ex btn-outline-primary" to="#" data-abc="true">read more</NavLink>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058716/feature-2.png" class="img-fluid" alt="feature-image"/>
                    <h5 class="pt-5 pb-3 text-capitalize card-title">free trail</h5>
                    <p class="mb-4">For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them.</p> <NavLink class="btn-Ex btn-outline-primary" to="#" data-abc="true">read more</NavLink>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-lg- mb-4">
                <div class="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559058733/feature-3.png" class="img-fluid" alt="feature-image"/>
                    <h5 class="pt-5 pb-3 text-capitalize card-title">optimized data</h5>
                    <p class="mb-4">For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them.</p> <NavLink class="btn-Ex btn-outline-primary" to="#" data-abc="true">read more</NavLink>
                </div>
            </div>
        </div>
    </div>
</section>
        
    )

}

export default Exfeature;