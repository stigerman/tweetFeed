
import React from "react";


function Avatar(props) {
  return (
    <img className = "twitter-avatar"
      src = { props.user.profile_image_url }
      alt={props.user.name}
    />

  );
}


export default Avatar;