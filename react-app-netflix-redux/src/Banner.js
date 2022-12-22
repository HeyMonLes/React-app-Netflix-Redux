import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://getwallpapers.com/wallpaper/full/2/6/6/29787.jpg")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my list</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description. This is a test description. This is a test
          description. This is a test description.This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description.This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test description.
          This is a test description. This is a test description. This is a test
          description. This is a test description. This is a test.
          This is a test description.`,
            20
          )}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
