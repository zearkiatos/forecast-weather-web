import React, { useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";
import { WEATHER_TYPES, FORECAST_TYPES, CHART_TYPES } from "./types";

const App = () => {
  const initializateValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {},
  };
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
  const [state, dispatch] = useReducer(reducer, initializateValue);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main data={state} actions={dispatch} />} />
        <Route
          path="/city/:countryCode/:city"
          element={<City data={state} actions={dispatch} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
