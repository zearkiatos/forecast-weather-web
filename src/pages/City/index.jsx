import React from "react";
import { Link } from "react-router-dom";

const City = () => {
  return (
    <div>
      <h2>City Page</h2>
      <div>
        <Link to="/main">Return to Main</Link>
      </div>
    </div>
  );
};

export default City;
