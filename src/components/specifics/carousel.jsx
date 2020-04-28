/* eslint-disable prettier/prettier */
import React from "react";

const Carousel = ({ dataGallery }) => {
  return (
    <React.Fragment>
      <div className="col p-0 d-flex flex-column">
        <div className="main-carousel" data-flickity='{ "groupCells": true }'>
          {dataGallery.map((item, index) => {
            return (
              <div
                key={index}
                className="  divStyle my-3 carousel-cell is-selected"
              >
                <img
                  width="100%"
                  src={require(`../../assets/images/${item.imageName}`)}
                />
                <div key={index} className="d-flex flex-column py-1">
                  <span className="text-third font-xlarge">{item.name}</span>
                  <div className="d-flex font-large">
                    <span className="text-primary">{item.detail}.</span>
                    <span className="px-1 text-dark-gray">
                      {item.preDetail}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between text-third">
                    <div className="d-flex align-items-center bg-light-gray">
                      <i className="fal fa-clock"></i>
                      <span>{item.time} Mins</span>
                      <span className="px-1 bg-gray">${item.price}</span>
                    </div>
                    <div className="bg-light-gray text-primary">
                      <span>Free Pickup</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {dataGallery.map((item, index) => {
        <div key={index} className="d-flex flex-column py-1">
          <span className="text-third font-xlarge">{item.name}</span>
          <div className="d-flex font-large">
            <span className="text-primary">{item.detail}.</span>
            <span className="px-1 text-dark-gray">{item.preDetail}</span>
          </div>
          <div className="d-flex justify-content-between text-third">
            <div className="d-flex align-items-center bg-light-gray">
              <i className="fal fa-clock"></i>
              <span>{item.time} Mins</span>
              <span className="px-1 bg-gray">${item.price}</span>
            </div>
            <div className="bg-light-gray text-primary">
              <span>Free Pickup</span>
            </div>
          </div>
        </div>;
      })} */}
    </React.Fragment>
  );
};

export default Carousel;
