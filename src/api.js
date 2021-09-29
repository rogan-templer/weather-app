import request from "superagent";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
console.log("key is", API_KEY);

export function getAucklandWeather() {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=${API_KEY}`
    )
    .set("Accept", "application/json")
    .then((response) => {
      console.log("weather response", response.body.weather);

      return response.body.weather;
    });
}

export function getAucklandTemp() {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=${API_KEY}`
    )
    .set("Accept", "application/json")
    .then((response) => {
      console.log("temp response", response.body.main.temp);

      return response.body.main.temp;
    });
}


