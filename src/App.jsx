import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import City from "./pages/City";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item sm={10}>
        <h1>App</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/main" element={<Main />} />
            <Route path="/city" element={<City />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Grid>
  );
};

export default App;
