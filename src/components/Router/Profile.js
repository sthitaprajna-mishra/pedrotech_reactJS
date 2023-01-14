import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  return (
    <div>
      <h2>{username} Profile</h2>
    </div>
  );
};

export default Profile;
