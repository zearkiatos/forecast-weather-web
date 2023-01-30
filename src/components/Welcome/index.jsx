import React from "react";
import PropTypes from "prop-types";
import useVanta from "../../hooks/useVanta";

const Welcome = ({ children }) => {
  const myRefDiv = useVanta();
  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Welcome;
