import React, { useState } from "react";
import "./styles.css";

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/150" alt="Profile Picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
    </React.Fragment>
  );
};

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
