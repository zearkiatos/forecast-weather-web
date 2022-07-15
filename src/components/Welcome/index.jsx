import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const Welcome = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(null);
  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }

    return () => vanta && vanta.destroy();
  }, [vanta]);
  return <div ref={myRefDiv}>Welcome</div>;
};

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Welcome;
