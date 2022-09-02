import React,{useEffect,useState} from 'react';
import { loadWeb3 } from "../api.js";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Login_main.css'
import axios from 'axios';

function Login_main({notify}) {
    const [uid,setuid] = useState();    
    const [address,setaddress] = useState('');
    const [connected,setconnected] = useState('MetaMask is not connected..!..Wait...')

    const callapi = async () => {
        let res =  await axios.get('https://ulematic-api.herokuapp.com/login?id='+uid);
        console.log(res)
        if(res.data.success == true)
        {
         console.log(res.data)
         notify('Login Successfully')
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
    //   notify("Wallet Connected");
      setaddress(acc)
      setconnected('MetaMask is connected... Ready To Go')
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
                        <h2 className='hh mb-3'>Login</h2>
                        <p className='peera'>Automatic login if you have MetaMask wallet:</p>

                        <img src="metamask.png" width="70px" alt="" />
                        <p className='peera2'>{connected}</p>

                        <div className="batan">
                            <div className="btn log_batan">Automatic Sign up</div>
                            <input className='btn log_batan' placeholder='Please enter ID or Metamask address' onChange={(e)=>{
                                        setuid(e.target.value)
                                    }} />
                            {/* <div className=""></div> */}
                            <button className="btn log_batan" onClick={()=>{
                                callapi()
                            }}>Login</button>
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
                         <Link to="/">   <div className="btn log_batan hom">Go To Home</div></Link>

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

export default Login_main