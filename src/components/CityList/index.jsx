import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCity = ({ city, country }) => (
  <li>
    <CityInfo city={city} country={country} />
    <Weather temperature={10} state="SUNNY" />
  </li>
);

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => renderCity(city))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
