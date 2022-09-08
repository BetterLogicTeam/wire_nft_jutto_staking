import React from "react";
import './Id_Number.css';
import Chart from 'react-apexcharts'
const Id_Number = (props) => {
    return ( 
        <div className="pe-lg-3 col-lg-6 p-0 " >
        <div className="Id_Number bg-color br-1">
            <div className="px-3 pt-3">
                <p className="p-color">My Referral</p>
                <div className="d-flex flex-row align-items-center">
                  
                </div>
            </div>
          
                <div className="row px-2">
            <div className=" col-6 d-flex flex-column text-center">
                <h2 className="h3 h-color">{props.data.left_direct}</h2>
                <p className="p-color">Left Referral</p>
            </div>
            <div className=" col-6 d-flex flex-column text-center">
                <h2 className="h3 h-color">{props.data.right_direct}</h2>
                <p className="p-color">Right Referral</p>
            </div>
        </div>
        <div className="row px-2">
            <div className=" col-6 d-flex flex-column text-center">
                <h2 className="h3 h-color">{props.data.left_direct_business}</h2>
                <p className="p-color">Left Business</p>
            </div>
            <div className=" col-6 d-flex flex-column text-center">
                <h2 className="h3 h-color">{props.data.right_direct_business}</h2>
                <p className="p-color">Right Business</p>
            </div>
        </div>
        </div>
    </div>
     );
}
 
export default Id_Number;