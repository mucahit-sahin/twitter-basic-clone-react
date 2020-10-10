import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./Friend.css";

function Friend({ displayName, username }) {
  return (
    <div className="friend">
      <Avatar />
      <h3>{displayName}</h3>
      <Button className="friend-follow">Follow</Button>
    </div>
  );
}

export default Friend;
