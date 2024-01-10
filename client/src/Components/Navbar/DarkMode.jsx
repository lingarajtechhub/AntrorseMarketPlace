// eslint-disable-next-line no-unused-vars
import React from "react";
// import LightButton from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  return (
    <div className="relative">
      <img
        // src={LightButton}
        alt=""
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;