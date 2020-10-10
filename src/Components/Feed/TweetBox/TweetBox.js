import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Mücahit Şahin",
      username: "mucahitsah",
      text: tweetMessage,
      userImage:
        "https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4",
    });
    setTweetMessage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input-row">
          <Avatar src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            className="tweetbox-input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} className="tweetbox-button">
          Tweetle
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
