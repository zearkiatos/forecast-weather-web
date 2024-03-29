import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiNightClear,
  WiThunderstorm,
  WiRaindrop,
  WiDayHaze,
  WiSmoke,
} from "react-icons/wi";
import { IconContext } from "react-icons";
import WEATHERS from "../../utils/constants/weathers";

const stateByName = {
  CLOUD: <WiCloud />,
  CLOUDS: <WiCloud />,
  CLOUDY: <WiDayCloudy />,
  FOG: <WiDayFog />,
  SUNNY: <WiDaySunny />,
  RAIN: <WiRain />,
  SNOW: <WiSnow />,
  NIGHT_CLEAR: <WiNightClear />,
  CLEAR: <WiDaySunny />,
  DRIZZLE: <WiRaindrop />,
  THUNDERSTORM: <WiThunderstorm />,
  HAZE: <WiDayHaze />,
  MIST: <WiDayFog />,
  SMOKE: <WiSmoke />,
};

const IconState = ({ state }) => {
  const iconContextSize = useMemo(
    () => ({
      size: "5em",
    }),
    []
  );
  const StateByName = () => stateByName[state] || <WiDaySunny />;
  return (
    <div>
      <IconContext.Provider value={iconContextSize}>
        <StateByName />
      </IconContext.Provider>
    </div>
  );
};

const stateValidValues = Object.values(WEATHERS);

IconState.propTypes = {
  state: PropTypes.oneOf(stateValidValues).isRequired,
};

export default IconState;
