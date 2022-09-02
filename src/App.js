import logo from './logo.svg';
import './App.css';
import {contract_abi,contract_address} from './Utils/contract'
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Explore from './Components/Explore/Explore';
import How_to_play from './Components/How_to_play/How_to_play';
import Tokenomics from './Components/Tokenomics/Tokenomics';
import Footer from './Components/Footer/Footer';
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
const notify = (msg) => toast(msg);

function App() {

  return (
    <div className="">
      <BrowserRouter>      
      <ToastContainer />
       {/* <Header /> */}
        <Routes>
        <Route  />
          <Route exact path="/" element={<Index_main />} />
          <Route exact path="/About_main" element={<About_main />} />
          <Route exact path="/Explore_main" element={<Explore_main />} />
          <Route exact path="/How_to_play_main" element={<How_to_play_main />} />
          <Route exact path="/Tokenomics_main" element={<Tokenomics_main />} />
          <Route exact path="/Contact_main" element={<Contact_main />} />
          <Route exact path="/Login_main" element={<Login_main notify={notify} />} />
          <Route exact path="/Register_main" element={<Register_main notify={notify} />} />
          <Route />

        
        </Routes>
        <ToastContainer />
        {/* <Footer /> */}
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
