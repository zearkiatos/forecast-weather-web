import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from '../Weather/weathers';

const renderCity = ({ city, country }) => (
  <li key={`${city}-${country}`}>
    <CityInfo city={city} country={country} />
    <Weather temperature={10} state={WEATHERS.SUNNY} />
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
