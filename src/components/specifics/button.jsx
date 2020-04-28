/* eslint-disable prettier/prettier */
import React from "react";

const Button = React.memo(
  ({
    label = "submit",
    backgroundColor,
    color = "black",
    width = "65px",
    height = "32px",
    className,
  }) => (
    <input
      type="button"
      value={label}
      className={`rounded-pill d-inline   ${className}`}
      style={{ outline: "none", backgroundColor, color, width, height }}
    />
  )
);

export default Button;
