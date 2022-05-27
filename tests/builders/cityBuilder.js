import BaseBuilder from "./baseBuilder";

class CityBuilder extends BaseBuilder {
  constructor() {
    super();
    this.city = "Puerto Cabello";
    this.country = "Venezuela";
  }

  withCity(city) {
    this.city = city;
    return this;
  }

  withCountry(country) {
    this.country = country;
    return this;
  }
}

export default CityBuilder;
