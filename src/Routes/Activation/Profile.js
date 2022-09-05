import { useState } from "react";
import {PagePath,Table} from "../../Components";

const Profile = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Profile",page_path:"Activation / Profile"}} />
                <div className="col-12 d-flex justify-content-center py-5">
                    <div className="col-md-6">
                            <form className="d-flex flex-column align-items-center profile-border profile-login  py-4">
                                <label className="h-color col-10 p-2">Enter Id</label>
                                <input type="text" placeholder="Enter Id" className="p-3 profile-border bg-gray col-10"/>
                                <label className="h-color p-2  col-10">Enter Password</label>
                                <input type="text" placeholder="Enter Password" className="p-3 profile-border bg-gray col-10" />
                                <button className="col-5 my-3 py-3 btn text-white btn-meta-mask">
                                    <img src="assets/images/metamask-icon.png" className="col-2 me-2" />
                                    Meta Mask</button>
                                <input type="submit" className="col-5 py-3 bg-success btn text-white mb-3"/>
                            </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;