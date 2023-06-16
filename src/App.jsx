import React, { useState, useMemo } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  const [allWeather, setAllWeather] = useState({});
  const onSetAllWeather = (cityWeather) =>
    setAllWeather((allWeather) => {
      return {
        ...allWeather,
        ...cityWeather,
      };
    });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/main"
          element={
            <Main allWeather={allWeather} onSetAllWeather={onSetAllWeather} />
          }
        />
        <Route
          path="/city/:countryCode/:city"
          element={
            <City allWeather={allWeather} onSetAllWeather={setAllWeather} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
