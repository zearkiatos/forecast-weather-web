import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry the page was not found 🤯</h1>
      <div>
        <Link to="/main">Return to Main</Link>
      </div>
    </div>
  );
};

export default NotFound;
