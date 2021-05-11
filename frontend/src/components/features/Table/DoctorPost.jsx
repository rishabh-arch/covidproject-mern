import React,{useState} from "react"
import "./DoctorPost.css"
const DoctorPost = () =>{
    const [user, setUser] = useState({
        D_Name: "", Contact: "", Status: "", Known_For: ""
    })
    const UploadData = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const submitData = async (e) => {
        e.preventDefault()
    }
return  <section class="login-block">
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-12">
            <form class="md-float-material form-material">
                <div class="auth-box card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="text-center"><i class="fa fa-phone-square text-primary f-56"></i></h3>
                                <h3 class="text-center contact-us">Add Your Details Too</h3>
                                <h6 class="text-center respond">(May be the atleast one person can Gets Help from you)</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-primary"> <input type="text" name="D_Name" onChange={UploadData} class="form-control text-left" placeholder="Name" required="" /> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-primary"> <input type="text" name="Contact" onChange={UploadData} class="form-control text-left" placeholder="Contact" required="" /> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-primary"> <input type="text" name="Status" onChange={UploadData} class="form-control text-left" placeholder="Status" required="" /> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-primary"> <input type="text" name="Known_For" onChange={UploadData} class="form-control text-left" placeholder="Known For" required="" /> </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-12">
                                <button type="button" onClick={submitData} class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20"><i class="fa fa-phone"></i> Click To Serve </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</section>


}

export default DoctorPost;