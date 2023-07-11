import { useContext } from "react";
import { WeatherDispatchContext } from "../../contexts/WeatherContext";

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext);

  if (!dispatch) {
    throw Error("The dispatch provider must be setted");
  }
  return dispatch;
};

export default useWeatherDispatchContext;
