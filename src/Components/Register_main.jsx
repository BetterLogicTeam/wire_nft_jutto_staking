import React from 'react';
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";



function Register_main() {
  return (
    <div className='log_main'>
        <div className="log">
            <div className="container log_con">
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 hvr">
                    <div className="main_form">
                        <h2 className='hh mb-3'>Registration</h2>
                        <p className='peera'>Automatic login if you have MetaMask wallet:</p>

                        <img src="smiley.png" width="70px" alt="" />
                        <p className='peera2'>MetaMask is not connected..!..Wait...</p>

                        <div className="batan">
                            <div className="btn log_batan">Register</div>
                            <div className="btn log_batan">Please enter ID or Metamask address</div>
                            <div className="btn log_batan">Connect to Wallet</div>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-4 hvr">
                    <div className="main_form2">
                       <div className="for_emg">
                       <img src="favicon.png" className='hh mb-3'></img>
                       </div>
                        <p className='peera'>Follow us on Telegram</p>
                        <div className="icn_tele">
                        <FaTelegram></FaTelegram>
                        </div>
                        <div className='query pb-3'>Any query you can get support:</div>

                        {/* <img src="metamask.png" width="70px" alt="" />
                        <p className='peera2'>MetaMask is not connected..!..Wait...</p> */}

                        <div className="batan2">
                            <div className="btn toll">Support Toll-Free 1800-120-4099</div>
                            {/* <div className="btn log_batan">Please enter ID or Metamask address</div> */}
                          <Link to="/">  <div className="btn log_batan hom">Go To Home</div></Link>

                        <p className='peera2 pt-3'>Please Install MetaMask!</p>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register_main