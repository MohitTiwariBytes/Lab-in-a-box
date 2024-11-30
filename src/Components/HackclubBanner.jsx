import React from "react";

const HackClubBanner = () => {
  return (
    <a 
      href="https://hackclub.com/" 
      style={{
        position: "absolute",
        top: 0,
        left: "10px",
        zIndex: 999,
      }}
    >
      <img 
        src="https://assets.hackclub.com/flag-orpheus-top.svg" 
        alt="Hack Club" 
        style={{
          border: 0,
          width: "156px",
        }}
      />
    </a>
  );
};

export default HackClubBanner;
