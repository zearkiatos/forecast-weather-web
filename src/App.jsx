import React, { useState, useCallback, useMemo } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  const [allWeather, setAllWeather] = useState({});
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

  const actions = useMemo(
    () => ({
      onSetAllWeather,
    }),
    [onSetAllWeather]
  );

  const data = useMemo(
    () => ({
      allWeather,
    }),
    [allWeather]
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
