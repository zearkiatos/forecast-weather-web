import BaseBuilder from "./baseBuilder";
import WEATHERS from "../../src/utils/constants/weathers";
import DAY_OF_WEEK from "../../src/utils/constants/weekDays";

class ForecastBuilder extends BaseBuilder {
  constructor() {
    super();
    this.hour = 15;
    this.temperature = 29;
    this.state = WEATHERS.CLOUDY;
    this.weekDay = DAY_OF_WEEK.SUNDAY;
  }

  withHour(hour) {
    this.hour = hour;
    return this;
  }

  withTemperature(temperature) {
    this.temperature = temperature;
    return this;
  }

  withState(state) {
    this.state = state;
    return this;
  }

  withWeekDay(weekDay) {
    this.weekDay = weekDay;
    return this;
  }
}

export default ForecastBuilder;
