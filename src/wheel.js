import React, { Component } from "react";
import "./wheel.css";

function RoundedDiv() {
  return (
    <div className="outside-rounded-div">
      <p className="menu">Menu</p>
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios/20/fast-forward.png"
        alt="fast-forward"
        className="forward"
      />
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/rewind.png"
        alt="rewind"
        className="backward"
      />
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/external-solid-kawalan-studio/20/000000/external-play-pause-user-interface-solid-kawalan-studio.png"
        alt="play pause"
        className="play-pause"
      />
      {/* <p className='backward'>backward</p> */}
      <div className="inside-rounded-div"></div>
    </div>
  );
}

export default RoundedDiv;
