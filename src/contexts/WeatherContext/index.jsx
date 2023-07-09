import { createContext, useReducer } from "react";
import { WEATHER_TYPES, FORECAST_TYPES, CHART_TYPES } from "../../types";

const initializateValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {},
};

const WeatherStateContext = createContext();

const WeatherDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case WEATHER_TYPES.SET_ALL_WEATHER:
      const weatherCity = action.payload;
      const newAllWeather = { ...state.allWeather, ...weatherCity };
      return {
        ...state,
        allWeather: newAllWeather,
      };
    case CHART_TYPES.SET_CHART_DATA:
      const chartDataCity = action.payload;
      const newAllChartData = {
        ...state.allChartData,
        ...chartDataCity,
      };
      return {
        ...state,
        allChartData: newAllChartData,
      };
    case FORECAST_TYPES.SET_FORECAST_ITEM_LIST:
      const forecastItemListCity = action.payload;
      const newAllForecastItemListCity = {
        ...state.allForecastItemList,
        ...forecastItemListCity,
      };

      return {
        ...state,
        allForecastItemList: newAllForecastItemListCity,
      };

    default:
      return state;
  }
};

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializateValue);

  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  );
};

export { WeatherContext, WeatherDispatchContext, WeatherStateContext };
