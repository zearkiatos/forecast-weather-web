import { useRef, useEffect, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const useVanta = () => {
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

  return myRefDiv;
};

export default useVanta;
