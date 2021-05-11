import React from "react";
import Doctortable from "./features/Table/DoctorTable.jsx"


const Freeconsultancy = () => {

    return (
        <div>
            <div class="alert alert-primary" role="alert">
                This Page Reflects <span class="alert-link">Free Consultancy from Doctors or People suffered from Covid</span>. Please dont use them as a Prank <span class="alert-link">. </span>
            </div>
            <Doctortable/>
        </div>

    )

}

export default Freeconsultancy;