import React from "react";
import { useNavigate } from "react-router-dom";
import CityList from "../../components/CityList";

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
    <div>
      <h2>City list</h2>
      <CityList cities={citiesMock} onClickCity={onClickHandler} />
    </div>
  );
};

export default Main;
