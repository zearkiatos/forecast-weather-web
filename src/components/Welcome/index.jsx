import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ children }) => {
  return <div>Welcome</div>;
};

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Welcome;
