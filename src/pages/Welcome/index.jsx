import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <div>
        <Link to="/main">Go To Main</Link>
      </div>
    </div>
  );
};

export default Welcome;
