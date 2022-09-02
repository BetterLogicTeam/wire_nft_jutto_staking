import React from 'react';
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { loadWeb3 } from "../api.js";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Register_main({notify}) {
    const navigate = useNavigate();
    const [uid,setuid] = useState();
    const [address,setaddress] = useState('');
    const [connected,setconnected] = useState('MetaMask is not connected..!..Wait...')

const callapi = async (position) => {
   let res =  await axios.post('https://ulematic-api.herokuapp.com/registration',{sid:uid,accountnumber:address,position:position,amount:10,traxn:"bvcbfghfghhgutu567567yuyuthghghjhjhjjh"});
   console.log(res.data)
   if(res.data.data == 'Accountnumber already exists in joinnow_temp !!')
   {    
    notify('Account Already Resgistered with this ID')
    navigate('/Login_main')
    
   }
   else if(res.data.success == true)
   {
    console.log(res.data)
    notify('Registered Successfully')
   }
}
const  ConnectToMetaMask = async ()=>{
    let acc = await loadWeb3();
    if(acc == 'No Wallet')
    {
      notify('No Wallet')
    }
    else if(acc == 'Wrong Network')
    {
      notify('Wrong Network')
    }
    else{
      notify("Wallet Connected");
      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Register')
    }
  }

  useEffect(()=>{
    ConnectToMetaMask();
  },[])

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
                        <p className='peera2'>{connected}</p>

                        <div className="batan">
                            <button className="btn log_batan" onClick={()=>{
                                let modelRegister = document.querySelector('.modelRegister')
                                modelRegister.classList.remove('d-none')
                                modelRegister.classList.add('d-flex')
                            }}>Register</button>
                            <div className=' w-100 h-100 d-none justify-content-center align-items-center  position-absolute  modelRegister'>
                                <div className=' bg-white bord border-dark py-3 px-5 flex-column justify-content-center align-items-center d-flex'> 
                                    <h4 className=' text-dark fs-5 my-3'>Enter Upline ID</h4>
                                    <input type={'number'} className="boxset" onChange={(e)=>{
                                        setuid(e.target.value)
                                    }} />
                                    <div className=' mt-4'>
                                        <button className="btn bt loginbtn px-3 mx-2" onClick={()=>{
                                            let modelRegister = document.querySelector('.bordd')
                                            let modelRegisterR = document.querySelector('.bord')

                                            modelRegister.classList.remove('d-none')
                                            modelRegister.classList.add('d-flex')
                                            modelRegisterR.classList.remove('d-flex')
                                            modelRegisterR.classList.add('d-none')
                                        }}>OK</button>
                                        <button className="btn bt loginbtn px-3 mx-2 ">Close</button>
                                    </div>
                                </div>
                                <div className=' bg-white bordd border-dark py-3 px-5 flex-column justify-content-center align-items-center d-none'> 
                                    <h4 className=' text-dark fs-5 my-3'>Referral Confirmation</h4>
                                    <p>Your Current Referral ID is {uid}</p>
                                    <div className=' d-flex flex-row align-items-center justify-content-center my-2'>
                                        <p className=' p-0  m-0'>Tron</p> <input className='input1 mx-2' defaultValue={0} type={'number'} />
                                        <p className=' p-0  m-0'>ULE</p> <input className='input1 mx-2' defaultValue={0} type={'number'} />
                                    </div>
                                    <select className="boxset" name='position'>
                                        <option value={1}>Left</option>
                                        <option value={2}>Right</option>
                                    </select>
                                    <div className=' mt-4'>
                                        <button className="btn bt loginbtn px-3 mx-2" onClick={()=>{
                                            let position = document.getElementsByName('position')[0].value;
                                            callapi(position.value)
                                            let modelRegister = document.querySelector('.modelRegister')                                            
                                            let modelRegisterR = document.querySelector('.bord')
                                            modelRegisterR.classList.remove('d-none')
                                            modelRegisterR.classList.add('d-flex')

                                            let modelRegisterRR = document.querySelector('.bordd')
                                            modelRegisterRR.classList.remove('d-flex')
                                            modelRegisterRR.classList.add('d-none')
                                            

                                            
                                            modelRegister.classList.remove('d-flex')
                                            modelRegister.classList.add('d-none')

                                        }}>Proceed</button>
                                        <button className="btn bt loginbtn px-3 mx-2 ">No I want to change ID</button>
                                    </div>

                                </div>
                            </div>
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