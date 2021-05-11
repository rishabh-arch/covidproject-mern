import React from "react";
import DoctorPost from "./DoctorPost";
import './DoctorTable.css'

const Doctortable = () => {

   

    return (<div>
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
                    <div class="col-lg-8 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Basic Hoverable Table</h4>
                     
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Product</th>
                                                <th>Sale</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hitesh Chauhan</td>
                                                <td>Engine</td>
                                                <td class="text-danger"> 18.76% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Samso Palto</td>
                                                <td>Brakes</td>
                                                <td class="text-danger"> 11.06% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>Tiplis mang</td>
                                                <td>Window</td>
                                                <td class="text-danger"> 35.00% <i class="fa fa-arrow-down"></i></td>
                                                <td><label class="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Pter parker</td>
                                                <td>Head light</td>
                                                <td class="text-success"> 22.00% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Ankit Dave</td>
                                                <td>Back light</td>
                                                <td class="text-success"> 28.05% <i class="fa fa-arrow-up"></i></td>
                                                <td><label class="badge badge-warning">In progress</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DoctorPost />
    </div>)

}

export default Doctortable;
