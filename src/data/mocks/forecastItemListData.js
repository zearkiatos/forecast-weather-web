import WEATHERS from "../../utils/constants/weathers";
import DAYS_OF_WEEK from "../../utils/constants/weekDays";

const forecastItemListData = [
  {
    hour: 18,
    state: WEATHERS.SUNNY,
    temperature: 17,
    weekDay: DAYS_OF_WEEK.MONDAY,
  },
  {
    hour: 6,
    state: WEATHERS.CLOUD,
    temperature: 18,
    weekDay: DAYS_OF_WEEK.FRIDAY,
  },
  {
    hour: 12,
    state: WEATHERS.FOG,
    temperature: 18,
    weekDay: DAYS_OF_WEEK.FRIDAY,
  },
  {
    hour: 18,
    state: WEATHERS.CLOUDY,
    temperature: 19,
    weekDay: DAYS_OF_WEEK.FRIDAY,
  },
  {
    hour: 14,
    state: WEATHERS.RAIN,
    temperature: 17,
    weekDay: DAYS_OF_WEEK.SATURDAY,
  },
  {
    hour: 14,
    state: WEATHERS.RAIN,
    temperature: 17,
    weekDay: DAYS_OF_WEEK.SATURDAY,
  },
];

export default forecastItemListData;
