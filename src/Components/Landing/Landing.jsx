import React from "react";
import "./Landing.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/effect-cards";

function Landing() {
  return (
    <div>
      <section class="banner-section home-4">
        <div class="container">
          <div class="banner-wrapper">
            <div class="row align-items-center g-5">
              <div class="col-lg-7">
                <div class="banner-content">
                  <h1>
                    {" "}
                    <span class="theme-color-4">Buy</span>, sell And{" "}
                    <span class="theme-color-4">
                      {" "}
                      <br></br> 
                    </span>{" "}
                    Collect NFTs.
                  </h1>
                  <p>
                  The world's largest digital marketplace for crypto collectibles and non-fungible tokens
                  </p>
                  <div class="banner-btns d-flex flex-wrap">
                    {/* <a data-blast="bgColor" href="explore.html"
                              class="default-btn move-top"> </a> */}
                    <a href="#" class="default-btn move-right">
                      <span>Explore</span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <Swiper
                  effect={"cards"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  loop={true}

                  modules={[EffectCards, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="j1.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Ule Tron</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="j2.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Ule Tron</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="j3.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Ule Tron</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="j4.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Ule Tron</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wallet-section padding-top padding-bottom">
        <div class="container">
          <div class="section-header style-4">
            <div class="header-shape">
              <span></span>
            </div>
            <h3>All Wallet Options</h3>
          </div>
          <div class="wallet-inner">
            <div class="row g-3">
              <div class="col-lg-3 col-sm-5 col-7 ">
                <div class="wallet-item home-4 jj">
                  <div class="wallet-item-inner jj text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="06.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Meta Mask</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-5 col-7">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="w1.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Alpha Wallet</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-5 col-7">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="w2.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Trust Wallet</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-5 col-7">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="w3.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Token Pocket</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="03.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Coinbase</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="05.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Portis</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
