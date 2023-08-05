import React from "react";
import ForecastChart from ".";
import forecastChartData from "../../data/mocks/forecastChartData";

export default {
  title: "ForecastChart",
  component: ForecastChart,
};

export const ForecastChartExample = () => <ForecastChart data={forecastChartData} />;
