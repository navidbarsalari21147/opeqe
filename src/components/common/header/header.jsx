/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import Button from "../../specifics/button";

const Header = () => (
  <header
    className="col d-flex align-items-center p-3 justify-content-center  "
    style={{
      height: "80px",
      backgroundColor: "#cfcfcf",
    }}
  >
    <div
      className="col-11 p-0 d-flex align-items-center"
      style={{
        color: "#696969",
      }}
    >
      <div className="col-7 p-0 ">Logo</div>
      <div className="col-5 p-0 d-flex justify-content-end align-items-center font-large">
        <a className=" px-3 d-flex justify-content-center">Reservation</a>
        <a className="px-3 d-flex justify-content-center">Orders</a>
        <a className="px-3 d-flex justify-content-center">Locations</a>
        <div className="px-1 d-flex justify-content-center">
          <Button
            label="Log In"
            backgroundColor="black"
            color="white"
            width="60px"
            height="30px"
            className="border-0 font-small"
          />
        </div>
        <div className="px-2 d-flex justify-content-center">
          <Button
            label="sign in"
            backgroundColor="transparent"
            className="border border-primary text-primary font-small"
          />
        </div>
        <div className="px-2 d-flex justify-content-center">
          <i className="fas fa-shopping-basket text-primary  px-1 d-flex align-items-center justify-content-center font-giant"></i>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
