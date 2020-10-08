import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input-row">
          <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
          <input
            className="tweetbox-input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button className="tweetbox-button">Tweetle</Button>
      </form>
    </div>
  );
}

export default TweetBox;
