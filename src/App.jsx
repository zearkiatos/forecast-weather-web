import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <div>
          <Link to="/main">Go To Main</Link>
        </div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/city" element={<City />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
