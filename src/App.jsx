import React, { useState, useCallback, useMemo, useReducer } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  const initializateValue = {};
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initializateValue);
  // code for replace
  const [allWeather, setAllWeather] = useState({});
  const [allChartData, setAllChartData] = useState({});
  const [allForecastItemList, setAllForecastItemList] = useState({});
  const onSetAllWeather = useCallback(
    (cityWeather) =>
      setAllWeather((allWeather) => {
        return {
          ...allWeather,
          ...cityWeather,
        };
      }),
    [setAllWeather]
  );

  const onSetChartData = useCallback(
    (chartDataCity) => {
      setAllChartData((chartData) => ({
        ...chartData,
        ...chartDataCity,
      }));
    },
    [setAllChartData]
  );

  const onSetForecastItemList = useCallback(
    (forecastItemListCity) => {
      setAllForecastItemList((forecastItemList) => ({
        ...forecastItemList,
        ...forecastItemListCity,
      }));
    },
    [setAllForecastItemList]
  );

  const actions = useMemo(
    () => ({
      onSetAllWeather,
      onSetChartData,
      onSetForecastItemList,
    }),
    [onSetAllWeather, onSetChartData, onSetForecastItemList]
  );

  const data = useMemo(
    () => ({
      allWeather,
      allChartData,
      allForecastItemList,
    }),
    [allWeather, allChartData, allForecastItemList]
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main data={data} actions={actions} />} />
        <Route
          path="/city/:countryCode/:city"
          element={<City data={data} actions={actions} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
