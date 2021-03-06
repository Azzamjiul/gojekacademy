import React, { useState } from "react";
import "./styles.css";

const Post = ({ src }) => <img src={src} alt="profile" />;

const Profile = (props) => {
  const { username } = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState(false);
  const postCount = 5;
  const posts = [...Array(5)];

  return (
    <React.Fragment>
      <input
        placeholder="Search"
        onChange={(e) => {
          setInputAccount(e.target.value);
        }}
      />
      <div>{inputAccount}</div>
      <img src="https://via.placeholder.com/150" alt="Profile" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>{postCount} Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
        posts.map((_, idx) => (
          <Post src="https://via.placeholder.com/150" key={idx} />
        ))
      )}
    </React.Fragment>
  );
};

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
