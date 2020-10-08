import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        userimage="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
        username="mucahitsah"
        displayName="Mücahit Şahin"
        text="Yeni Apple Watch Series 6 ve Apple Watch SE Türkiye'ye ön siparişe açıldı!

        Apple Watch Series 6: 3.799 TL
        Apple Watch Series 6 44 mm: 4.049 TL
        Apple Watch SE 40 mm: 2.699 TL
        Apple Watch SE 44 mm: 2.949 TL
        "
      />
      <Post
        userimage="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
        username="mucahitsah"
        displayName="Mücahit Şahin"
        text="Diego Perotti: “Fenerbahçe gibi önemli bir ekibe katılmak gerçekten
        benim için de mutluluk verici. Kendi tecrübemle takıma katkıda
        bulunacağıma inanıyorum. Takımın da kapasitesi oldukça geniş ve yüksek.
        Bu kapasiteyle hep beraber başarılara ulaşacağımıza inanıyorum.”
        "
      />
    </div>
  );
}

export default Feed;
