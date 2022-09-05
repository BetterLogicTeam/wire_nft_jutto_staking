import React from "react";
import './All_Income.css'
const All_Income = (props) => {
    return (
        <div className="All_Income bg-color row p-0 m-0 br-1">
            <div className=" p-3 row">
                <p className="h-color h4">All Incomes</p>
                <div className="d-flex flex-row justify-content-between mt-4">
                    <p className="h-color h4">Referral Income</p>
                    <p className="h-color h4">{props.data.referral_income}$</p>
                </div>
                <div className="progress-row bg-color br-1">
                    <div className="progress-bar-row bg-white  br-1" style={{ width: "100%" }}></div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-4">
                    <p className="h-color h4">Matching Income</p>
                    <p className="h-color h4">{props.data.matching_income}$</p>
                </div>
                <div className="progress-row bg-color br-1">
                    <div className="progress-bar-row bg-white  br-1" style={{ width: "100%" }}></div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-4">
                    <p className="h-color h4">Matching Level Income</p>
                    <p className="h-color h4">{props.data.matching_level_income}$</p>
                </div>
                <div className="progress-row bg-color br-1">
                    <div className="progress-bar-row bg-white  br-1" style={{ width: "100%" }}></div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-4">
                    <p className="h-color h4">ROI Income</p>
                    <p className="h-color h4">{props.data.rio_income}$</p>
                </div>
                <div className="progress-row bg-color br-1">
                    <div className="progress-bar-row bg-white  br-1" style={{ width: "100%" }}></div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-4">
                    <p className="h-color h4">Widrawal Income</p>
                    <p className="h-color h4">{props.data.reward_income}$</p>
                </div>
                <div className="progress-row bg-color br-1">
                    <div className="progress-bar-row bg-white  br-1" style={{ width: "100%" }}></div>
                </div>

            </div>
        </div>
    );
}

export default All_Income;