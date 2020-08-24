import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search"
 import { TwitterTimelineEmbed, TwitterTweetEmbed, TwitterShareButton} from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search"/>
        <input placeholder="search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
          <h2>Whats happening</h2>

          <TwitterTweetEmbed tweetId={"1297851064868392960"} />

          <TwitterTimelineEmbed sourceType="profile"
          screenName="MarcelN_21"
          options={{ height: 400 }} />

          <TwitterShareButton url={"https://www.facebook.com/morell.nwosu"}
          options={{ text: "#reactjs is awesome", via: "MarcelN_21"}} />
      </div>
    </div>
  );
}

export default Widgets;
