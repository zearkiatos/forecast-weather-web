import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Welcome = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);
  useEffect(() => {
    console.log(`myRefDiv.current ${myRefDiv.current}`);
    if (!vanta) {
      setVanta(1);
      console.log("Vanta was initialized");
    }
  }, []);
  return <div ref={myRefDiv}>Welcome</div>;
};

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Welcome;
