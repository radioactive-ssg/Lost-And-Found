import React from "react";

import logo from "../assets/logo.png"; // adjust path if needed

const LoadingIcon = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Spinning ring */}
      <div data-loader="logo-circle"></div>

      {/* Centered logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "60px",
          height: "60px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default LoadingIcon;
