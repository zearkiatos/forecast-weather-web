import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";
import { WeatherContext } from "./contexts/WeatherContext";

const App = () => {
  return (
    <WeatherContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/city/:countryCode/:city" element={<City />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </WeatherContext>
  );
};

export default App;
