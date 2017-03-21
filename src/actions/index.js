import axios from 'axios';

const WEATHER_API_KEY = '70676c9a3b078bcc6cad01bc1783ea3f';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + WEATHER_API_KEY;
// same as:
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // api doc to see fetch weather by city name
  const url = `${ROOT_URL}&q=${city},us`;

  // axios returns a promise, which does not actually contain any data
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
