import React from "react";

const User = ({ myKey, name, age }) => {
  return (
    <div key={myKey}>
      <h1>
        {name} {age}
      </h1>
    </div>
  );
};

export default User;
