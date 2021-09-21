import request from "superagent";

const APIKEY = process.env.WEATHER_API_KEY;

export function getAucklandWeather() {
  return request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${APIKEY}`
    )
    .set("Accept", "application/json")
    .then((response) => {
      console.log("response", response.body.coord);

      return response.body.weather.main;
    });
}
