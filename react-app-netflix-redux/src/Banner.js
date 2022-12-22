import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://webpages.scu.edu/ftp/lrlam/Images/Netflix_banner.jpg")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my list</button>
        </div>
        <h1 className="banner__description">This is a test description.</h1>
      </div>
    </header>
  );
}

export default Banner;
