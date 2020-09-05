import React from "react";
import "./styles.css";

export default function App() {
  const username = "instagram";

  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/300" alt="Profile Picture" />
      <div>@{username}</div>
      <button>Follow</button>
      <div>Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
    </React.Fragment>
  );
}
