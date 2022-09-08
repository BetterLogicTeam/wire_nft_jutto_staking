import logo from './logo.svg';
import './App.css';
import {Home,Activate_History,Staking_Details,Profile, Referral_Income, Matching_Income,Reward_Income, Roi_Income, Matching_Level_Income, Buy_NFT, Withdrawal_History, Withdrawal, Direct_Leg_Business, Matching_Tree, My_Referral, My_Team, Coin_Address, NFT_Address, Self_Address,Level_Details} from './Routes';
import Registration_Direct_Income from './Routes/All_Income/Registration_Direct_Income';
import Activation_Direct_Income from './Routes/All_Income/Activation_Direct_Income ';
import {Navbar,Footer} from './Containers';


import {contract_abi,contract_address} from './Utils/contract'
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Explore from './Components/Explore/Explore';
import How_to_play from './Components/How_to_play/How_to_play';
import Tokenomics from './Components/Tokenomics/Tokenomics';
// import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from "./Components/Index_main";
import About_main from "./Components/About_main";
import Explore_main from "./Components/Explore_main";
import How_to_play_main from "./Components/How_to_play_main";
import Tokenomics_main from "./Components/Tokenomics_main";
import Contact_main from "./Components/Contact_main";
import Login_main from "./Components/Login_main";
import Register_main from "./Components/Register_main";
import 'react-toastify/dist/ReactToastify.css';
// import Login from "./Components/Login/index"

import { ToastContainer, toast } from 'react-toastify';
import Pool_income from './Routes/All_Income/Pool_income';
import Matics_tree from './Routes/Team_Details/Matics_tree';
import { Activate } from './Routes/Activation/Activation';
import Matics_Downline from './Routes/Team_Details/Matics_Downline';
const notify = (msg) => toast(msg);

function App() {

  return (
    <div className="">
      <BrowserRouter>      
      <ToastContainer />
       {/* <Header /> */}
        <Routes>
        <Route/>

          <Route exact path="/" element={<Index_main />} />
          <Route exact path="/About_main" element={<About_main />} />
          <Route exact path="/Explore_main" element={<Explore_main />} />
          <Route exact path="/How_to_play_main" element={<How_to_play_main />} />
          <Route exact path="/Tokenomics_main" element={<Tokenomics_main />} />
          <Route exact path="/Contact_main" element={<Contact_main />} />
          <Route exact path="/Login_main" element={<Login_main notify={notify} />} />
          <Route exact path="/Register_main" element={<Register_main notify={notify} />} />
          
          
          <Route exact path='Dashboard' element={<Navbar />} >
            <Route path='Home' element={ <Home /> } /> 
            <Route path='Activate_History' element={<Activate_History />} />  
            <Route path='Activate' element={<Activate />} />          

            <Route path='Staking_Details' element={<Staking_Details />} />                 
            <Route path='Profile' element={<Profile />} />
            {/* <Route path='/Referral_Income' element={<Referral_Income />} /> */}
            <Route path='Registration_Direct_Income' element={<Registration_Direct_Income />} />
            <Route path='Activation_Direct_Income' element={<Activation_Direct_Income />} />


            <Route path='Matching_Income' element={<Matching_Income />} />
            <Route path='Reward_Income' element={<Reward_Income />} />
            <Route path='Roi_Income' element={<Roi_Income />} />
            <Route path='Registration_Roi_Income' element={<Matching_Level_Income />} />
            <Route path='Pool_income' element={<Pool_income />} />
            <Route path='Matics_Downline' element={<Matics_Downline />} />


            <Route path='Buy_NFT' element={<Buy_NFT />} />
            <Route path='Withdrawal_History' element={<Withdrawal_History />} />
            <Route path='Withdrawal' element={<Withdrawal />} />
            <Route path='Direct_Leg_Business' element={<Direct_Leg_Business />} />
            <Route path='Level_Details' element={<Level_Details />} />
            <Route path='Matching_Tree' element={<Matching_Tree />} />
            <Route path='Matics_tree' element={<Matics_tree />} />

            <Route path='My_Referral' element={<My_Referral />} />
            <Route path='My_Team' element={<My_Team />} />
            <Route path='Coin_Address' element={<Coin_Address />} />
            <Route path='NFT_Address' element={<NFT_Address />} />
            <Route path='Self_Address' element={<Self_Address />} />
          </Route> 
          <Route/>
        </Routes>
        <ToastContainer />
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
