import React from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import RepeatIcon from "@material-ui/icons/Repeat";

function Post({ userimage, username, displayName, text, shareImage }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={userimage} />
        <h3>{displayName}</h3>
        <h4>{"@" + username}</h4>
      </div>
      <div className="post-content">{text}</div>
      {shareImage && (
        <div className="post-image">
          <img src={shareImage} alt="shareimage" />
        </div>
      )}
      <div className="post-event">
        <div>
          <FavoriteBorderIcon />
        </div>
        <div>
          <CommentIcon />
        </div>
        <div>
          <RepeatIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
