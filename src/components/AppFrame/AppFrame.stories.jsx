import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppFrame from ".";

export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame />
  </Router>
);
