import React from "react";
import "./Topbar.css";
import img from "../../Images/cafe logo.png";

export default function Topbar() {
  
  return (
    <div id="topbar">
      <div id="topbar-box">
        <div id="topbar-logo">
        <img src={img} alt="logo"/>
        <h3>THE KING'S CAFE</h3>
        </div>
      </div>
    </div>
  );
}
