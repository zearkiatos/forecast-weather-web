import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import CityList from "../../components/CityList";
import AppFrame from "../../components/AppFrame";

const citiesMock = [
  {
    city: "New York",
    country: "United States",
  },
  {
    city: "Santiago de Chile",
    country: "Chile",
  },
  {
    city: "Puerto Cabello",
    country: "Venezuela",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
  {
    city: "Bogota",
    country: "Colombia",
  },
  {
    city: "Madrid",
    country: "Spain",
  },
  {
    city: "Ciudad de Mexico",
    country: "Mexico",
  },
];
const Main = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/city");
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={citiesMock} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default Main;
