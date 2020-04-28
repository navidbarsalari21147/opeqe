/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/common/footer/footer";
import Button from "../../components/specifics/button";
import Carousel from "../../components/specifics/carousel";

export default class Layout extends Component {
  render() {
    const data = require("../../utils/data.json");
    const americanData = require("../../utils/american.json");
    return (
      <section>
        <Header />
        <div className="col d-flex flex-column main-content p-0">
          <div className="col p-0">
            <img src={require("../../assets/images/HomeHeader.jpg")} />
          </div>
          <div className="col py-2 d-flex align-items-center shadowBox font-large">
            <div className="col-4 p-0 d-flex">
              <div className="col-6 p-0 d-flex flex-column">
                <span className="text-center text-secondary">ASAP Pickup</span>
                <span className="text-center text-fourth">
                  Beverly Hills - 1008 Elden Way
                </span>
              </div>
              <div className="col-6 p-0  d-flex align-items-center">
                <Button
                  label="Change"
                  backgroundColor="black"
                  color="white"
                  className=" border border-primary font-small"
                />
                <div className="col-6 d-flex text-third">
                  <div>
                    <span>Delivery</span>
                  </div>
                  <span className="px-2 text-fourth">or</span>
                  <div>
                    <span>Pickup</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 d-flex justify-content-center">
              <div
                className="col-11  p-0 d-flex align-items-center"
                style={{ height: "45px" }}
              >
                <div
                  className="col-2 d-flex align-items-center justify-content-center p-0 h-100 bg-third text-white text-center "
                  style={{
                    borderRadius: "30px 0 0 30px",
                  }}
                >
                  <span className="font-xlarge">ALL</span>
                </div>
                <input
                  className="col-9 px-2 py-3 h-100 border-0"
                  style={{ backgroundColor: "#d7d7d7" }}
                  placeholder="Looking for something?"
                />
                <div
                  className="col-1 d-flex align-items-center justify-content-center p-0 h-100 text-white font-xlarge"
                  style={{
                    backgroundColor: "#026764",
                    borderRadius: "0px 30px 30px 0px",
                    outline: "none",
                  }}
                >
                  <i className="fal fa-search  px-1 d-flex align-items-center justify-content-center font-xxlarge font-weight-bold"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 p-4 my-4 d-flex flex-column">
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <span className="px-2 py-1 font-xxlarge font-weight-bold text-thirdfont-xxlarge font-weight-bold text-third border-bottom">
                  {item.title}
                </span>
                <Carousel dataGallery={item.child} />
              </React.Fragment>
            ))}
          </div>
          <div
            className="col py-4 my-4 d-flex align-items-center "
            style={{
              borderTop: ".5px solid #d7d7d7",
            }}
          >
            <div className="col-4 p-0 d-flex justify-content-end">
              <img
                src={require("../../assets/images/android-mobile-app.jpg")}
              />
            </div>
            <div className="col-4 p-0 d-flex flex-column align-items-center font-large">
              <span
                className="text-uppercase"
                style={{
                  color: "#a5a5a5",
                }}
              >
                CROSS PLATFORM
              </span>
              <div className="text-dark">
                <span>native</span>
                <span className="px-1 font-weight-bold text-uppercase">
                  MOBILE APPLICATION
                </span>
              </div>
              <div className="font-weight-bold" style={{ color: "#026764" }}>
                <span className="text-capitalize">Android</span>
                <span>,</span>
                <span className="px-1" style={{ color: "#996515" }}>
                  iOS
                </span>
              </div>
              <div>
                <span
                  className="text-uppercase font-weight-bold"
                  style={{ color: "#996515" }}
                >
                  HYBRID DESIGN
                </span>
                <span
                  className="text-capitalize px-1"
                  style={{ color: "#a5a5a5" }}
                >
                  Mobile first
                </span>
              </div>
              <div className="text-uppercase">
                <span className="color-Main  font-weight-bold">
                  INSTALLABLE
                </span>
                <span className="px-1">WEB APPLICATION</span>
              </div>
              <span style={{ color: "#a5a5a5" }}>FOR ANY SIZE RESTAURANT</span>
              <div
                className="col-8 p-0 d-flex justify-content-center align-items-center"
                style={{ height: "45px" }}
              >
                <input
                  className="col-6 px-2 py-3 h-100 border-0"
                  id="number"
                  style={{
                    backgroundColor: "#d7d7d7",
                    borderRadius: "30px 0px 0px 30px",
                  }}
                  placeholder="e.g. +18774667373"
                />
                <button
                  className="col-6 d-flex align-items-center justify-content-center p-0 h-100 text-white font-xlarge"
                  style={{
                    backgroundColor: "#026764",
                    borderRadius: "0px 30px 30px 0px",
                    border: 0,
                  }}
                >
                  <span className="text-uppercase">Text Me</span>
                  <span className="px-1 font-small">demo App</span>
                </button>
              </div>
            </div>
            <div className="col-4 p-0 d-flex justify-content-start">
              <img src={require("../../assets/images/ios-mobile-app.jpg")} />
            </div>
          </div>
          <div className="w-100 p-4 my-4 d-flex flex-column">
            {americanData.map((item, index) => (
              <React.Fragment key={index}>
                <span className="px-2 py-1 font-xxlarge font-weight-bold text-thirdfont-xxlarge font-weight-bold text-third border-bottom">
                  {item.title}
                </span>
                <Carousel dataGallery={item.child} />
              </React.Fragment>
            ))}
          </div>
          <div
            className="col py-4 my-4 d-flex align-items-center "
            style={{ borderTop: "0.5px solid rgb(215, 215, 215)" }}
          >
            <div className="col-7 d-flex alig-items-center justify-content-center">
              <img src={require("../../assets/images/gift.jpg")} />
            </div>
            <div className="col-4 my-4 d-flex flex-column">
              <div className="d-flex justify-content-center font-weight-bold font-xlarge">
                <span className="text-fourth">Branded </span>
                <span className="text-secondary px-1">Gift Card</span>
              </div>
              <span className="text-center">logo</span>
              <span className="font-large text-justify text-third">
                Opeqe provides a wide range of customizable products for reward
                and incentive programs that can meet your restaurant’s goals.
                Whether you are looking to drive the addition of new customers,
                increase the loyalty of existing ones we have a customized
                solution for you.
              </span>
              <div className="d-flex justify-content-start my-3">
                <Button
                  label="GET ONLINE QUOTE"
                  backgroundColor="black"
                  color="white"
                  width="180px"
                  height="50px"
                  className=" border border-primary font-large"
                />
              </div>
            </div>
          </div>
          <div className="col py-4 my-4 d-flex flex-column align-items-center">
            <span className="font-xxxlarge text-third">Ready to order?</span>
            <span className="font-xxxlarge text-fourth">
              Browse our menu for dine-in, delivery or pickup and catering
            </span>
            <div className="col-6 p-0 d-flex flex-column">
              <div className="col my-2 p-0 d-flex">
                <div className="col-6 p-0 d-flex flex-column">
                  <span className="text-center text-secondary">
                    ASAP Pickup
                  </span>
                  <span className="text-center text-fourth">
                    Beverly Hills - 1008 Elden Way
                  </span>
                </div>
                <div className="col-6 p-0  d-flex align-items-center">
                  <Button
                    label="Change"
                    backgroundColor="black"
                    color="white"
                    className=" border border-primary"
                  />
                  <div className="col-6 d-flex text-third">
                    <div>
                      <span>Delivery</span>
                    </div>
                    <span className="px-2 text-fourth">or</span>
                    <div>
                      <span>Pickup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
