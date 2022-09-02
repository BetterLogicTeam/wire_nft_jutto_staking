import React from 'react';
import './Footer.css'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { ImReddit } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
        <footer class="footer-section style-4">
         <div class="footer-top">
            <div class="footer-newsletter"style={{display: "none"}}>
               <div class="container">
                  <div class="row g-4 align-items-center justify-content-center">
                     <div class="col-lg-7">
                       
                          <div class="social-part ps-lg-5"style={{paddingTop: "14px"}}>
                           <div class="ft-header">
                              <h4>Quick Links</h4>
                           </div>
                           <ul class="d-flex justify-content-between">
                              <li class="social-link"><Link to="/">Home</Link></li>
                              <li class="social-link"><Link to="/Explore_main">Explore</Link></li>
                              <li class="social-link"><Link to="/How_to_play_main">How To Play</Link></li>
                              <li class="social-link"><Link to="/Tokenomics_main">Tokenomics</Link></li>
                              <li class="social-link"><a href="#" class="bgColor">White Paper</a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-lg-5">
                        <div class="social-part ps-lg-5">
                           <div class="ft-header">
                              <h4>Join the Community</h4>
                           </div>
                           <ul class="social-list d-flex flex-wrap align-items-center mb-0">
                              <li class="social-link"><a href="#" data-blast="bgColor"><i
                                 class="icofont-twitter"></i></a></li>
                              <li class="social-link"><a href="#" data-blast="bgColor"><i
                                 class="icofont-twitch"></i></a></li>
                              <li class="social-link"><a href="#" data-blast="bgColor"><i
                                 class="icofont-reddit"></i></a></li>
                              <li class="social-link"><a href="#" data-blast="bgColor"><i
                                 class="icofont-instagram"></i></a></li>
                              <li class="social-link"><a href="#" data-blast="bgColor"><i
                                 class="icofont-dribble"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="footer-links padding-top">
               <div class="container">
                  <div class="row">
                     <div class="col-md-3">
                        <div class="footer-link-item">
                          <Link to="/"> <img src="logo-3.png" width="250px"/> </Link>
                           
                        </div>
                     </div>
                     <div class="col-md-1"></div>
                     <div class="col-md-3">
                        <div class="footer-link-item">
                           <h5>Quick Links</h5>
                           <ul class="footer-link-list">
                              
                              <li><Link to="/Explore_main" class="footer-link">Explore</Link></li>
                              <li><a href="contact.html" class="footer-link"><Link to="/Contact_main">Contact Us</Link> </a></li>
                              
                           </ul>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="footer-link-item">
                           <h5>Quick Links</h5>
                           <ul class="footer-link-list">
                              {/* <li><a href="#" class="footer-link">Buy Wire NFT</a></li> */}
                              
                              <li><a href="#" class="footer-link">Terms & Services</a></li>
                              <li><a href="#" class="footer-link">Privacy Policy</a></li>
                              {/* <li><a href="#" class="footer-link">Media Kits</a></li> */}
                           </ul>
                        </div>
                     </div>
                     <div class="col-md-2">
                        <div class="footer-link-item">
                           <h5>Follow Us</h5>
                           <ul class="footer-link-list">
                              {/* <li><a href="https://www.facebook.com/Wireswap-102238962331272" class="footer-link"><TiSocialFacebook></TiSocialFacebook> Facebook</a></li> */}
                              <li><a href="https://twitter.com/wireswap" class="footer-link"><TiSocialTwitter></TiSocialTwitter> Twitter</a></li>
                              {/* <li><a href="https://www.reddit.com/user/Wireswap" class="footer-link"><ImReddit></ImReddit> Reddit</a></li> */}
                              <li><a href="https://t.me/Wireswap" class="footer-link"><FaTelegram></FaTelegram> Telegram</a></li>
                              
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
         </div>
         <div class="footer-bottom">
            <div class="container">
               <p class="text-center py-4 mb-0">All rights reserved &copy; uletron.live  
               </p>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer