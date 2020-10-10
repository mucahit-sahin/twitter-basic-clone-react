import React from "react";
import "./Widgets.css";
import Friend from "./Friend/Friend";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget-search">
        <SearchIcon className="widget-search-icon" />
        <input type="text" placeholder="Twitter Search" />
      </div>

      <div className="widget-tags">
        <h3>Gündem</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
        <h3>#Deneme</h3>
      </div>

      <div className="widget-recommended-friends">
        <Friend displayName="Ahmet Yılmaz" />
        <Friend displayName="Mehmet Dursun" />
        <Friend displayName="Necati Şahin" />
      </div>
    </div>
  );
}

export default Widgets;
