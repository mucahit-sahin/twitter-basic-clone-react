import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {posts.map((post) => (
        <Post
          userimage={post.userImage}
          username={post.username}
          displayName={post.displayName}
          text={post.text}
          shareImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Feed;
