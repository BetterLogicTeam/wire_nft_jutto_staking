import React from "react";
import './Earned_Wire.css';
import Chart from 'react-apexcharts'
const Earned_Wire = (props) => {
    return ( 
        <div className="Earned_Wire bg-color br-1 col-lg-6 p-0">
            <div className="px-3 pt-3">
                <p className="p-color">My Team</p>
                {/* <h1 className="h3 h-color">{props.data.joined}</h1> */}
            </div>
            {/* <Chart
                    options={props.opt.options}
                    series={props.opt.series}
                    type='area'
                    height= '100'
                    width="100%"
                 /> */}
                   <div className="row px-2">
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.left_downline}</h2>
                    <p className="p-color">Left</p>
                </div>
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.right_downline}</h2>
                    <p className="p-color">Right</p>
                </div>
            </div>
            <div className="row px-2">
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.leftbusiness}</h2>
                    <p className="p-color">Left Business</p>
                </div>
                <div className=" col-6 d-flex flex-column text-center">
                    <h2 className="h3 h-color">{props.data.rightbusiness}</h2>
                    <p className="p-color">Right Business</p>
                </div>
            </div>
        </div>
     );
}
 
export default Earned_Wire;