import React from "react";


function UserTweet(props) {
  return (
     <p className = "tweetText" > { props.text } </p>
  );
}


export default UserTweet;