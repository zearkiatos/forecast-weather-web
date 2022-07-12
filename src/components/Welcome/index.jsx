import React, { useRef } from "react";
import PropTypes from "prop-types";

const Welcome = ({ children }) => {
  const myRefDiv = useRef(null);
  console.log("myRefDiv.current", myRefDiv.current);
  return <div ref={myRefDiv}>Welcome</div>;
};

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Welcome;
