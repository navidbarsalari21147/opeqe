/* eslint-disable prettier/prettier */
import React from "react";

const Footer = () => (
  <footer>
    <div
      className="col p-0 d-flex justify-content-center"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="col-9 p-0 d-flex flex-column">
        <div
          className="col px-0 py-2 d-flex"
          style={{
            borderBottom: ".5px solid #464646",
          }}
        >
          <div className="col-6 p-0 d-flex">
            <img
              width="128px"
              className="px-1"
              src={require("../../../assets/icons/ios.png")}
            />
            <img
              width="128px"
              src={require("../../../assets/icons/android.png")}
            />
          </div>
          <div
            className="col-6 p-0 d-flex justify-content-center align-items-center"
            style={{
              color: "#a5a5a5",
            }}
          >
            <a className="col-2 p-0 d-flex justify-content-center">About</a>
            <a className="col-2 p-0 d-flex justify-content-center">Services</a>
            <a className="col-2 p-0 d-flex justify-content-center">Support</a>
            <a className="col-2 p-0 d-flex justify-content-center">Gallery</a>
            <a className="col-2 p-0 d-flex justify-content-center">Terms</a>
            <a className="col-2 p-0 d-flex justify-content-center">Locations</a>
          </div>
        </div>
        <div
          className="col p-0 d-flex flex-column"
          style={{
            borderBottom: ".5px solid #464646",
          }}
        >
          <div className="col p-0 py-4 d-flex">
            <div className="col-3 p-0 d-flex flex-column">logo</div>
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Main Menu</span>
              <a className="font-large text-fourth">Pickup</a>
            </div>
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Orders</span>
              <a className="font-large text-fourth">Upcoming Orders</a>
              <a className="font-large text-fourth">Recent Orders</a>
            </div>
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Reservation</span>
              <a className="font-large text-fourth">Recent Reservation</a>
              <a className="font-large text-fourth">Wait To Be Seated</a>
            </div>
          </div>
          <div className="col p-0 py-4 d-flex">
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Profile</span>
              <a className="font-large text-fourth">Promos & Credits</a>
              <a className="font-large text-fourth">Rewards</a>
            </div>
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Special Offers</span>
              <a className="font-large text-fourth">Chief Special</a>
              <a className="font-large text-fourth">code FREEDINE</a>
              <a className="font-large text-fourth">Breakfast Special</a>
            </div>
            <div className="col-3 p-0 d-flex flex-column">
              <span className="font-xxlarge ">Support</span>
              <a className="font-large text-fourth">Contact Us</a>
              <a className="font-large text-fourth">Live Chat</a>
            </div>
          </div>
        </div>
        <div className="col px-0 py-4 my-4 d-flex flex-column text-fourth font-large ">
          <span>
            Delight customers everywhere with a branded custom-built native iOS,
            native Android and Installable Website Application.
          </span>
          <span>
            Opeqe is reliable, fast and commission free all-in-one ordering
            solutions for multi-location or single location restaurants.
          </span>
          <div className="col px-0 py-4 d-flex justify-content-between">
            <div className="d-flex">
              <span>©2019 OPEQE INC</span>
              <span className="px-3">|</span>
              <span>Terms & Conditions</span>
              <span className="px-3">|</span>
              <span>Privacy Policy</span>
            </div>
            <div className="d-flex text-white font-xxlarge">
              <div className="col-3">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="col-3">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="col-3">
                <i className="fab fa-facebook-square"></i>
              </div>
              <div className="col-3">
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
