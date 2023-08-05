import { useContext } from "react";
import { WeatherStateContext } from "../../contexts/WeatherContext";

const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext);

  if (!state) {
    throw Error("The state provider must be setted");
  }
  return state;
};

export default useWeatherStateContext;
